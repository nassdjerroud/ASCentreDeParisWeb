using System;
using Models;
using System.Data;
using Commons;
using System.Xml;
using System.Xml.Serialization;
using System.Collections.Generic;

namespace DataAccess
{
	public class ActualiteDAL : IDisposable
	{
		private DBConnect db;

		public ActualiteDAL()
		{
			db = new DBConnect();
		}


		public void Dispose()
		{
			db.Dispose();
		}

        /// <summary>
        /// Gets the actualite count.
        /// </summary>
        /// <returns>The actualite count.</returns>
		public int getActualiteCount()
		{
			int result = 0;
			try
			{
                string requete = "select count(*)  ";
				requete = requete + "from tblActualite ";

				DataTable data = db.recupererDonnees(requete);
				DataRow dr;
				if (data != null && data.Rows.Count > 0)
				{
					dr = data.Rows[0];
					result = Convert.ToInt32(dr[0]);
				}

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(ActualiteDAL), e.ToString());
			}
			return result;
		}

		/// <summary>
		/// Gets the nex identifier actualite.
		/// </summary>
		/// <returns>The nex identifier actualite.</returns>
		public int getNexIdActualite()
		{
			int result= 1;
			try
			{
				string requete = "select max(id)  ";
				requete = requete + "from tblActualite ";

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
				Commons.Logger.genererErreur(typeof(ActualiteDAL), e.ToString());
			}
			return result;
		}

        /// <summary>
        /// 
        /// </summary>
        /// <param name="idActualite"></param>
        /// <param name="styleCommentaire"></param>
        /// <returns></returns>
		public Actualite getActualiteById(int idActualite,string styleCommentaire)
		{
			Actualite objet = new Actualite();
			try
			{
				string requete = "select a.Id,a.Titre,a.Texte,";
				requete = requete + " a.DateCreation, a.CheminDocument,a.Resume, a.idEquipe, IFNULL(e.Libelle,'') ";
				requete = requete + " ,IFNULL(e.isActif,0)";
				requete = requete + " from tblActualite a ";
				requete = requete + " left join tblEquipe e on e.Id=a.idEquipe ";
				requete = requete + " where a.id="+idActualite.ToString();

				DataTable data = db.recupererDonnees(requete);

					DataRow dr = data.Rows[0];
					objet.Id = idActualite;
					objet.Titre = Convert.ToString(dr[1]);
					objet.CheminDocument = Convert.ToString(dr[4]);
					objet.DateCreation = Convert.ToDateTime(dr[3]);
					objet.strDateCreation = Commons.Utils.getFormatStringPourDateAffichage(objet.DateCreation);
					if (dr[6] != DBNull.Value)
					{
						objet.idEquipe = Convert.ToInt32(dr[6]);
						objet.URLEquipe = Commons.Const.URLEquipes + objet.idEquipe.ToString();
						objet.isEquipeActive = Convert.ToBoolean(dr[8]);
					}
					objet.LibelleEquipe = Convert.ToString(dr[7]);
					objet.Texte = Convert.ToString(dr[2]);
					objet.Resume = Convert.ToString(dr[5]);
					objet.isImage = Commons.Utils.isImage(objet.CheminDocument);
					// On récupère les éventuels commentaires associés à l'objet
					using(CommentaireDAL DalExterne=new CommentaireDAL())
				      	{
						objet.ListeCommentaires = DalExterne.getListeCommentaires(objet.Id, null);
					    }
                objet.couleurCommentaire = styleCommentaire;

			}
			catch (Exception e)
			{
				string stridActualite = idActualite.ToString();
				Commons.Logger.genererErreur(typeof(ActualiteDAL),"stridActualite ="+stridActualite+" : "+ e.ToString());
			}
			return objet;
		}



