using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Business;
using Models;
using DataAccess;
using System.IO;


namespace ASCentreParis.Controllers
{
	
    public class AdministrationController : BaseController
    {
		#region Stats
		[AuthorizeUser(Profiles =Commons.Const.ProfilAdministrateur)]
		//[Authorize(Roles = "Administrateur")]
		/// <summary>
		/// Affichers the stats.
		/// </summary>
		/// <returns>The stats.</returns>
		public ActionResult AfficherStats()
        {
			Stat model = new Stat();
			try
			{
				using(StatDAL db=new StatDAL())
				{
					Business.StatBLL.ajouterStat("PageGestion");
					model = db.getTotalStat();
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

            return View ("~/Views/Administration/Stats.cshtml",model);
        }

				/// <summary>
		/// Recherches the stats ajax.
		/// </summary>
		/// <returns>The stats ajax.</returns>
		/// <param name="draw">Draw.</param>
		/// <param name="start">Start.</param>
		/// <param name="length">Length.</param>
		/// <param name="filtres">Filtres.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult RechercheStatsAjax(int draw, int start, int length, Filtre filtres)
		{


			List<Stat> resultat = new List<Stat>();

			using (StatDAL db = new StatDAL())
			{
				resultat = db.getstats();
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Stat> resultatsFiltres = new List<Stat>();
				foreach (var r in resultat)
				{
					if (r.Mois.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageAcceuil.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageEquipe.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageContact.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageDocument.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageClub.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Total.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.PageGestion.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()))
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Mois == null ? "" : e.Mois.Trim())) : resultat.OrderByDescending(e => (e.Mois == null ? "" : e.Mois.Trim()))).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageAcceuil) : resultat.OrderByDescending(e => e.PageAcceuil)).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageClub) : resultat.OrderByDescending(e => e.PageClub)).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageContact) : resultat.OrderByDescending(e => e.PageContact)).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageEquipe) : resultat.OrderByDescending(e => e.PageEquipe)).ToList(); break;
				case 6: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageDocument) : resultat.OrderByDescending(e => e.PageDocument)).ToList(); break;
				case 7: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.PageGestion) : resultat.OrderByDescending(e => e.PageGestion)).ToList(); break;
				case 8: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Total) : resultat.OrderByDescending(e => e.Total)).ToList(); break;
			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataStat dataTableData = new DataTableDataStat();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Stat>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}



		#endregion

		#region Logs
		/// <summary>
		/// Affichers the logs.
		/// </summary>
		/// <returns>The logs.</returns>
		public ActionResult AfficherLogs()
		{
			ObjGestionLogs model = new ObjGestionLogs();
						try
			{
				Business.StatBLL.ajouterStat("PageGestion");
				using (DBConnect db=new DBConnect())
					{
					model.infoConnectionBBD = db.checkConnection();
					}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Logs.cshtml",model);
		}

				/// <summary>
		/// Recherches the logs ajax.
		/// </summary>
		/// <returns>The logs ajax.</returns>
		/// <param name="draw">Draw.</param>
		/// <param name="start">Start.</param>
		/// <param name="length">Length.</param>
		/// <param name="filtres">Filtres.</param>
		[HttpPost]
		public ActionResult RechercheLogsAjax(int draw, int start, int length, Filtre filtres)
		{


			List<Log4Net> resultat = new List<Log4Net>();

			using (Log4NetDAL db = new Log4NetDAL())
			{
				resultat = db.getLogs();
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Log4Net> resultatsFiltres = new List<Log4Net>();
				foreach (var r in resultat)
				{
					if (r.Id.ToString().Contains(filtreTextuel.ToLower().Trim()) ||
						r.strDate.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Thread.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Exception.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Level.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Logger.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Message.ToLower().Contains(filtreTextuel.ToLower().Trim()))
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Date) : resultat.OrderByDescending(e => e.Date)).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Thread) : resultat.OrderByDescending(e => e.Thread)).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Level) : resultat.OrderByDescending(e => e.Level)).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Logger == null ? "" : e.Logger.Trim())) : resultat.OrderByDescending(e => (e.Logger == null ? "" : e.Logger.Trim()))).ToList(); break;
				case 5: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Message == null ? "" : e.Message.Trim())) : resultat.OrderByDescending(e => (e.Message == null ? "" : e.Message.Trim()))).ToList(); break;
				case 6: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Exception == null ? "" : e.Exception.Trim())) : resultat.OrderByDescending(e => (e.Exception == null ? "" : e.Exception.Trim()))).ToList(); break;
			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataLog dataTableData = new DataTableDataLog();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Log4Net>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}

		#endregion

	



		#region Document

		/// <summary>
		/// Suppression d'un fichier
		/// </summary>
		/// <returns>The fichier document.</returns>
		/// <param name="idElement">Identifier element.</param>
		/// <param name="TypeDocument">Type document.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerFichierDocument(string idElement, string TypeDocument)
		{
			bool _success = false;
			string _message = "";
			try
			{
				using (DocumentDAL db = new DocumentDAL())
				{
					Document objet = db.getDocumentById(Convert.ToInt32(idElement));
					// Suppression de l'ancien document
					string pathTodelete = objet.CheminDocument;
					_success=Commons.Utils.deleteDocument(pathTodelete);
					objet.CheminDocument = "";
					objet.NomFichierUpload = "";
					// MAJ en base de données
					_success =_success && db.updateFileDocument(objet);
				}
			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + "  et TypeDocument = " + TypeDocument + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}

		/// <summary>
		/// Suppression d'un document
		/// </summary>
		/// <returns>The document.</returns>
		/// <param name="idElement">Identifier element.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerDocument(string idElement)
		{
			bool _success = true;
			string _message = "";
			try
			{
				// On commence par supprimer les commentaires rattachés à l'élément
				using(CommentaireDAL DalCommentaire = new CommentaireDAL())
				{
					_success = DalCommentaire.deleteCommentaireByIdDocument(Convert.ToInt32(idElement));
				}

				using (DocumentDAL db = new DocumentDAL())
				{
					// On commence par récupérer les informations sur l'équipe
					Document objet= db.getDocumentById(Convert.ToInt32(idElement));
					_success = _success && Commons.Utils.deleteDocument(objet.CheminDocument);

					// On supprime  le document en base
					_success = _success && db.deleteDocument(Convert.ToInt32(idElement));
				}


			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}

		/// <summary>
		/// création ou modification d'un document
		/// </summary>
		/// <returns>The document.</returns>
		/// <param name="idElement">Identifier element.</param>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererDocument(int? idElement)
		{
			ObjGestionDocuments model = new ObjGestionDocuments();
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");
				System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idDocumentAdministration] = idElement;
				// si l'id est null il s'agit d'une création , autrement modification
				if (idElement != null)
				{

					model.ModePage = Commons.Const.Modification;
					model.TitrePage = "Modifier un document";
					model.LibelleBoutonSauvegarde = "Modifier";
					using (DocumentDAL db = new DocumentDAL())
					{
						model.Document= db.getDocumentById(idElement.Value);
						model.lCategoriesDocument = db.getListeCategoriesDocumentForDDL();
					}
				}
				else
				{
					using (DocumentDAL db = new DocumentDAL())
					{
						model.lCategoriesDocument = db.getListeCategoriesDocumentForDDL();
					}
					model.ModePage = Commons.Const.Creation;
					model.Document.Ordre = 9999;
					model.TitrePage = "Créer un document";
					model.LibelleBoutonSauvegarde = "Créer";
					System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idDocumentAdministration] = -1;
				}

			}
			catch (Exception e)
			{
				string stridElement = "N/A";
				if (idElement != null)
				{
					stridElement = idElement.ToString();
				}

				Commons.Logger.genererErreur(typeof(AdministrationController), "stridDocument = " + stridElement + " : " + e.ToString());
				//return View("~/Views/Shared/Error.cshtml");
			}
			return PartialView("~/Views/Administration/GererDocument.cshtml", model);
		}



		/// <summary>
		/// gestion de le document lors de la sauvegarde
		/// </summary>
		/// <returns>The actualites post.</returns>
		/// <param name="model">Model.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererDocumentPost(ObjGestionDocuments model)
		{

			try
			{
				if (model.Document.Id == null || model.Document.Id == 0)
				{
					model.ModePage = Commons.Const.Creation;
					model.TitrePage = "Créer un document";
					model.LibelleBoutonSauvegarde = "Créer";
				}
				else
				{
					model.ModePage = Commons.Const.Modification;
					model.TitrePage = "Modifier un document";
					model.LibelleBoutonSauvegarde = "Modifier";
				}

				model.messageOK = null;
				model.messageKO = "Erreur lors de la création de le document : ";

				using (DocumentDAL db = new DocumentDAL())
				{

					if (ModelState.IsValid)
					{
						bool success = false;
						// Chargement en base

						if (model.Document.Titre == null)
							model.Document.Titre = "";
						if (model.Document.Texte == null)
							model.Document.Texte = "";
						
						// Refresh de la liste de valeurs
						model.lCategoriesDocument = db.getListeCategoriesDocumentForDDL();

						// Création de le document
						if (model.ModePage == Commons.Const.Creation)
						{
							model.Document.DateCreation = DateTime.Now;
							model.Document.Id = db.insertDocument(model.Document);
							if (model.Document.Id > 0)
								success = true;
						}
						// MAJ de le document
						else
						{
							success = db.updateDocument(model.Document);
						}
						// Refresh du model
						model.Document = db.getDocumentById(model.Document.Id);
						System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idDocumentAdministration] = model.Document.Id;


						if (success)
						{
							model.messageKO = null;
							if (model.ModePage == Commons.Const.Creation)
								model.messageOK = "Le document a été créée avec succès";
							else
								model.messageOK = "Le document a été modifiée avec succès";
							model.LibelleBoutonSauvegarde = "Modifier";
							model.TitrePage = "Modifier un document";
							model.ModePage = Commons.Const.Modification;
						}						
					}
					else
						{
							model.messageKO = model.messageKO + Commons.Const.MessageErreurModelNotValid;
						}
				}
			}
			catch (Exception e)
			{
				model.messageKO = model.messageKO + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				//	return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
			return PartialView("~/Views/Administration/GererDocument.cshtml", model);
		}





		/// <summary>
		/// Appel ajax pour rechercher les documents
		/// </summary>
		/// <returns>The documents ajax.</returns>
		/// <param name="draw">Draw.</param>
		/// <param name="start">Start.</param>
		/// <param name="length">Length.</param>
		 [HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult RechercheDocumentsAjax(int draw, int start, int length, Filtre filtres)
		{

			List<Document> resultat = new List<Document>();

			using (DocumentDAL db = new DocumentDAL())
			{
				resultat = db.getListeDocuments(null);
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Document> resultatsFiltres = new List<Document>();
				foreach (var r in resultat)
				{
					if (r.strDateCreation.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.LibelleCategorieDocument.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.CheminDocument.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Titre.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Id.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.Texte ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) )
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Titre==null ? "": e.Titre.Trim())) : resultat.OrderByDescending(e => (e.Titre == null ? "" : e.Titre.Trim()))).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.LibelleCategorieDocumentIHM == null ? "" : e.LibelleCategorieDocumentIHM.Trim())) : resultat.OrderByDescending(e => (e.LibelleCategorieDocumentIHM == null ? "" : e.Titre.Trim()))).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.CheminDocument == null ? "" : e.CheminDocument.Trim())) : resultat.OrderByDescending(e => (e.CheminDocument == null ? "" : e.CheminDocument.Trim()))).ToList(); break;
				case 5: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Ordre) : resultat.OrderByDescending(e => e.Ordre)).ToList(); break;
			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataDocument dataTableData = new DataTableDataDocument();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Document>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}



		/// <summary>
		/// Gerers the documents.
		/// </summary>
		/// <returns>The documents.</returns>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		 public ActionResult GererDocuments()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Documents.cshtml");
		}
		#endregion
		#region Equipe

		/// <summary>
		/// Gerers the equipes.
		/// </summary>
		/// <returns>The equipes.</returns>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererEquipes()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Equipes.cshtml");
		}


		/// <summary>
		/// Gerers the equipe.
		/// </summary>
		/// <returns>The equipe.</returns>
		/// <param name="idElement">Identifier equipe.</param>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererEquipe(int? idElement)
		{
			int? idEquipe = idElement;
			ObjGestionEquipes model = new ObjGestionEquipes();
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");
				System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idEquipeAdministration] = idEquipe;
				if(idEquipe!=null)
					{
	
					model.ModePage = Commons.Const.Modification;
					model.TitrePage = "Modifier une équipe";
					model.LibelleBoutonSauvegarde = "Modifier";
					using (EquipeDAL db = new EquipeDAL())
						{
						model.Equipe = db.getEquipeById(idEquipe.Value);
						}
					}
				else
					{
					model.ModePage = Commons.Const.Creation;
					model.Equipe.Ordre = 9999;
					model.TitrePage = "Créer une équipe";
					model.LibelleBoutonSauvegarde = "Créer";
					System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idEquipeAdministration] = -1;
					}	
					
			}
			catch (Exception e)
			{
				string stridEquipe = "N/A";
				if(idEquipe!=null)
					{
					stridEquipe = idEquipe.ToString();
					}

				Commons.Logger.genererErreur(typeof(AdministrationController), "stridEquipe = " + stridEquipe + " : " + e.ToString());
				//return View("~/Views/Shared/Error.cshtml");
			}
			return PartialView("~/Views/Administration/GererEquipe.cshtml", model);
		}

		/// <summary>
		/// Recherches the equipes ajax.
		/// </summary>
		/// <returns>The equipes ajax.</returns>
		/// <param name="draw">Draw.</param>
		/// <param name="start">Start.</param>
		/// <param name="length">Length.</param>
		/// <param name="filtres">Filtres.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult RechercheEquipesAjax(int draw, int start, int length, Filtre filtres)
		{

			List<Equipe> resultat = new List<Equipe>();

			using (EquipeDAL db = new EquipeDAL())
			{
				resultat = db.getListeEquipes();
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Equipe> resultatsFiltres = new List<Equipe>();
				foreach (var r in resultat)
				{
					if (r.strDateCreation.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Libelle.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.Commentaire ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.InformationsEntrainements ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.InformationsResponsable ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Id.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.InformationsDivision ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim())
					    )
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Libelle == null ? "" : e.Libelle.Trim())) : resultat.OrderByDescending(e => (e.Libelle == null ? "" : e.Libelle.Trim()))).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Ordre) : resultat.OrderByDescending(e => e.Ordre)).ToList(); break;
			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableEquipe dataTableData = new DataTableEquipe();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Equipe>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}


		/// <summary>
		/// Uploads the document equipe. Cette fonction est utlisée pour les calendriers, les photos et les fiches d'entrainements.
		/// </summary>
		/// <returns>The document equipe photo.</returns>
		/// <param name="TypeDocument">Type document.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult UploadDocumentEquipe(string TypeDocument)
		{
			string _message = "";
			string _result = "OK";
			int idEquipe = -1;
			string fileName = TypeDocument + "_";
			string _fileName = "";
			try
			{
				// On teste d'abord si la session n'est pas nulle
				if(System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idEquipeAdministration] != null)
				{
					idEquipe = Convert.ToInt32(System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idEquipeAdministration]);
					// on teste d'abord qu'un fichier est présent 
					if (Request.Files.Count > 0 && idEquipe>0)
					{
						// On prend le fichier envoyé par la request
						var file = Request.Files[0];

						if (file != null && file.ContentLength > 0)
						{
							
							string extensionFichier = Commons.Utils.getExtensionDocument(file.FileName);
							// On vérifie que le document importé correspond bien à une image dans le cas de l'import d'une photo
							if(TypeDocument!="Photo" || Commons.Const.ListeExtensionsImage.Contains(extensionFichier))
								{
								using (EquipeDAL db = new EquipeDAL())
									{
									// Suppression de l'ancien document
									string pathTodelete = db.getPathDocumentToDelete(TypeDocument, idEquipe);
									bool  Result=Commons.Utils.deleteDocument(pathTodelete);

									// Sauvegarde du fichier dans le répertoire
									fileName = fileName + idEquipe.ToString();
									fileName = fileName + "." + extensionFichier;
									string pathToSave = Path.Combine(Server.MapPath(Commons.Const.UploadEquipePath), fileName);
									file.SaveAs(pathToSave);


									// MAJ en base de données
									Result=Result && db.MAJDocumentEquipe(TypeDocument, idEquipe,Commons.Const.UploadEquipePath + "/" + fileName);

									if(!Result)
										{
										_result = "KO";
										_message = "Problème lors de la sauvegarde. Veuillez recommencer l'opération.";
										}
									else
										{
										_result = "OK";
										}	

									}
							    }
							else
							{
								_result = "KO";
								_message = "Seules les images peuvent être chargées dans cette section.";
							}
						}
						else
						{
							_result = "KO";
							_message = "Fichier vide";
						}
					}
					else
					{
					_result = "N/A";
					_message = "";
					}
				}
				else
				{
					_result = "KO";
					_message = "Session expirée. Veuillez vous reconnecter.";
				}
			}
			catch (Exception e)
			{
				_message = e.ToString();
				Commons.Logger.genererErreur(typeof(AdministrationController), "TypeDocument=" + TypeDocument + " et idEquipe=" + idEquipe.ToString()+ " : " + e.ToString());
			}
			_fileName = fileName;
			return Json(new { result = _result, message = _message, fileName = _fileName  });
		}

		/// <summary>
		/// Uploads the document equipe photo.
		/// </summary>
		/// <returns>The document equipe photo.</returns>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult UploadDocumentPhotoEquipe()
		{
			string TypeDocument = "Photo";
			JsonResult retour = null;
			try
			{
				retour = UploadDocumentEquipe(TypeDocument);
			}
			catch (Exception e)
			{
				retour = Json(new { result = "KO", message = e.ToString() });
				Commons.Logger.genererErreur(typeof(AdministrationController),"TypeDocument="+TypeDocument+" : " +e.ToString());
			}
			return retour;
		}
	
		/// <summary>
		/// Uploads the document equipe Calendrier.
		/// </summary>
		/// <returns>The document equipe Calendrier</returns>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult UploadDocumentCalendrierEquipe()
		{
			string TypeDocument = "Calendrier";
			JsonResult retour = null;
			try
			{
				retour = UploadDocumentEquipe(TypeDocument);
			}
			catch (Exception e)
			{
				retour = Json(new { result = "KO", message = e.ToString() });
				Commons.Logger.genererErreur(typeof(AdministrationController), "TypeDocument=" + TypeDocument + " : " + e.ToString());
			}
			return retour;
		}


		/// <summary>
		/// Uploads the document equipe FicheEntrainement.
		/// </summary>
		/// <returns>The document equipe FicheEntrainement</returns>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult UploadDocumentFicheEntrainementEquipe()
		{
			string TypeDocument = "FicheEntrainement";
			JsonResult retour = null;
			try
			{
				retour = UploadDocumentEquipe(TypeDocument);
			}
			catch (Exception e)
			{
				retour = Json(new { result = "KO", message = e.ToString() });
				Commons.Logger.genererErreur(typeof(AdministrationController), "TypeDocument=" + TypeDocument + " : " + e.ToString());
			}
			return retour;
		}


		/// <summary>
		/// Suppression de l'équipe et de ses documents
		/// </summary>
		/// <returns>The equipe.</returns>
		/// <param name="idElement">Identifier element.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerEquipe(string idElement)
		{
			bool _success= true;
			string _message = "";
			try
			{
				using (EquipeDAL db = new EquipeDAL())
				{
					// On commence par récupérer les informations sur l'équipe
					Equipe equipe = db.getEquipeById(Convert.ToInt32(idElement));
					_success = Commons.Utils.deleteDocument(equipe.CheminCalendrier);
					_success = _success && Commons.Utils.deleteDocument(equipe.CheminFicheEntrainement);
					_success = _success && Commons.Utils.deleteDocument(equipe.CheminFicheEntrainement);
					// On supprime logiquement l'équipe en base
					equipe.isActif = false;
					_success = _success && db.updateEquipe(equipe);
				}


			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message+ e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}

		/// <summary>
		/// Fonction permettant de supprimer un fichier du chapitre équipe
		/// </summary>
		/// <returns>The fichier equipe.</returns>
		/// <param name="idElement">Identifier element.</param>
		/// <param name="Chapitre">Chapitre.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerFichierEquipe(string idElement,string TypeDocument)
		{
			bool _success = false;
			string _message = "";
			try
			{
				using (EquipeDAL db = new EquipeDAL())
				{
					// Suppression de l'ancien document
					string pathTodelete = db.getPathDocumentToDelete(TypeDocument, Convert.ToInt32(idElement));
					_success=Commons.Utils.deleteDocument(pathTodelete);

					// MAJ en base de données
					_success = _success && db.MAJDocumentEquipe(TypeDocument, Convert.ToInt32(idElement), null);
				}
			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message+ e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + "  et TypeDocument = "+TypeDocument+" : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}

		/// <summary>
		/// gestion de l'équipe lors de la sauvegarde
		/// </summary>
		/// <returns>The actualites post.</returns>
		/// <param name="model">Model.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererEquipePost(ObjGestionEquipes model)
		{

			try
			{
				if (model.Equipe.Id == null || model.Equipe.Id == 0)
					{
					model.ModePage = Commons.Const.Creation;
					model.TitrePage = "Créer une équipe";
					model.LibelleBoutonSauvegarde = "Créer";
					}
				else
					{	
					model.ModePage = Commons.Const.Modification;
					model.TitrePage = "Modifier une équipe";
					model.LibelleBoutonSauvegarde = "Modifier";
					}

				model.messageOK = null;
				model.messageKO = "Erreur lors de la création de l'équipe : ";

				using (EquipeDAL db = new EquipeDAL())
				{
				// On teste si une équipe ne possède pas le libellé
					if(!db.existEquipeAvecMemeLibelle(model.Equipe.Libelle,model.Equipe.Id))
						{
						if (ModelState.IsValid)
						{
						bool success = false;
						// Chargement en base

							if (model.Equipe.InformationsResponsable == null)
								model.Equipe.InformationsResponsable = "";
							if (model.Equipe.InformationsDivision == null)
								model.Equipe.InformationsDivision = "";
							if (model.Equipe.InformationsEntrainements == null)
								model.Equipe.InformationsEntrainements= "";
							if (model.Equipe.Commentaire == null)
								model.Equipe.Commentaire = "";
							if (model.Equipe.LienClassement == null)
								model.Equipe.LienClassement= "";
							model.Equipe.isActif = true;

							// Création de l'équipe
							if (model.ModePage == Commons.Const.Creation)
								{
								model.Equipe.DateCreation = DateTime.Now;
								model.Equipe.Id = db.insertEquipe(model.Equipe);
								if(model.Equipe.Id > 0)
								   success = true;
								}
							// MAJ de l'équipe
							else
								{
								success = db.updateEquipe(model.Equipe);
								}
							// Refresh du model
							model.Equipe = db.getEquipeById(model.Equipe.Id);
							System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idEquipeAdministration] =model.Equipe.Id;
						

						if(success)
							{
							model.messageKO = null;
							if(model.ModePage == Commons.Const.Creation)
								model.messageOK = "L'équipe a été créée avec succès";
							else
								model.messageOK = "L'équipe a été modifiée avec succès";
							model.LibelleBoutonSauvegarde = "Modifier";
							model.TitrePage = "Modifier une équipe";
							model.ModePage = Commons.Const.Modification;
							}
						}
					else
						{
						model.messageKO = model.messageKO+Commons.Const.MessageErreurModelNotValid;	
						}
					}
					else
						{
						model.messageKO =model.messageKO+ "Une équipe possède déjà ce libellé";
						}
				}
			}
			catch (Exception e)
			{
				model.messageKO = model.messageKO + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				//	return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
			return PartialView("~/Views/Administration/GererEquipe.cshtml", model);
		}
		#endregion

		#region Commentaire


		/// <summary>
		/// Recherches the commentaires ajax.
		/// </summary>
		/// <returns>The commentaires ajax.</returns>
		/// <param name="draw">Draw.</param>
		/// <param name="start">Start.</param>
		/// <param name="length">Length.</param>
		/// <param name="filtres">Filtres.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult RechercheCommentairesAjax(int draw, int start, int length, Filtre filtres)
		{

			List<Commentaire> resultat = new List<Commentaire>();

			using (CommentaireDAL db = new CommentaireDAL())
			{
				resultat = db.getListeCommentaires(null,null);
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Commentaire> resultatsFiltres = new List<Commentaire>();
				foreach (var r in resultat)
				{
					if (r.strDateCreation.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					       (r.LibelleActualite ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					        r.Message.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					        r.Utilisateur.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Id.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					        (r.LibelleDocument ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()))
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case -1 : resultat =  resultat.OrderByDescending(e => e.Id).ToList(); break;
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Utilisateur == null ? "" : e.Utilisateur.Trim())) : resultat.OrderByDescending(e => (e.Utilisateur == null ? "" : e.Utilisateur.Trim()))).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Message == null ? "" : e.Message.Trim())) : resultat.OrderByDescending(e => (e.Message == null ? "" : e.Message.Trim()))).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.LibelleActualite == null ? "" : e.LibelleActualite.Trim())) : resultat.OrderByDescending(e => (e.LibelleActualite == null ? "" : e.LibelleActualite.Trim()))).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.LibelleDocument == null ? "" : e.LibelleDocument.Trim())) : resultat.OrderByDescending(e => (e.LibelleDocument == null ? "" : e.LibelleDocument.Trim()))).ToList(); break;
				case 5: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;

			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataCommentaire dataTableData = new DataTableDataCommentaire();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Commentaire>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}

		/// <summary>
		/// Page de gestion des commentaires
		/// </summary>
		/// <returns>The commentaires.</returns>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererCommentaires()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Commentaires.cshtml");
		}

		/// <summary>
		/// Suppression du commentaire
		/// </summary>
		/// <returns>The commentaire.</returns>
		/// <param name="idElement">Identifier element.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerCommentaire(string idElement)
		{
			bool _success = true;
			string _message = "";
			try
			{
				using (CommentaireDAL DalCommentaire = new CommentaireDAL())
				{
					_success = DalCommentaire.deleteCommentaireById(Convert.ToInt32(idElement));
				}


			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}

		#endregion

		#region Actualite

		/// <summary>
		/// Suppression d'un fichier
		/// </summary>
		/// <returns>The fichier document.</returns>
		/// <param name="idElement">Identifier element.</param>
		/// <param name="TypeDocument">Type document.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerFichierActualite(string idElement, string TypeDocument)
		{
			bool _success = false;
			string _message = "";
			try
			{
				using (ActualiteDAL db = new ActualiteDAL())
				{
					Actualite objet = db.getActualiteById(Convert.ToInt32(idElement));
					// Suppression de l'ancien document
					string pathTodelete = objet.CheminDocument;
					_success=Commons.Utils.deleteDocument(pathTodelete);
					objet.CheminDocument = "";

					// MAJ en base de données
					_success =_success && db.updateFileActualite(objet);
				}
			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + "  et TypeDocument = " + TypeDocument + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}


		/// <summary>
		/// Suppression de l'actualité
		/// </summary>
		/// <returns>The actualite.</returns>
		/// <param name="idElement">Identifier element.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult SupprimerActualite(string idElement)
		{
			bool _success = true;
			string _message = "";
			try
			{
				// On commence par supprimer les commentaires rattachés à l'élément
				using(CommentaireDAL DalCommentaire= new CommentaireDAL())
					{
					_success=DalCommentaire.deleteCommentaireByIdActualite(Convert.ToInt32(idElement));
					}

				using (ActualiteDAL db = new ActualiteDAL())
				{
					// On commence par récupérer les informations sur l'équipe
					Actualite objet = db.getActualiteById(Convert.ToInt32(idElement));
					_success = _success && Commons.Utils.deleteDocument(objet.CheminDocument);

					// On supprime l'actualité en base
					_success = _success && db.deleteActualite(Convert.ToInt32(idElement));
				}


			}
			catch (System.IO.IOException e)
			{
				_success = false;
				_message = _message + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), " sidElement=" + idElement.ToString() + " : " + e.ToString());

			}
			return Json(new { Retour = _success, Message = _message });
		}

		/// <summary>
		/// Uploads the document document actualite.
		/// </summary>
		/// <returns>The document document actualite.</returns>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult UploadDocumentDocumentActualite()
		{

			JsonResult retour = null;
			string _result = "KO";
			string _message = "";
			string _fileName = "";
			int idActualite = -1;
			string fileName = "Document_";
			try
			{
				// On teste d'abord si la session n'est pas nulle
				if (System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idActualiteAdministration] != null)
				{
					idActualite = Convert.ToInt32(System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idActualiteAdministration]);
					// on teste d'abord qu'un fichier est présent 
					if (Request.Files.Count > 0 && idActualite > 0)
					{
						// On prend le fichier envoyé par la request
						var file = Request.Files[0];

						if (file != null && file.ContentLength > 0)
						{

							string extensionFichier = Commons.Utils.getExtensionDocument(file.FileName);
							// On vérifie que le document importé correspond bien à une image dans le cas de l'import d'une photo
							if (Commons.Const.ListeExtensionsImage.Contains(extensionFichier) || Commons.Const.ListeExtensionsVideos.Contains(extensionFichier))
							{
								using (ActualiteDAL db = new ActualiteDAL())
								{
									// On récupère l'objet
									Actualite objet = db.getActualiteById(idActualite);

									// Suppression de l'ancien document
									string pathTodelete = objet.CheminDocument;
									bool Result = Commons.Utils.deleteDocument(pathTodelete);

									// Sauvegarde du fichier dans le répertoire
									fileName = fileName + idActualite.ToString();
									fileName = fileName + "." + extensionFichier;
									string pathToSave = Path.Combine(Server.MapPath(Commons.Const.UploadActualitePath), fileName);
									file.SaveAs(pathToSave);

									// MAJ en base de données
									fileName= Commons.Const.UploadActualitePath + "/" + fileName;
									objet.CheminDocument = fileName;

									Result = Result && db.updateFileActualite(objet);

									if (!Result)
									{
										_result = "KO";
										_message = "Problème lors de la sauvegarde. Veuillez recommencer l'opération.";
									}
									else
									{
										_result = "OK";
									}

								}
							}
							else
							{
								_result = "KO";
								_message = "Seules les images et certaines vidéos peuvent être chargées dans cette section.";
							}
						}
						else
						{
							_result = "KO";
							_message = "Fichier vide";
						}
					}
					else
					{
						_result = "N/A";
						_message = "";
					}
				}
				else
				{
					_result = "KO";
					_message = "Session expirée. Veuillez vous reconnecter.";
				}
			}
			catch (Exception e)
			{
				retour = Json(new { result = "KO", message = e.ToString() });
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
			}

			_fileName = fileName;
			return Json(new { result = _result, message = _message, fileName = _fileName });
		}

		/// <summary>
		/// Recherches the actualites ajax.
		/// </summary>
		/// <returns>The actualites ajax.</returns>
		/// <param name="draw">Draw.</param>
		/// <param name="start">Start.</param>
		/// <param name="length">Length.</param>
		/// <param name="filtres">Filtres.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult RechercheActualitesAjax(int draw, int start, int length, Filtre filtres)
		{

			List<Actualite> resultat = new List<Actualite>();

			using (ActualiteDAL db = new ActualiteDAL())
			{
				resultat = db.getListeActualite("");
			}


			// Filtrage textuelle
			string filtreTextuel = filtres._search;

			if (!String.IsNullOrEmpty(filtreTextuel))
			{
				List<Actualite> resultatsFiltres = new List<Actualite>();
				foreach (var r in resultat)
				{
					if (r.strDateCreation.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.CheminDocument.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (r.LibelleEquipe ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Resume.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    r.Titre.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						r.Id.ToString().ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						(r.Texte ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()))
						resultatsFiltres.Add(r);
				}

				resultat = resultatsFiltres;
			}

			// Gestion du tri de la table de résultat
			switch (filtres._sortColumn)
			{
				case 0: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 1: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.LibelleEquipe == null ? "" : e.LibelleEquipe.Trim())) : resultat.OrderByDescending(e => (e.LibelleEquipe == null ? "" : e.LibelleEquipe.Trim()))).ToList(); break;
				case 2: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Titre == null ? "" : e.Titre.Trim())) : resultat.OrderByDescending(e => (e.Titre == null ? "" : e.Titre.Trim()))).ToList(); break;
				case 3: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.Resume == null ? "" : e.Resume.Trim())) : resultat.OrderByDescending(e => (e.Resume == null ? "" : e.Resume.Trim()))).ToList(); break;
				case 4: resultat = (filtres._sortDirection ? resultat.OrderBy(e => e.Id) : resultat.OrderByDescending(e => e.Id)).ToList(); break;
				case 5: resultat = (filtres._sortDirection ? resultat.OrderBy(e => (e.CheminDocument == null ? "" : e.CheminDocument.Trim())) : resultat.OrderByDescending(e => (e.CheminDocument == null ? "" : e.CheminDocument.Trim()))).ToList(); break;

			}

			if (resultat == null)
				return null;

			if (length == -1)
				length = resultat.Count;

			DataTableDataActualite dataTableData = new DataTableDataActualite();

			// get just one page of data
			if (resultat.Count < length)
				dataTableData.data = resultat;
			else
			{
				if (start > resultat.Count)
					dataTableData.data = new List<Actualite>();
				else
					dataTableData.data = resultat.GetRange(start, Math.Min(length, resultat.Count - start));
			}
			dataTableData.NbResultatTotal = resultat.Count;
			dataTableData.draw = draw;

			var jsonResult = Json(dataTableData, JsonRequestBehavior.AllowGet);
			jsonResult.MaxJsonLength = int.MaxValue;

			return jsonResult;
		}

		/// <summary>
		/// Modification et création d'une actualité
		/// </summary>
		/// <returns>The actualite.</returns>
		/// <param name="idElement">Identifier element.</param>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererActualite(int? idElement)
		{
			ObjGestionActualites model = new ObjGestionActualites();
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");

				// On remet à jour la liste des équipes
				using(EquipeDAL db = new EquipeDAL())
				{
					model.lEquipes = db.getListeEquipesForDDL();
				}

				System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idActualiteAdministration] = idElement;
				// si l'id est null il s'agit d'une création , autrement modification
				if (idElement != null)
				{

					model.ModePage = Commons.Const.Modification;
					model.TitrePage = "Modifier une actualité";
					model.LibelleBoutonSauvegarde = "Modifier";
					using (ActualiteDAL db = new ActualiteDAL())
					{
						model.Actualite = db.getActualiteById(idElement.Value);
					}
				}
				else
				{

					model.ModePage = Commons.Const.Creation;
					model.TitrePage = "Créer une actualité";
					model.LibelleBoutonSauvegarde = "Créer";
					System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idActualiteAdministration] = -1;
				}

			}
			catch (Exception e)
			{
				string stridElement = "N/A";
				if (idElement != null)
				{
					stridElement = idElement.ToString();
				}

				Commons.Logger.genererErreur(typeof(AdministrationController), "stridActualite = " + stridElement + " : " + e.ToString());
				//return View("~/Views/Shared/Error.cshtml");
			}
			return PartialView("~/Views/Administration/GererActualite.cshtml", model);
		}

		/// <summary>
		/// gestion de l'actualité lors de la sauvegarde
		/// </summary>
		/// <returns>The actualites post.</returns>
		/// <param name="model">Model.</param>
		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererActualitePost(ObjGestionActualites model)
		{

			try
			{
				if (model.Actualite.Id == null || model.Actualite.Id == 0)
				{
					model.ModePage = Commons.Const.Creation;
					model.TitrePage = "Créer une actualité";
					model.LibelleBoutonSauvegarde = "Créer";
				}
				else
				{
					model.ModePage = Commons.Const.Modification;
					model.TitrePage = "Modifier une actualité";
					model.LibelleBoutonSauvegarde = "Modifier";
				}

				model.messageOK = null;
				model.messageKO = "Erreur lors de la création de l'actualité : ";

				using (ActualiteDAL db = new ActualiteDAL())
				{

				if (ModelState.IsValid)
					{
					bool success = false;
					// Chargement en base

					if (model.Actualite.Titre == null)
						model.Actualite.Titre = "";
					if (model.Actualite.Resume == null)
						model.Actualite.Resume = "";
					if (model.Actualite.Texte == null)
						model.Actualite.Texte= "";
					if(model.Actualite.CheminDocument==null)
						model.Actualite.CheminDocument = "";

					// Création de l'actualité
					if (model.ModePage == Commons.Const.Creation)
						{
						model.Actualite.DateCreation = DateTime.Now;
						model.Actualite.Id = db.insertActualite(model.Actualite);
						if(model.Actualite.Id > 0)
							success = true;
						}
					// MAJ de l'actualité
					else
					{
						success = db.updateActualite(model.Actualite);
					}
							// Refresh du model
					model.Actualite = db.getActualiteById(model.Actualite.Id);
					System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idActualiteAdministration] = model.Actualite.Id;


					if (success)
						{
						model.messageKO = null;
						if (model.ModePage == Commons.Const.Creation)
							model.messageOK = "L'actualité a été créée avec succès";
						else
							model.messageOK = "L'actualité a été modifiée avec succès";
						model.LibelleBoutonSauvegarde = "Modifier";
						model.TitrePage = "Modifier une actualité";
						model.ModePage = Commons.Const.Modification;
						}
				}
				else
					{
					model.messageKO = model.messageKO + Commons.Const.MessageErreurModelNotValid;
					}
				}

				// On remet à jour la liste des équipes
				using(EquipeDAL db = new EquipeDAL())
				{
					model.lEquipes = db.getListeEquipesForDDL();
				}
			}
			catch (Exception e)
			{
				model.messageKO = model.messageKO + e.Message;
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				//	return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}
			return PartialView("~/Views/Administration/GererActualite.cshtml", model);
		}


		[HttpPost]
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public JsonResult UploadDocumentDocumentDocument()
		{
			
			string _result = "KO";
			string _message = "";
			string _fileName = "";
			int idDocument = -1;
			string fileName = "Document_";
			try
			{
				// On teste d'abord si la session n'est pas nulle
				if (System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idDocumentAdministration] != null)
				{
					idDocument = Convert.ToInt32(System.Web.HttpContext.Current.Session[Commons.Const.sessionName_idDocumentAdministration]);
					// on teste d'abord qu'un fichier est présent 
					if (Request.Files.Count > 0 && idDocument > 0)
					{
						// On prend le fichier envoyé par la request
						var file = Request.Files[0];

						if (file != null && file.ContentLength > 0)
						{

							string extensionFichier = Commons.Utils.getExtensionDocument(file.FileName);
							using (DocumentDAL db = new DocumentDAL())
								{
									// On récupère l'objet
									Document objet = db.getDocumentById(idDocument);
									objet.NomFichierUpload = file.FileName;
									// Suppression de l'ancien document
									string pathTodelete = objet.CheminDocument;
									bool Result = Commons.Utils.deleteDocument(pathTodelete);

									// Sauvegarde du fichier dans le répertoire
									fileName = fileName + idDocument.ToString();
									fileName = fileName + "." + extensionFichier;
									string pathToSave = Path.Combine(Server.MapPath(Commons.Const.UploadDocumentPath), fileName);
									file.SaveAs(pathToSave);

									// MAJ en base de données
									fileName = Commons.Const.UploadDocumentPath + "/" + fileName;
									objet.CheminDocument =  fileName;
									Result = Result && db.updateFileDocument(objet);

									if (!Result)
									{
										_result = "KO";
										_message = "Problème lors de la sauvegarde. Veuillez recommencer l'opération.";
									}
									else
									{
										_result = "OK";
									}

								}
						}
						else
						{
							_result = "KO";
							_message = "Fichier vide";
						}
					}
					else
					{
						_result = "N/A";
						_message = "";
					}
				}
				else
				{
					_result = "KO";
					_message = "Session expirée. Veuillez vous reconnecter.";
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return Json(new { result = "KO", message = e.ToString() });
			}

			_fileName = fileName;
			return Json(new { result = _result, message = _message, fileName = _fileName });
		}


		/// <summary>
		/// Gerers the actualites.
		/// </summary>
		/// <returns>The actualites.</returns>
		[AuthorizeUser(Profiles = Commons.Const.ProfilAdministrateur)]
		public ActionResult GererActualites()
		{
			try
			{
				Business.StatBLL.ajouterStat("PageGestion");

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(AdministrationController), e.ToString());
				return RedirectToAction("AfficherErreur", "Error", new { message = e.Message });
			}

			return View("~/Views/Administration/Actualites.cshtml");
		}
		#endregion
    }
}
