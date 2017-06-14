using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASCentreParis.Controllers
{
    public class ContactController : BaseController
    {
		/// <summary>
		/// Affichers the contacts.
		/// </summary>
		/// <returns>The contacts.</returns>
        public ActionResult AfficherContacts()
        {
			try
			{
				Business.StatBLL.ajouterStat("PageContact");
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(ContactController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
            return View ("~/Views/Contact/Contacts.cshtml");
        }
    }
}
