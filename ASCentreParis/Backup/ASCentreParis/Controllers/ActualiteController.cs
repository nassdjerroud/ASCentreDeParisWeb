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
    public class ActualiteController : BaseController
    {
	/// <summary>
	/// Afficher l'actualité en paramètre
	/// </summary>
	/// <returns>The actualite.</returns>
	/// <param name="idActualite">Identifier actualite.</param>
        public ActionResult AfficherActualite(int idActualite)
		{
			Actualite model = new Actualite();
			try
			{
				Business.StatBLL.ajouterStat("PageActualite");
				using (ActualiteDAL db = new ActualiteDAL())
				{
					model = db.getActualiteById(idActualite);
				}
			}
			catch (Exception e)
			{
				string stridActualite = idActualite.ToString();
				Commons.Logger.genererErreur(typeof(ActualiteController), "stridActualite = " + stridActualite + " : " + e.ToString());

			}
			return PartialView(model);
		}

		/// <summary>
		///  Lecture de la video
		/// </summary>
		/// <returns>The video.</returns>
		/// <param name="idActualite">Identifier document.</param>
		public ActionResult ReadVideo(int idActualite)
		{
			string CheminDocument = "";
			try
			{
				using (ActualiteDAL db = new ActualiteDAL())
				{
					// Récupération des informations du document à télécharger
					CheminDocument = db.getActualiteById(idActualite).CheminDocument;
				}

			}
			catch (Exception e)
			{
				string strIdActualite = idActualite.ToString();
				Commons.Logger.genererErreur(typeof(ActualiteController), "strstrIdActualite =" + strIdActualite + " : " + e.ToString());
			}

			return new VideoResult(CheminDocument);
		}

    }
}
