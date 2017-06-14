using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using DataAccess;
using Models;
using System.Security.Principal;



namespace ASCentreParis.Controllers
{
    public class LoginController : BaseController
    {
		/// <summary>
		/// Login this instance.
		/// </summary>
		/// <returns>The login.</returns>
		public ActionResult Login()
		{
			ObjLogin model = new ObjLogin();

			return PartialView("~/Views/Login/Login.cshtml", model);
		}


		/// <summary>
		/// Logs the off post.
		/// </summary>
		/// <returns>The off post.</returns>
		[HttpPost]
		public JsonResult LogOffPost()
		{
			string result = "OK";
			try
			{

				System.Web.HttpContext.Current.Session[Commons.Const.sessionName_UserConnecte] = new Utilisateur(false);
				System.Web.HttpContext.Current.User = null;
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(HomeController), e.ToString());
				result = "KO";
			}

			return Json(new { Resultat = result });
		}

		/// <summary>
		/// Logins the post.
		/// </summary>
		/// <returns>The post.</returns>
		/// <param name="model">Model.</param>
		[HttpPost]
		public ActionResult LoginPost(ObjLogin model)
		{
			try
			{
				model.messageKO = "Erreur lors de la tentative de connection : ";


				if (ModelState.IsValid)
				{
					// Chargement en base
					using (UtilisateurDAL db = new UtilisateurDAL())
					{
						// On teste d'abord si l'utilisateur existe en bdd
						bool isLoginExistant = db.isUtilisateurExistant(model.Login);
						if (isLoginExistant)
						{
							// Si l'utilisateur existe, on regarde si le mot de passe est OK
							bool isConnexionOK = db.isConnexionOK(model.Login, model.Password);
							if (isConnexionOK)
							{
								model.messageKO = null;
								model.isConnectionOK = true;
								// maj de la variable de session concernant l'utilisateur connecté. P
								// L'utilisateur connecté sera admin du site
								Utilisateur UserConnecte = new Utilisateur(true);
								UserConnecte.Login = model.Login;
								System.Web.HttpContext.Current.Session[Commons.Const.sessionName_UserConnecte] = UserConnecte;
							}
							else
							{
								model.messageKO = model.messageKO + "Le mot de passe est erronné.";
							}
						}
						else
						{
							model.messageKO = model.messageKO + "Le login renseigné n'existe pas.";
						}
					}
				}

			}
			catch (Exception e)
			{
				model.messageKO = model.messageKO + e.Message;
				Commons.Logger.genererErreur(typeof(HomeController), e.ToString());
				//	return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return PartialView("~/Views/Login/Login.cshtml", model);
		}
    }
}
