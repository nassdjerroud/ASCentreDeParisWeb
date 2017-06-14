using System;
using Models;
using System.Data;
using Commons;
using System.Xml;
using System.Xml.Serialization;
using System.Collections.Generic;


namespace DataAccess
{
	public class DocumentDAL : IDisposable
	{
		private DBConnect db;

		public DocumentDAL()
		{
			db = new DBConnect();
		}


		public void Dispose()
		{
			db.Dispose();
		}

		/// <summary>
		/// Gets the nombre documents par categorie.
		/// </summary>
		/// <returns>The nombre documents par categorie.</returns>
		/// <param name="idCategorieDocument">Identifier categorie document.</param>
		public int getNombreDocumentsParCategorie(int idCategorieDocument)
		{
			int result = 1;
			try
			{
				string requete = "select count(*)  ";
				requete = requete + "from tblDocument ";
                requete = requete + " where  IFNULL(CheminDocument,'')<>'' and idCategorieDocument=" + idCategorieDocument.ToString();

				DataTable data = db.recupererDonnees(requete);
				DataRow dr;
				if (data != null && data.Rows.Count > 0)
				{
					dr = data.Rows[0];
					result = Convert.ToInt32(dr[0]) ;
				}

			}
			catch (Exception e)
			{
				string stridCategorie = idCategorieDocument.ToString();
				Commons.Logger.genererErreur(typeof(DocumentDAL), "stridCategorie = "+stridCategorie+" "+e.ToString());
			}
			return result;
		}


		/// <summary>
		/// Fonction retournant le prochain id allant être généré
		/// </summary>
		/// <returns>The nex identifier document.</returns>
		public int getNexIdDocument()
		{
			int result= 1;
			try
			{
				string requete = "select max(id)  ";
				requete = requete + "from tblDocument ";

				DataTable data = db.recupererDonnees(requete);
				DataRow dr;
				if (data != null && data.Rows.Count > 0)
					{
					dr = data.Rows[0];
				    result = Convert.ToInt32(dr[0])+1;
				    }

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(DocumentDAL), e.ToString());
			}
			return result;
		}



		/// <summary>
		/// Gets the liste categories document for ddl.
		/// </summary>
		/// <returns>The liste categories document for ddl.</returns>
		public List<objDropDownListItem> getListeCategoriesDocumentForDDL()
		{
			List<objDropDownListItem> result = new List<objDropDownListItem>();
			try
			{
				string requete = "select c.Id, c.Libelle, c.ordre,m.libelle  ";
				requete = requete + "from tblCategorieDocument c";
				requete = requete + " left join tblCategorieDocument m on c.idCategorieDocumentPere=m.id ";
				requete = requete + " where 0=(select count(*) from tblCategorieDocument c2";
				requete = requete + " where c2.idCategorieDocumentPere=c.Id) ";
				requete = requete + "order by m.ordre,c.ordre";

				DataTable data = db.recupererDonnees(requete);
				for (int i = 0; i < data.Rows.Count; i++)
				{
					DataRow dr = data.Rows[i];
					objDropDownListItem objet = new objDropDownListItem();
					objet.ID = Convert.ToInt32(dr[0]);
					objet.Ordre= Convert.ToInt32(dr[2]);
					if (dr[3] == DBNull.Value)
						{
						objet.VALEUR_STRING = Convert.ToString(dr[1]);
						}
					else
						{
						objet.VALEUR_STRING = Convert.ToString(dr[3])+" - "+Convert.ToString(dr[1]);
						}						
					result.Add(objet);
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(DocumentDAL), e.ToString());
			}
			return result;
		}

	/// <summary>
	/// Gets the categorie document by identifier.
	/// </summary>
	/// <returns>The categorie document by identifier.</returns>
	/// <param name="idCategorieDocument">Identifier categorie document.</param>
		public CategorieDocument getCategorieDocumentById(int idCategorieDocument)
		{
			CategorieDocument  objet= new CategorieDocument();
            objet.Libelle = "";
			try
			{
				string requete = "select Id, Libelle  ";
				requete = requete + "from tblCategorieDocument where id="+idCategorieDocument.ToString();

				DataTable data = db.recupererDonnees(requete);
                if(data.Rows!=null && data.Rows.Count>0)
                    {
                    DataRow dr = data.Rows[0];
				    objet.Id = Convert.ToInt32(dr[0]);
				    objet.Libelle = Convert.ToString(dr[1]);
                    }

			}
			catch (Exception e)
			{
				string stridCategorieDocument = idCategorieDocument.ToString();
				Commons.Logger.genererErreur(typeof(DocumentDAL), "stridCategorieDocument = "+stridCategorieDocument +" "+e.ToString());
			}
			return objet;
		}

