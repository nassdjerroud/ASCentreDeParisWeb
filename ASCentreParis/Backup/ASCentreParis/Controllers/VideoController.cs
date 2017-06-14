using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using DataAccess;
using Models;
using Commons;

namespace ASCentreParis.Controllers
{
    public class VideoController : BaseController
    {
	/// <summary>
	/// Lecture de la video
	/// </summary>
	/// <returns>The video.</returns>
    	public ActionResult ReadVideo(int idDocument)
		{
			
			string CheminDocument = "~/Ressources/Fichiers/Uploads/Document/Document_" + idDocument.ToString() + ".mp4";
			return new VideoResult(CheminDocument);
		}
    }
}
