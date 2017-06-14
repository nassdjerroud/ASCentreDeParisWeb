using System;
using Models;
using System.Data;
using Commons;
using System.Xml;
using System.Xml.Serialization;
using System.Collections.Generic;


namespace DataAccess
{
	public class EquipeDAL: IDisposable
	{
		private DBConnect db;

		public EquipeDAL()
		{
			db = new DBConnect();
		}

		public void Dispose()
		{
			db.Dispose();
		}

		/// <summary>
		/// Gets the nex identifier equipe.
		/// </summary>
		/// <returns>The nex identifier equipe.</returns>
		public int getNexIdEquipe()
		{
			int result = 1;
			try
			{
				string requete = "select max(id)  ";
				requete = requete + "from tblEquipe ";

				DataTable data = db.recupererDonnees(requete);
				DataRow dr;
				if (data != null && data.Rows.Count > 0)
				{
					dr = data.Rows[0];
					result = Convert.ToInt32(dr[0]) + 1;
				}

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(EquipeDAL), e.ToString());
			}
			return result;
		}

		/// <summary>
		/// Gets the liste equipes for ddl.
		/// </summary>
		/// <returns>The liste equipes for ddl.</returns>
		public List<objDropDownListItem> getListeEquipesForDDL()
		{
			List<objDropDownListItem> result = new List<objDropDownListItem>();
			try
			{
				string requete = "select Id, Libelle, ordre  ";
				requete = requete + "from tblEquipe where isActif=1 order by ordre";

				// Création d'un premier élément null à mettre au début de la liste de valeurs
				objDropDownListItem objetNull = new objDropDownListItem();
				objetNull.ID = -1;
				objetNull.VALEUR_STRING = "";
				objetNull.Ordre = 1;

				DataTable data = db.recupererDonnees(requete);
				result.Add(objetNull);
				for (int i = 0; i < data.Rows.Count; i++)
				{
					DataRow dr = data.Rows[i];
					objDropDownListItem objet = new objDropDownListItem();
					objet.ID = Convert.ToInt32(dr[0]);
					objet.VALEUR_STRING = Convert.ToString(dr[1]);
					objet.Ordre = Convert.ToInt32(dr[2]);

					result.Add(objet);
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(EquipeDAL), e.ToString());
			}
			return result;
		}


