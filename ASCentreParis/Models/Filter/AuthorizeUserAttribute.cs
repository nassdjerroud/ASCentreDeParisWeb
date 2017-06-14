using System;
using System.Web;
using System.Security;
using System.Security.Principal;
using System.Web.Mvc;
using System.Collections.Generic;


namespace Models
{
    public class AuthorizeUserAttribute : AuthorizeAttribute
    {
        public string Profiles { get; set; }

		/// <summary>
		/// Authorisation de l'utilisateur à la page
		/// </summary>
		/// <returns><c>true</c>, if core was authorized, <c>false</c> otherwise.</returns>
		/// <param name="httpContext">Http context.</param>
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
			//CustomPrincipal cp = (CustomPrincipal)httpContext.User;
			//List<string> Profils=httpContext.User.

			if(System.Web.HttpContext.Current.Session["sessionName_UserConnecte"] != null && ((Models.Utilisateur)(System.Web.HttpContext.Current.Session["sessionName_UserConnecte"])).Profils!=null)
			{
				// On récupère la liste des profils de l'utilisateur connecté
				List<string> ListeProfilsUtilisateurConnecte = ((Models.Utilisateur)(System.Web.HttpContext.Current.Session["sessionName_UserConnecte"])).Profils;
				string[] authorizedProfiles = this.Profiles.Split(',');

				if (ListeProfilsUtilisateurConnecte.Count == 0)
					return false;

				// On récupère ensuite la liste des profils autorisés à effectuer l'action

				foreach (string authorizedProfile in authorizedProfiles)
				{
					if (ListeProfilsUtilisateurConnecte.Contains(authorizedProfile))
						return true;
				}	
			}

            return false;
        }

		/// <summary>
		/// Handles the unauthorized request.
		/// </summary>
		/// <param name="filterContext">Filter context.</param>
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = new RedirectController().RedirectToError();
        }
    }


	/// <summary>
	/// Redirection vers la page d'erreurs indiquant que les droits sont insuffisants
	/// </summary>
    public class RedirectController : Controller
    {
        public ActionResult RedirectToError()
        {
            return View("Erreur_droitsInsufisants");
        }

    }
}