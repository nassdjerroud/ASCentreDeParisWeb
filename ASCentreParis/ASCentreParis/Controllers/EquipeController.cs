using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using DataAccess;
using System.IO;

namespace ASCentreParis.Controllers
{
    public class EquipeController : BaseController
    {



		/// <summary>
		/// Telecharger the document.
		/// </summary>
		/// <returns>The document.</returns>
		/// <param name="idEquipe">Identifier equipe.</param>
		/// <param name="TypeDocument">Type document.</param>
		[HttpPost]
		public ActionResult TelechargerDocument(int idEquipe,string TypeDocument)
		{
			string nomFichier = "";
			string urlAbsolue = "";
			string nomFichierUpload = "";
			Equipe equipe = new Equipe();
			try
			{
				using (EquipeDAL db = new EquipeDAL())
				{
					// Récupération des informations du document à télécharger
					equipe = db.getEquipeById(idEquipe);
					string urlFichier = "";
					if (TypeDocument == "FicheEntrainement")
						{
						urlFichier = equipe.CheminFicheEntrainement;
						}
					else if (TypeDocument == "Calendrier")
						{
						urlFichier = equipe.CheminCalendrier;
						}
					// on va déterminer le nom du fichier proposé à l'utilisateur
					nomFichierUpload = TypeDocument + "_" + equipe.Libelle + "." + Commons.Utils.getExtensionDocument(urlFichier); ;
					nomFichier = Path.GetFileName(urlFichier);
					string urlRelative = urlFichier.Replace(nomFichier, "");
					urlAbsolue = Commons.Utils.getStorageRoot(urlRelative) + nomFichier;
				}

			}
			catch (Exception e)
			{
				string strIdEquipe = idEquipe.ToString();
				Commons.Logger.genererErreur(typeof(DocumentController), "strstrIdDocument =" + strIdEquipe + " et TypeDocument = "+TypeDocument+" :  " + e.ToString());
				return null;
			}

			return File(urlAbsolue, "multipart/form-data", nomFichierUpload);
		}

		/// <summary>
		/// Affichers the equipe.
		/// </summary>
		/// <returns>The equipe.</returns>
		/// <param name="idEquipe">Identifier equipe.</param>
		public ActionResult AfficherEquipe(int idEquipe)
		{
			Equipe model = new Equipe();
			try
            {
                Business.StatBLL.ajouterStat("PageEquipe");
                using (EquipeDAL db = new EquipeDAL())
                {
                    model = db.getEquipeById(idEquipe);
                }
			}
			catch (Exception e)
			{
				string strEquipe = idEquipe.ToString();
				Commons.Logger.genererErreur(typeof(EquipeController),"idEquipe ="+strEquipe+" /n "+ e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
			return View("~/Views/Equipe/Equipe.cshtml",model);
		}
    }
}