		/// <summary>
		/// Gets the path of the document to delete. Utilisé pour les calendriers, les photos et les fiches d'entrainement
		/// </summary>
		/// <returns>The path document to delete.</returns>
		/// <param name="TypeDocument">Type document.</param>
		/// <param name="idEquipe">Identifier equipe.</param>
		public string getPathDocumentToDelete(string TypeDocument, int idEquipe)
		{
			string result = null;
			try
			{
				string requete = "select Chemin"+TypeDocument;
				requete = requete + " from tblEquipe ";
				requete = requete + " where id = "+idEquipe.ToString();

				DataTable data = db.recupererDonnees(requete);
				DataRow dr;
				if (data != null && data.Rows.Count > 0)
				{
					dr = data.Rows[0];
					result = Convert.ToString(dr[0]) ;
				}

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(EquipeDAL),"Typedocument = "+TypeDocument+" et idEquipe = "+idEquipe.ToString()+" : "+ e.ToString());
			}
			return result;
		}

		/// <summary>
		/// MAJ du document de l'équipe en base
		/// </summary>
		/// <returns><c>true</c>, if ocument equipe was MAJDed, <c>false</c> otherwise.</returns>
		/// <param name="TypeDocument">Type document.</param>
		/// <param name="idEquipe">Identifier equipe.</param>
		/// <param name="pathDocument">Path document.</param>
		public bool MAJDocumentEquipe(string TypeDocument, int idEquipe, string pathDocument)
		{
			bool operationOK = true;
			try
			{
				string requete = "update tblEquipe set Chemin" + TypeDocument;
				if (!String.IsNullOrEmpty(pathDocument))
					requete = requete + "='" + pathDocument + "' ";
				else
					requete = requete + "=null ";
				requete = requete + " where id = " + idEquipe.ToString();
				operationOK = db.executerRequete(requete);

			}
			catch (Exception e)
			{
				operationOK = false;
				Commons.Logger.genererErreur(typeof(EquipeDAL), "Typedocument = " + TypeDocument + " et idEquipe = " + idEquipe.ToString() + " : " + e.ToString());
			}
			return operationOK;
		}


		/// <summary>
		/// Fonction récupérant la liste des équipes
		/// </summary>
		/// <returns>The liste categories document.</returns>
		public List<Equipe> getListeEquipes()
		{
			List<Equipe> result = new List<Equipe>();
			try
			{
				string requete = "select id,  libelle, commentaire, informationEntrainements, InformationResponsable, InformationDivision, LienClassement , CheminPhoto ,CheminCalendrier , CheminFicheEntrainement, Ordre,DateCreation";
				requete = requete + " from tblEquipe where isActif=1 order by ordre";

				DataTable data = db.recupererDonnees(requete);
				for (int i = 0; i < data.Rows.Count; i++)
				{
					DataRow dr = data.Rows[i];
					Equipe objet = new Equipe();
					objet.Id = Convert.ToInt32(dr[0]);
					objet.Libelle = Convert.ToString(dr[1]);
					objet.Commentaire = Convert.ToString(dr[2]);
					objet.InformationsEntrainements = Convert.ToString(dr[3]);
					objet.InformationsResponsable = Convert.ToString(dr[4]);
					objet.InformationsDivision = Convert.ToString(dr[5]);
					objet.LienClassement = Convert.ToString(dr[6]);
					objet.CheminPhoto = Convert.ToString(dr[7]);
					objet.URL = Commons.Const.URLEquipes + Convert.ToString(dr[0]);
					objet.CheminCalendrier = Convert.ToString(dr[8]);
					objet.CheminFicheEntrainement = Convert.ToString(dr[9]);
					objet.Ordre = Convert.ToInt32(dr[10]);
					objet.DateCreation = Convert.ToDateTime(dr[11]);
					objet.strDateCreation = Commons.Utils.getFormatStringPourDateAffichage(objet.DateCreation);
					result.Add(objet);
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(EquipeDAL), e.ToString());
			}
			return result;
		}

		/// <summary>
		/// Exists the equipe avec meme libelle.
		/// </summary>
		/// <returns><c>true</c>, if equipe avec meme libelle was existed, <c>false</c> otherwise.</returns>
		/// <param name="Libelle">Libelle.</param>
		/// <param name="idEquipe">Identifier equipe.</param>
		public bool existEquipeAvecMemeLibelle(string Libelle,int idEquipe)
		{
			bool result= false;
		
			try
			{
				if (Libelle == null)
					Libelle = "";

				string requete = "select count(*) ";
				requete = requete + "from tblEquipe where libelle='" + Libelle.Replace("'","''")+"'";
				requete = requete + "and isActif=1 and id<>" + idEquipe.ToString();

				DataTable data = db.recupererDonnees(requete);

				if (data != null && data.Rows.Count > 0)
				{
					DataRow dr = data.Rows[0];
					int n = Convert.ToInt32(dr[0]);
					if (n > 0)
						result = true;
				}


			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(EquipeDAL), "Libelle = " + Libelle+ " :  " + e.ToString());
			}
			return result;
		}


		/// <summary>
		/// Gets the equipe by identifier.
		/// </summary>
		/// <returns>The equipe by identifier.</returns>
		/// <param name="idEquipe">Identifier equipe.</param>
		public Equipe getEquipeById(int idEquipe)
		{
		
			Equipe objet = new Equipe();
			try
			{

				string requete = "select id, libelle, commentaire, informationEntrainements";
				requete=requete+", InformationResponsable, InformationDivision, LienClassement , CheminPhoto,CheminCalendrier , CheminFicheEntrainement,Ordre,DateCreation ";
				requete = requete + "from tblEquipe where isActif=1 and id="+idEquipe.ToString();

				DataTable data = db.recupererDonnees(requete);

				DataRow dr = data.Rows[0];

				objet.Id = Convert.ToInt32(dr[0]);
				objet.Libelle = Convert.ToString(dr[1]);
				objet.Commentaire = Convert.ToString(dr[2]);
				objet.InformationsEntrainements = Convert.ToString(dr[3]);
				objet.InformationsResponsable = Convert.ToString(dr[4]);
				objet.InformationsDivision = Convert.ToString(dr[5]);
				objet.LienClassement = Convert.ToString(dr[6]);
				objet.CheminPhoto = Convert.ToString(dr[7]);
				objet.URL = Commons.Const.URLEquipes + Convert.ToString(dr[0]);
				objet.CheminCalendrier = Convert.ToString(dr[8]);
				objet.CheminFicheEntrainement = Convert.ToString(dr[9]);
				objet.Ordre = Convert.ToInt32(dr[10]);
				objet.DateCreation = Convert.ToDateTime(dr[11]);
				objet.strDateCreation = Commons.Utils.getFormatStringPourDateAffichage(objet.DateCreation);
			}
			catch (Exception e)
			{
				string strEquipe = idEquipe.ToString();
				Commons.Logger.genererErreur(typeof(EquipeDAL), "Erreur lors de la récupération des détails d'une equipe : strEquipe = "+strEquipe+" :  "+e.ToString());
			}
			return objet;
		}

		/// <summary>
		/// Inserts the equipe.
		/// </summary>
		/// <param name="equipe">Equipe.</param>
		public int insertEquipe(Equipe objet)
		{
			int idInsere = -1;
			try
			{
				string requete = "insert into tblEquipe (Libelle,Commentaire,InformationEntrainements,";
				requete = requete +" InformationResponsable,DateCreation,InformationDivision,LienClassement,Ordre, isActif) ";
				requete = requete + " values ( '" + objet.Libelle.Replace("'", "''") + "'";
				requete = requete + " , '" + objet.Commentaire.Replace("'", "''") + "'";
				requete = requete + " , '" + objet.InformationsEntrainements.Replace("'", "''") + "'";
				requete = requete + " , '" + objet.InformationsResponsable.Replace("'", "''") + "'";
				requete = requete + " , '" + Commons.Utils.getFormatStringPourDateMySQL(objet.DateCreation) + "'";
				requete = requete + " , '" + objet.InformationsDivision.Replace("'", "''") + "'";
				requete = requete + " , '" + objet.LienClassement.Replace("'", "''") + "'";
				requete = requete + " , " + objet.Ordre + "";
				requete = requete + " , 1";
				requete = requete + " )";

				bool result=db.executerRequete(requete);
				// On récupère ensuite le dernier id inséré en base en cas de succès de l'insertion.
				if(result)
					idInsere=db.getLastInsertID();

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(EquipeDAL), e.ToString());
			}
			return idInsere;
		}

		/// <summary>
		/// Updates the equipe.
		/// </summary>
		/// <returns><c>true</c>, if equipe was updated, <c>false</c> otherwise.</returns>
		/// <param name="objet">Objet.</param>
		public bool updateEquipe(Equipe objet)
		{
			bool result = false;
			try
			{
				string requete = "update tblEquipe ";
				requete = requete + " set ";
				requete = requete + "   Libelle = '" + objet.Libelle.Replace("'", "''") + "'";
				requete = requete + " , Commentaire = '" + objet.Commentaire.Replace("'", "''") + "'";
				requete = requete + " , InformationEntrainements = '" + objet.InformationsEntrainements.Replace("'", "''") + "'";
				requete = requete + " , InformationResponsable = '" + objet.InformationsResponsable.Replace("'", "''") + "'";
				requete = requete + " , Datecreation ='" + Commons.Utils.getFormatStringPourDateMySQL(objet.DateCreation) + "'";
				requete = requete + " , InformationDivision =  '" + objet.InformationsDivision.Replace("'", "''") + "'";
				requete = requete + " , LienClassement ='" + objet.LienClassement.Replace("'", "''") + "'";
				requete = requete + " , Ordre =" + objet.Ordre + "";
				requete = requete + " ,  isActif =" + objet.isActif + "";
				requete = requete + " where id="+objet.Id.ToString();

				result = db.executerRequete(requete);

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(EquipeDAL),"idEquipe="+objet.Id.ToString()+" : "+ e.ToString());
			}
			return result;
		}
	}
}