		/// <summary>
		/// Récupère les catgories de document à partir de l'id de catégorie père
		/// </summary>
		/// <returns>The liste sous categories document.</returns>
		/// <param name="idCategorieDocumentPere">Identifier categorie document pere.</param>
		public List<CategorieDocument> getListeSousCategoriesDocument(int idCategorieDocumentPere)
		{
			List<CategorieDocument> result = new List<CategorieDocument>();
			try
			{
				string requete = "select Id, Libelle, idCategorieDocumentPere  ";
				requete = requete + "from tblCategorieDocument e";
				requete = requete + " where ";
				requete = requete + "  idCategorieDocumentPere=" + idCategorieDocumentPere.ToString();
				requete = requete + " order by ordre";

				DataTable data = db.recupererDonnees(requete);
				for (int i = 0; i < data.Rows.Count; i++)
				{
					DataRow dr = data.Rows[i];
					CategorieDocument objet = new CategorieDocument();
					objet.Id = Convert.ToInt32(dr[0]);
					objet.Libelle = Convert.ToString(dr[1]);
					objet.URL = Commons.Const.URLDocuments + Convert.ToString(dr[0]);
					objet.NombreDocuments = getNombreDocumentsParCategorie(objet.Id);

					result.Add(objet);
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(DocumentDAL), e.ToString());
			}
			return result;
		}

		/// <summary>
		/// Fonction retournant la liste des catégories de document
		/// </summary>
		/// <returns>The liste categories document.</returns>
		/// <param name="idCategorieDocumentPere">Identifier categorie document pere.</param>
		public List<CategorieDocument> getListeCategoriesDocument()
		{
			List<CategorieDocument> result = new List<CategorieDocument>();
			try
			{
				string requete = "select Id, Libelle,  (select count(*) from tblDocument d2,tblCategorieDocument c2 where IFNULL(d2.CheminDocument,'')<>'' and d2.idCategorieDocument=c2.id and  c2.idCategorieDocumentPere=e.id)  ";
				requete = requete + "from tblCategorieDocument e";
				requete = requete + " where ( idCategorieDocumentPere is null ";
				requete = requete + " or 0=(select count(*) from tblCategorieDocument c";
				requete = requete + " where e.idCategorieDocumentPere=c.Id)) ";
				requete = requete + " order by e.ordre";

				DataTable data = db.recupererDonnees(requete);
				for (int i = 0; i < data.Rows.Count; i++)
				{
					DataRow dr = data.Rows[i];
					CategorieDocument objet = new CategorieDocument();
					objet.Id = Convert.ToInt32(dr[0]);
					objet.Libelle= Convert.ToString(dr[1]);
					objet.URL = Commons.Const.URLDocuments + Convert.ToString(dr[0]);
					objet.ListSousCategorie = getListeSousCategoriesDocument(objet.Id);
					objet.NombreDocuments = Convert.ToInt32(dr[2]);
					// si la somme de la requete vaut 0, on regarde les documents directements liés à la catégorie
					if(objet.NombreDocuments==0)
					   objet.NombreDocuments=getNombreDocumentsParCategorie(objet.Id);

					result.Add(objet);
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(DocumentDAL), e.ToString());
			}
			return result;
		}


