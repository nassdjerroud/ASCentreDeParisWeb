using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASCentreParis.Controllers
{
	public class ErrorController : BaseController
	{
		/// <summary>
		/// Index this instance.
		/// </summary>
		/// <returns>The index.</returns>
		public ActionResult Index()
		{
			return View("~/Views/Shared/Error.cshtml");
		}

		/// <summary>
		/// Affichers the erreur.
		/// </summary>
		/// <returns>The erreur.</returns>
		/// <param name="message">Message.</param>
		public ActionResult AfficherErreur(string message)
		{
			ViewBag.typeErreur = message;
			return View("~/Views/Shared/Error.cshtml");
		}
	}
}
