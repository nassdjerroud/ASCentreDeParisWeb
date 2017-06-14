using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Models;
using DataAccess;
using System.IO;
using Commons;

namespace ASCentreParis.Controllers
{


	public class DocumentController : BaseController
	{
		
		/// <summary>
		/// Telechargers the document.
		/// </summary>
		/// <returns>The document.</returns>
		[HttpPost]
		public ActionResult TelechargerDocument(int idDocument)
		{
			string nomFichier = "";
			string urlAbsolue = "";
			Document doc = new Document();
			try
			{
				using (DocumentDAL db = new DocumentDAL())
				{
					// Récupération des informations du document à télécharger
					doc = db.getDocumentById(idDocument);
					string urlFichier = doc.CheminDocument;
					nomFichier = Path.GetFileName(urlFichier);
					string urlRelative = urlFichier.Replace(nomFichier, "");
					urlAbsolue = Commons.Utils.getStorageRoot(urlRelative) + nomFichier;
				}

			}
			catch (Exception e)
			{
				string strIdDocument = idDocument.ToString();
				Commons.Logger.genererErreur(typeof(DocumentController), "strstrIdDocument =" + strIdDocument + " /n " + e.ToString());
				return null;
			}

			return File(urlAbsolue, "multipart/form-data", doc.NomFichierUpload);
		}

		/// <summary>
		///  Lecture de la video
		/// </summary>
		/// <returns>The video.</returns>
		/// <param name="idDocument">Identifier document.</param>
		public ActionResult ReadVideo(int idDocument)
		{
			string CheminDocument = "";
			try
			{
				using (DocumentDAL db = new DocumentDAL())
				{
					// Récupération des informations du document à télécharger
					CheminDocument = db.getDocumentById(idDocument).CheminDocument;
				}

			}
			catch (Exception e)
			{
				string strIdDocument = idDocument.ToString();
				Commons.Logger.genererErreur(typeof(DocumentController), "strstrIdDocument =" + strIdDocument + " : " + e.ToString());
			}

			return new VideoResult(CheminDocument);
		}

		/// <summary>
		/// Refresh des documents
		/// </summary>
		/// <returns>The document.</returns>
		/// <param name="idCategoriedocument">Identifier categoriedocument.</param>
		/// <param name="isSmartPhone">If set to <c>true</c> is smart phone.</param>
		/// <param name="offSet">Off set.</param>
		/// <param name="limit">Limit.</param>
		[HttpPost]
		public ActionResult SearchDocument(int idCategoriedocument,bool isSmartPhone, int offSet, int limit)
		{
			ObjDocument model = new ObjDocument();
            string view = "~/Views/Document/ListeDocuments.cshtml";
			try
			{
				// S'il s'agit d'un téléphone portable, on charge une vue spéciale
				if (isSmartPhone)
				{
					view = "~/Views/Document/ListeDocumentsMobile.cshtml";
					model.NombreDocumentsParLigne = 1;
					model.NombreLignes = 6;
				}
				else
				{
					model.NombreDocumentsParLigne = 4;
					model.NombreLignes = 2;
				}

				using (DocumentDAL db = new DocumentDAL())
				{
					model.ListeDocuments = db.getListeDocuments(idCategoriedocument,offSet , limit);
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(DocumentController),  e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

                return PartialView(view, model);
		}

		/// <summary>
		/// Affichers the documents.
		/// </summary>
		/// <returns>The documents.</returns>
		/// <param name="idCategorieDocument">Identifier categorie document.</param>
		public ActionResult AfficherDocuments(int idCategorieDocument,bool? isMobilePhone)
		{
			ObjDocument model = new ObjDocument();
            model.idCategorieDocument=idCategorieDocument;
            string view = "~/Views/Document/Documents.cshtml";
            try
			{
				Business.StatBLL.ajouterStat("PageDocument");

                if (isMobilePhone == null || !isMobilePhone.Value)
                {
                    model.NombreDocumentsParLigne = 4;
					model.NombreLignes = 2;
                }
                else
                {
                    model.NombreDocumentsParLigne = 1;
                    model.NombreLignes = 6;
                }

                using (DocumentDAL db=new DocumentDAL())
					{
					// récupération de tous les documents
					CategorieDocument Categorie = db.getCategorieDocumentById(idCategorieDocument);
					model.LibelleCategorieDocument = Categorie.Libelle;
                    model.ElementCount = db.getNombreDocumentsParCategorie(idCategorieDocument);
					}
			} 
			catch (Exception e)
			{
				string strCategorieDocument = idCategorieDocument.ToString();
				Commons.Logger.genererErreur(typeof(DocumentController), "strCategorieDocument ="+strCategorieDocument+" : "+e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
			return View(view, model);
		}
	}
}
