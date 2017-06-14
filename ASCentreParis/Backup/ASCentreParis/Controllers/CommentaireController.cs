using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using DataAccess;
using Models;
namespace ASCentreParis.Controllers
{
    public class CommentaireController : BaseController
    {
		/// <summary>
		/// Création du
		/// </summary>
		/// <returns>The commentaire post.</returns>
		/// <param name="Utilisateur">Utilisateur.</param>
		/// <param name="Message">Message.</param>
		/// <param name="ActualiteId">Actualite identifier.</param>
		[HttpPost]
		public ActionResult CreerCommentairePost(string Utilisateur, string Message, int ActualiteId)
		{
			Actualite model = new Actualite();
			try
			{
				// On commence par créer l'entité commentaire
				Commentaire NouveauCommentaire = new Commentaire();
				NouveauCommentaire.idActualite = ActualiteId;
				NouveauCommentaire.Message = Message;
				NouveauCommentaire.Utilisateur = Utilisateur;
				NouveauCommentaire.DateCreation = DateTime.Now;

				using (CommentaireDAL db = new CommentaireDAL())
				{
					int idCommentaire = db.insertCommentaire(NouveauCommentaire);

				}
				using (ActualiteDAL dbActu = new ActualiteDAL())
				{
					model = dbActu.getActualiteById(ActualiteId);
				}
				model.styleCommentairesActualite = "";
				System.Web.HttpContext.Current.Session[Commons.Const.sessionName_NomUtilisateurCommentaire] = Utilisateur;

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(CommentaireController), e.ToString());
				//	return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return PartialView("~/Views/Commentaire/Commentaires.cshtml", model);
		}


		/// <summary>
		/// Fonction retournant le nom de l'utilisateur gardé en session
		/// </summary>
		/// <returns>The utilisateur session name.</returns>
		public JsonResult GetUtilisateurCommentaireSessionName()
		{
			string UtilisateurSessionName = "";
			if (System.Web.HttpContext.Current.Session[Commons.Const.sessionName_NomUtilisateurCommentaire] != null)
				UtilisateurSessionName = System.Web.HttpContext.Current.Session[Commons.Const.sessionName_NomUtilisateurCommentaire].ToString();
			return Json(new { UtilisateurSessionName = UtilisateurSessionName });
		}
    }
}
