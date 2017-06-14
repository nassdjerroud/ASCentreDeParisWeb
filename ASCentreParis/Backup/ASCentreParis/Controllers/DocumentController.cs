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
		/// Affichers the documents.
		/// </summary>
		/// <returns>The documents.</returns>
		/// <param name="idCategorieDocument">Identifier categorie document.</param>
		public ActionResult AfficherDocuments(int idCategorieDocument)
		{
			ObjDocument model = new ObjDocument();
			model.NombreDocumentsParLigne = 4;
			try
			{
				Business.StatBLL.ajouterStat("PageDocument");
				using (DocumentDAL db=new DocumentDAL())
					{
					// récupération de tous les documents
					model.ListeDocuments = db.getListeDocuments(idCategorieDocument);
					CategorieDocument Categorie = db.getCategorieDocumentById(idCategorieDocument);
					model.LibelleCategorieDocument = Categorie.Libelle;
					}
			} 
			catch (Exception e)
			{
				string strCategorieDocument = idCategorieDocument.ToString();
				Commons.Logger.genererErreur(typeof(DocumentController), "strCategorieDocument ="+strCategorieDocument+" : "+e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
			return View("~/Views/Document/Documents.cshtml",model);
		}
	}
}
