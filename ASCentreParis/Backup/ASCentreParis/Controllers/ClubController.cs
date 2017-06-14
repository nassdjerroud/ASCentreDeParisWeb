using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASCentreParis.Controllers
{
    public class ClubController : BaseController
    {
		/// <summary>
		/// Affichers the histoire.
		/// </summary>
		/// <returns>The histoire.</returns>
        public ActionResult AfficherHistoire()
        {
			try
			{
				Business.StatBLL.ajouterStat("PageClub");
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(ClubController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
            return View ("~/Views/Club/Histoire.cshtml");
        }

		/// <summary>
		/// Affichage des partenaires du club
		/// </summary>
		/// <returns>The partenaires.</returns>
		public ActionResult AfficherPartenaires()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageClub");
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(ClubController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
			return View("~/Views/Club/Partenaires.cshtml");
		}

		/// <summary>
		/// Affichers the partenariat psg.
		/// </summary>
		/// <returns>The partenariat psg.</returns>
		public ActionResult AfficherPartenariatPSG()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageClub");
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(ClubController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
			return View("~/Views/Club/PartenariatPSG.cshtml");
		}
    }
}
