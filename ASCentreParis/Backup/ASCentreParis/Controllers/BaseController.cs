using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Commons;
using Models;
using DataAccess;
using System.Security.Principal;

namespace ASCentreParis.Controllers
{
    public class BaseController : Controller
	{

		protected override void OnActionExecuting(ActionExecutingContext filterContext)
		{
			try
			{
			base.OnActionExecuting(filterContext);

				// Gestion du user connecté dans le context
			if(System.Web.HttpContext.Current.Session[Commons.Const.sessionName_UserConnecte]!=null)
				{
				Utilisateur UtilisateurConnecte = (Utilisateur)System.Web.HttpContext.Current.Session[Commons.Const.sessionName_UserConnecte];
				if(UtilisateurConnecte.Login!=null)
					{
					CustomPrincipal UserConnecte = new CustomPrincipal(UtilisateurConnecte.Login);
					System.Web.HttpContext.Current.User = UserConnecte;
					GenericPrincipal gp = new GenericPrincipal(System.Web.HttpContext.Current.User.Identity, UtilisateurConnecte.Profils.ToArray());
					System.Web.HttpContext.Current.User = gp;
					}
				else
					{
					System.Web.HttpContext.Current.User = null;
					}						
				}
			else
				{
				System.Web.HttpContext.Current.User = null;
				}

			// On va regarder en base de données la liste des catégories de documents à afficher
			if(System.Web.HttpContext.Current.Session[Commons.Const.sessionName_MenusDocuments]==null)
				{
				using (DocumentDAL db=new DocumentDAL())
				    {
				    List<CategorieDocument> listeMenus = db.getListeCategoriesDocument();
			        Session[Commons.Const.sessionName_MenusDocuments] = listeMenus;
				    }
			    }

			// On va regarder en base de données la liste des catégories d'équipe à afficher
			if(System.Web.HttpContext.Current.Session[Commons.Const.sessionName_MenusEquipes] == null)
				{
					using (EquipeDAL db = new EquipeDAL())
					{
						List<Equipe> listeEquipes = db.getListeEquipes();
						Session[Commons.Const.sessionName_MenusEquipes] = listeEquipes;
					}
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(BaseController), e.ToString());
			}
				
		}

	}
}
