using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Security.Principal;
using log4net;
using System.IO;
using System.Web.Optimization;
using System.Web.Optimization.Extensions;
using Models;
using System.Web.Security;


namespace ASCentreParis
{
	public class Global : HttpApplication
	{

		/// <summary>
		/// Applications the start.
		/// </summary>
		protected void Application_Start()
		{
			
			AreaRegistration.RegisterAllAreas();
			FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
			RouteConfig.RegisterRoutes(RouteTable.Routes);
			BundleConfig.RegisterBundles(BundleTable.Bundles);
			var path = Server.MapPath("~/log4net.xml");
			log4net.Config.XmlConfigurator.Configure(new System.IO.FileInfo(path));

		}

		/// <summary>
		/// Applications the error.
		/// </summary>
		/// <param name="sender">Sender.</param>
		/// <param name="e">E.</param>
		private void Application_Error(object sender, EventArgs e)
		{
			var ex = HttpContext.Current.Server.GetLastError();

			string messageErreur = "";
			string messagePageErreur = "";
			if (ex == null)
			{
				messageErreur = "Erreur inconnue";
				ex = new Exception();
				messagePageErreur = messageErreur;
			}
			else
			{
				messageErreur = ex.ToString();
				messagePageErreur = ex.Message;
			}

			//if (!ex.Message.Contains("Le contrôleur pour le chemin"))
				{
				Commons.Logger.genererErreur(typeof(HttpApplication),messageErreur);
				}
			string redirection = String.Format("~/Error/{0}/?message={1}", "AfficherErreur", messagePageErreur.Replace("\r", "").Replace("\n", ""));
			Response.Redirect(redirection);
		}


		/// <summary>
		/// Sessions the start.
		/// </summary>
		/// <param name="sender">Sender.</param>
		/// <param name="e">E.</param>
		private void Session_Start(object sender, EventArgs e)
		{
			// Au démarrage de la session, on créé un utilisateur fake non admin
			System.Web.HttpContext.Current.Session[Commons.Const.sessionName_UserConnecte] = new Utilisateur(false);
			System.Web.HttpContext.Current.Session[Commons.Const.sessionName_NomUtilisateurCommentaire] = "";
		}

		/// <summary>
		/// Applications the end.
		/// </summary>
		/// <param name="sender">Sender.</param>
		/// <param name="e">E.</param>
		private void Application_End(object sender, EventArgs e)
		{
			
		}
	}
}