        /// <summary>
        /// Retourne une liste d'actualité
        /// </summary>
        /// <param name="filtreTextuel"></param>
        /// <param name="styleCommentaire"></param>
        /// <param name="offSet"></param>
        /// <param name="limit"></param>
        /// <returns></returns>
		public List<Actualite> getListeActualite(string filtreTextuel,string styleCommentaire, int? offSet, int? limit)
		{
			List<Actualite> result = new List<Actualite>();
			try
			{
				string requete = "select a.Id,a.Titre,a.Texte, ";
				requete = requete + " a.DateCreation, a.CheminDocument,a.Resume, a.idEquipe, IFNULL(e.Libelle,'') ";
				requete = requete + " ,IFNULL(e.isActif,0)";
				requete = requete + " from tblActualite a ";
				requete = requete + " left join tblEquipe e on e.Id=a.idEquipe ";
				requete = requete + " order by a.DateCreation desc";
                if(offSet!=null && limit!=null)
                    requete = requete + " LIMIT " + limit.Value.ToString()+" OFFSET "+offSet.Value.ToString();

                DataTable data = db.recupererDonnees(requete);
				for (int i = 0; i < data.Rows.Count; i++)
				{
					DataRow dr = data.Rows[i];
					Actualite objet = new Actualite();
					objet.Id = Convert.ToInt32(dr[0]);
					objet.Titre = Convert.ToString(dr[1]);
					objet.CheminDocument = Convert.ToString(dr[4]);
					objet.DateCreation = Convert.ToDateTime(dr[3]);
					objet.strDateCreation = Commons.Utils.getFormatStringPourDateAffichage(objet.DateCreation);
					if (dr[6] != DBNull.Value)
					{
						objet.idEquipe = Convert.ToInt32(dr[6]);
						objet.URLEquipe = Commons.Const.URLEquipes + objet.idEquipe.ToString();
						objet.isEquipeActive = Convert.ToBoolean(dr[8]);
					}
					objet.LibelleEquipe = Convert.ToString(dr[7]);
					objet.Texte = Convert.ToString(dr[2]);
					objet.Resume = Convert.ToString(dr[5]);
					objet.isImage = Commons.Utils.isImage(objet.CheminDocument);
                    objet.couleurCommentaire = styleCommentaire;

                    // on effectue le filtre sur les différentes proprotés de l'objet
                    if (objet.strDateCreation.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						objet.Resume.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
						(objet.LibelleEquipe ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    objet.Titre.ToLower().Contains(filtreTextuel.ToLower().Trim()) ||
					    (objet.Texte ?? String.Empty).ToLower().Contains(filtreTextuel.ToLower().Trim()))
							{
								// On récupère les éventuels commentaires associés à l'objet
								using(CommentaireDAL DalExterne = new CommentaireDAL())
								{
									objet.ListeCommentaires = DalExterne.getListeCommentaires(objet.Id, null);

                                }
							result.Add(objet);
							}
					
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(ActualiteDAL), e.ToString());
			}
			return result;
		}


		/// <summary>
		/// Fonction permettant de supprimer une actualité
		/// </summary>
		/// <returns><c>true</c>, if actualite was deleted, <c>false</c> otherwise.</returns>
		/// <param name="idActualite">Identifier actualite.</param>
		public bool deleteActualite(int idActualite)
		{
			bool success = false;
			try
			{
				string requete = "delete from tblActualite  ";
				requete = requete + " where id="+idActualite.ToString();


				success=db.executerRequete(requete);
			}
			catch (Exception e)
			{
				success = false;
				string stridActualite = idActualite.ToString();
				Commons.Logger.genererErreur(typeof(ActualiteDAL),"strIdActualite = "+stridActualite+" : "+ e.ToString());
			}
			return success;
		}




	/// <summary>
	/// Insertion de l'actualité. La fonction renvoie le nouvel id de l'actualité
	/// </summary>
	/// <returns>The actualite.</returns>
	/// <param name="objet">Objet.</param>
		public int insertActualite(Actualite objet)
		{
			int idInsere = -1;
			try
			{
				string requete = "insert into tblActualite (Titre,Texte,CheminDocument,DateCreation,idEquipe,Resume) ";
				requete = requete + " values ( '" +objet.Titre.Replace("'", "''") + "'";
				requete = requete + " , '" + objet.Texte.Replace("'","''") + "'";
				requete = requete + " , null";
				requete = requete + " , '" + Commons.Utils.getFormatStringPourDateMySQL(objet.DateCreation) + "'";
				requete = requete + " , " + (objet.idEquipe.ToString()=="-1"?"NULL":objet.idEquipe.ToString()) ;
				requete = requete + " , '" + objet.Resume.Replace("'", "''") + "'";
				requete = requete + " )";

				bool result=db.executerRequete(requete);
				// On récupère ensuite le dernier id inséré en base en cas de succès de l'insertion.
				if (result)
					idInsere = db.getLastInsertID();
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(ActualiteDAL), e.ToString());
			}
			return idInsere;
		}

		/// <summary>
		/// MAJ du document
		/// </summary>
		/// <returns><c>true</c>, if document actualite was updated, <c>false</c> otherwise.</returns>
		/// <param name="objet">Objet.</param>
		public bool updateFileActualite(Actualite objet)
		{
			bool result = false;
			try
			{
				string requete = "update tblActualite ";
				requete = requete + " set ";
				requete = requete + " CheminDocument='" + objet.CheminDocument.Replace("'", "''") + "'";
				requete = requete + " where id=" + objet.Id.ToString();

				result = db.executerRequete(requete);

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(ActualiteDAL), "idActualite=" + objet.Id.ToString() + " : " + e.ToString());
			}
			return result;
		}

		/// <summary>
		/// Updates the actualite.
		/// </summary>
		/// <returns><c>true</c>, if actualite was updated, <c>false</c> otherwise.</returns>
		/// <param name="objet">Objet.</param>
		public bool updateActualite(Actualite objet)
		{
			bool result = false;
			try
			{
				string requete = "update tblActualite ";
				requete = requete + " set ";
				requete = requete + " Titre= '" + objet.Titre.Replace("'", "''") + "'";
				requete = requete + " ,Texte= '" + objet.Texte.Replace("'", "''") + "'";
				requete = requete + " ,idEquipe= " + (objet.idEquipe==null  ?"NULL" :( objet.idEquipe ==-1?  "NULL" : objet.idEquipe.ToString()));
				requete = requete + " ,Resume= '" + objet.Resume.Replace("'", "''") + "'";
				requete = requete + " where id=" + objet.Id.ToString();

				result = db.executerRequete(requete);

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(ActualiteDAL), "idActualite=" + objet.Id.ToString() + " : " + e.ToString());
			}
			return result;
		}
	}
}