		/// <summary>
		/// Gets the document by identifier.
		/// </summary>
		/// <returns>The document by identifier.</returns>
		/// <param name="idDocument">Identifier document.</param>
		public Document getDocumentById(int idDocument)
		{
			Document objet = new Document();
			try
			{
				string requete = "select d.Id,d.Titre,d.Texte,d.idCategorieDocument,";
				requete = requete + " c.Libelle, d.DateCreation, d.CheminDocument, d.Ordre, d.NomFichierUpload,d.Texte, m.libelle ";
				requete = requete + " from tblDocument d  ";
				requete = requete + " inner join tblCategorieDocument c on d.idCategorieDocument=c.id ";
				requete = requete + " left join tblCategorieDocument m on c.idCategorieDocumentPere=m.id ";
				requete = requete + " where 1=1 ";
				requete = requete + " and d.Id=" + idDocument.ToString();
				requete = requete + " order by m.ordre,c.ordre, d.ordre,d.Id desc";

				DataTable data = db.recupererDonnees(requete);
				DataRow dr = data.Rows[0];
				objet.Id = Convert.ToInt32(dr[0]);
				objet.Titre = Convert.ToString(dr[1]);
				objet.Texte = Convert.ToString(dr[2]);
				objet.idCategorieDocument = Convert.ToInt32(dr[3]);
				objet.LibelleCategorieDocument = Convert.ToString(dr[4]);
				objet.CheminDocument = Convert.ToString(dr[6]);
				objet.DateCreation = Convert.ToDateTime(dr[5]);
				objet.Ordre = Convert.ToInt32(dr[7]);
				objet.Extension = "." + Commons.Utils.getExtensionDocument(objet.CheminDocument);
				objet.strDateCreation = Commons.Utils.getFormatStringPourDateAffichage(objet.DateCreation);
				objet.NomFichierUpload = Convert.ToString(dr[8]);
				objet.Texte = Convert.ToString(dr[9]);
				objet.isImage = Commons.Utils.isImage(objet.CheminDocument);
				objet.isVideo = Commons.Utils.isVideo(objet.CheminDocument);
				if (dr[10] != DBNull.Value)
					objet.LibelleMenuDocument = Convert.ToString(dr[10]);
				objet.CheminImageFormatUpload = Commons.Utils.getCheminImageFormatUpload(objet.Extension);
			}
			catch (Exception e)
			{
				string stridDocument = idDocument.ToString();
				Commons.Logger.genererErreur(typeof(DocumentDAL), "stridDocument = " + stridDocument + " : " + e.ToString());
			}
			return objet;
		}


		/// <summary>
		/// Fonction permettant de récupérer la liste des documents
		/// </summary>
		/// <returns>The liste documents.</returns>
		/// <param name="idCategorieDocument">Identifier categoried document.</param>
		/// <param name="offSet"></param>
		/// <param name="limit"></param>
		public List<Document> getListeDocuments(int? idCategorieDocument, int? offSet, int? limit)
		{
			List<Document> result = new List<Document>();
			try
			{
				string requete = "select d.Id,d.Titre,d.Texte,d.idCategorieDocument, ";
				requete = requete + " c.Libelle, d.DateCreation, d.CheminDocument, d.Ordre, d.NomFichierUpload,d.Texte, m.libelle ";
				requete = requete + " from tblDocument d  ";
				requete = requete + " inner join tblCategorieDocument c on d.idCategorieDocument=c.id ";
				requete = requete + " left join tblCategorieDocument m on c.idCategorieDocumentPere=m.id ";
				requete = requete + " where 1=1 ";
				if (idCategorieDocument != null)
					{
					requete = requete + " and IFNULL(d.CheminDocument,'')<>'' ";
					requete = requete + " and idCategorieDocument=" + idCategorieDocument.ToString();
					}
				requete = requete + " order by m.ordre,c.ordre, d.ordre,d.Id desc";
				if (offSet != null && limit != null)
					requete = requete + " LIMIT " + limit.Value.ToString() + " OFFSET " + offSet.Value.ToString();


				DataTable data = db.recupererDonnees(requete);
				for (int i = 0; i < data.Rows.Count; i++)
				{
					DataRow dr = data.Rows[i];
					Document objet = new Document();
					objet.Id = Convert.ToInt32(dr[0]);
					objet.Titre = Convert.ToString(dr[1]);
					objet.Texte = Convert.ToString(dr[2]);
					objet.idCategorieDocument = Convert.ToInt32(dr[3]);
					objet.LibelleCategorieDocument = Convert.ToString(dr[4]);
					objet.CheminDocument = Convert.ToString(dr[6]);
					objet.DateCreation = Convert.ToDateTime(dr[5]);
					objet.Ordre = Convert.ToInt32(dr[7]);
					objet.Extension = "." + Commons.Utils.getExtensionDocument(objet.CheminDocument);
					objet.strDateCreation = Commons.Utils.getFormatStringPourDateAffichage(objet.DateCreation);
					objet.NomFichierUpload = Convert.ToString(dr[8]);
					objet.Texte = Convert.ToString(dr[9]);
					objet.isImage = Commons.Utils.isImage(objet.CheminDocument);
					objet.isVideo = Commons.Utils.isVideo(objet.CheminDocument);
					if (dr[10] != DBNull.Value)
						objet.LibelleMenuDocument = Convert.ToString(dr[10]);
					objet.CheminImageFormatUpload = Commons.Utils.getCheminImageFormatUpload(objet.Extension);

					// Les commentaires sont récupérés uniquement si on n'effectue une recherche sur une catégorie de document
					if(idCategorieDocument!=null)
						{
						// On récupère les éventuels commentaires associés à l'objet
						using (CommentaireDAL DalExterne = new CommentaireDAL())
							{
							objet.ListeCommentaires = DalExterne.getListeCommentaires(null,objet.Id);
							}
						}

					result.Add(objet);
				}
			}
			catch (Exception e)
			{
				string strIdCategorieDocument = "NULL";

				if(idCategorieDocument!=null)
					strIdCategorieDocument =strIdCategorieDocument.ToString();
				Commons.Logger.genererErreur(typeof(DocumentDAL), "strIdCategorieDocument = "+strIdCategorieDocument+" : "+e.ToString());
			}
			return result;
		}


