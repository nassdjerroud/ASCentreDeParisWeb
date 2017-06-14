using System;
using Models;
using System.Data;
using Commons;
using System.Xml;
using System.Xml.Serialization;
using System.Collections.Generic;

namespace DataAccess
{
	public class CommentaireDAL: IDisposable
	{
		private DBConnect db;

		public CommentaireDAL()
		{
			db = new DBConnect();
		}

		public void Dispose()
		{
			db.Dispose();
		}

		/// <summary>
		/// Récupération des commentaires
		/// </summary>
		/// <returns>The liste commentaires.</returns>
		/// <param name="idActualite">Identifier actualite.</param>
		/// <param name="idDocument">Identifier document.</param>
		public List<Commentaire> getListeCommentaires(int? idActualite,int? idDocument)
		{
			List<Commentaire> result = new List<Commentaire>();
			try
			{
                string requete = "select c.Id,c.NomUtilisateur,c.Message ";
				requete = requete + ", c.DateCreation, c.idActualite, c.idDocument, IFNULL(a.Titre,''), IFNULL(d.Titre,'') ";
				requete = requete + " from tblCommentaire c  ";
				requete = requete + " left join tblActualite a on a.id=c.idActualite  ";
				requete = requete + " left join tblDocument d on d.id=c.idDocument  ";
				requete = requete + " where 1=1 ";
				if (idActualite != null)
				{
					requete = requete + " and idActualite=" + idActualite.ToString();
				}
				if (idDocument != null)
				{
					requete = requete + " and idDocument=" + idDocument.ToString();
				}
				requete = requete + " order by c.id asc";

				DataTable data = db.recupererDonnees(requete);
				for (int i = 0; i < data.Rows.Count; i++)
				{
					DataRow dr = data.Rows[i];
					Commentaire objet = new Commentaire();
					objet.Id = Convert.ToInt32(dr[0]);
					objet.Utilisateur = Convert.ToString(dr[1]);
					objet.Message = Convert.ToString(dr[2]);
					objet.DateCreation = Convert.ToDateTime(dr[3]);
					objet.strDateCreation = Commons.Utils.getFormatStringPourDateAffichage(objet.DateCreation);
					objet.LibelleActualite = Convert.ToString(dr[6]);
					objet.LibelleDocument = Convert.ToString(dr[7]);
					if (dr[4] != DBNull.Value)
						objet.idActualite= Convert.ToInt32(dr[4]);
					if (dr[5] != DBNull.Value)
						objet.idDocument = Convert.ToInt32(dr[5]);
					result.Add(objet);
				}
			}
			catch (Exception e)
			{
				string strIdActualite = "NULL";
				string strIdDocument = "NULL";
				if(idActualite!=null)
					strIdActualite= idActualite.ToString();
				if (idDocument != null)
					strIdDocument=idDocument.ToString();
				Commons.Logger.genererErreur(typeof(CommentaireDAL), "strIdActualite = " + strIdActualite + " et strIdDocument "+strIdDocument+" :" + e.ToString());
			}
			return result;
		}

		/// <summary>
		/// Suppression des commentaires d'un document
		/// </summary>
		/// <returns><c>true</c>, if commentaire by identifier actualite was deleted, <c>false</c> otherwise.</returns>
		/// <param name="idDocument">Identifier actualite.</param>
		public bool deleteCommentaireByIdDocument(int idDocument)
		{
			bool success = false;
			try
			{
				string requete = "delete from tblCommentaire  ";
				requete = requete + " where idDocument=" + idDocument.ToString();


				success = db.executerRequete(requete);
			}
			catch (Exception e)
			{
				success = false;
				string stridDocument= idDocument.ToString();
				Commons.Logger.genererErreur(typeof(CommentaireDAL), "idDocument= " + stridDocument + " : " + e.ToString());
			}
			return success;
		}

		/// <summary>
		/// Suppression des commentaires d'une actualité
		/// </summary>
		/// <returns><c>true</c>, if commentaire by identifier actualite was deleted, <c>false</c> otherwise.</returns>
		/// <param name="idActualite">Identifier actualite.</param>
		public bool deleteCommentaireByIdActualite(int idActualite)
		{
			bool success = false;
			try
			{
				string requete = "delete from tblCommentaire  ";
				requete = requete + " where idActualite=" + idActualite.ToString();


				success = db.executerRequete(requete);
			}
			catch (Exception e)
			{
				success = false;
				string stridActualite = idActualite.ToString();
				Commons.Logger.genererErreur(typeof(CommentaireDAL), "idActualite= " + stridActualite + " : " + e.ToString());
			}
			return success;
		}

		/// <summary>
		/// Suppression d'un commentaire
		/// </summary>
		/// <returns><c>true</c>, if commentaire was deleted, <c>false</c> otherwise.</returns>
		/// <param name="idCommentaire">Identifier commentaire.</param>
		public bool deleteCommentaireById(int idCommentaire)
		{
			bool success = false;
			try
			{
				string requete = "delete from tblCommentaire  ";
				requete = requete + " where id=" + idCommentaire.ToString();


				success = db.executerRequete(requete);
			}
			catch (Exception e)
			{
				success = false;
				string strIdCommentaire = idCommentaire.ToString();
				Commons.Logger.genererErreur(typeof(CommentaireDAL), "idCommentaire = " +strIdCommentaire+ " : " + e.ToString());
			}
			return success;
		}

		/// <summary>
		/// Insertion d'un commentaire
		/// </summary>
		/// <returns>The commentaire.</returns>
		/// <param name="objet">Objet.</param>
		public int insertCommentaire(Commentaire objet)
		{
			int idInsere = -1;
			try
			{
				string requete = "insert into tblCommentaire (NomUtilisateur,Message,DateCreation,idActualite,idDocument) ";
				requete = requete + " values ( '" + objet.Utilisateur.Replace("'", "''") + "'";
				requete = requete + " , '" + objet.Message.Replace("'", "''") + "'";
				requete = requete + " , '" + Commons.Utils.getFormatStringPourDateMySQL(objet.DateCreation) + "'";
				requete = requete + " , " + (objet.idActualite == null ? "NULL" : objet.idActualite.ToString());
				requete = requete + " , " + (objet.idDocument == null ? "NULL" : objet.idDocument.ToString());
				requete = requete + " )";

				bool result = db.executerRequete(requete);
				// On récupère ensuite le dernier id inséré en base en cas de succès de l'insertion.
				if (result)
					idInsere = db.getLastInsertID();
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(CommentaireDAL), e.ToString());
			}
			return idInsere;
		}

	}
}
