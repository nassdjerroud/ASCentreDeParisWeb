using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace ASCentreParis.Controllers
{
    public class JoueurController : BaseController
    {
		/// <summary>
		/// Affichers the joueur.
		/// </summary>
		/// <returns>The joueur.</returns>
        public ActionResult AfficherJoueur()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageEquipe");
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(JoueurController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Joueur/Joueur.cshtml");
		}
    }
}