		/// <summary>
		///  Fonction permettant de supprimer un document
		/// </summary>
		/// <returns><c>true</c>, if document was deleted, <c>false</c> otherwise.</returns>
		/// <param name="idDocument">Identifier document.</param>
		public bool deleteDocument(int idDocument)
		{
			bool success = false;
			try
			{
				string requete = "delete from tblDocument  ";
				requete = requete + " where id="+idDocument.ToString();


				success=db.executerRequete(requete);
			}
			catch (Exception e)
			{
				success = false;
				string strIdDocument = idDocument.ToString();
				Commons.Logger.genererErreur(typeof(DocumentDAL),"strIdDocument = "+strIdDocument+" /n "+ e.ToString());
			}
			return success;
		}


		/// <summary>
		/// Insertion du document. La fonction renvoie également l'id inséré.
		/// </summary>
		/// <returns>The document.</returns>
		/// <param name="objet">Objet.</param>
		public int insertDocument(Document objet)
		{
			int idInsere = -1;
			try
			{
				string requete = "insert into tblDocument (Titre,Texte,Ordre,idCategorieDocument,CheminDocument,DateCreation,NomFichierUpload) ";
				requete = requete + " values ( '" +objet.Titre.Replace("'", "''") + "'";
				requete = requete + " , '" + objet.Texte.Replace("'", "''") + "'";
				requete = requete + " , " + objet.Ordre + "";
				requete = requete + " , " + objet.idCategorieDocument+ "";
				requete = requete + " , null";
				requete = requete + " , '" + Commons.Utils.getFormatStringPourDateMySQL(objet.DateCreation) + "'";;  
				requete = requete + " , null";
				requete = requete + " )";

				bool result=db.executerRequete(requete);
				// On récupère ensuite le dernier id inséré en base en cas de succès de l'insertion.
				if (result)
					idInsere = db.getLastInsertID();
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(DocumentDAL), e.ToString());
			}
			return idInsere;
		}


		/// <summary>
		/// MAJ du fichier 
		/// </summary>
		/// <returns><c>true</c>, if document was updated, <c>false</c> otherwise.</returns>
		/// <param name="objet">Objet.</param>
		public bool updateFileDocument(Document objet)
		{
			bool result = false;
			try
			{
				string requete = "update tblDocument ";
				requete = requete + " set ";
				requete = requete + "  CheminDocument= '" + objet.CheminDocument.Replace("'", "''") + "'";
				requete = requete + " , NomFichierUpload='" + objet.NomFichierUpload.Replace("'", "''") + "'";
				requete = requete + " where id=" + objet.Id.ToString();

				result = db.executerRequete(requete);

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(DocumentDAL), "idDocument=" + objet.Id.ToString() + " : " + e.ToString());
			}
			return result;
		}

		/// <summary>
		/// MAJ du document
		/// </summary>
		/// <returns><c>true</c>, if document was updated, <c>false</c> otherwise.</returns>
		/// <param name="objet">Objet.</param>
		public bool updateDocument(Document objet)
		{
			bool result = false;
			try
			{
				string requete = "update tblDocument ";
				requete = requete + " set ";
				requete = requete + " Titre = '" + objet.Titre.Replace("'", "''") + "'";
				requete = requete + " ,Texte= '" + objet.Texte.Replace("'", "''") + "'";
				requete = requete + " ,Ordre= " + objet.Ordre + "";
				requete = requete + " , idCategorieDocument= " + objet.idCategorieDocument + "";
				requete = requete + " where id=" + objet.Id.ToString();

				result = db.executerRequete(requete);

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(DocumentDAL), "idDocument=" + objet.Id.ToString() + " : " + e.ToString());
			}
			return result;
		}
	}
}
