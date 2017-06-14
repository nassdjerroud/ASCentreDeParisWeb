using System;
using Models;
using System.Data;
using Commons;
using System.Xml;
using System.Xml.Serialization;
using System.Collections.Generic;

namespace DataAccess
{
	public class StatDAL: IDisposable
	{
		private DBConnect db;

		public StatDAL()
		{
			db = new DBConnect();
		}

		public void Dispose()
		{
			db.Dispose();
		}

		/// <summary>
		/// Fonction déterminant si le mois en cours possède déja des stats
		/// </summary>
		/// <returns><c>true</c>, if nouveau mois was ised, <c>false</c> otherwise.</returns>
		/// <param name="Mois">Mois.</param>
		public bool isNouveauMois(string Mois)
		{
			bool result = false;
			try
			{
				DataTable data = db.recupererDonnees("select count(*) from tblStat where Mois='"+Mois+"'");
				DataRow dr = data.Rows[0];
				int n = Convert.ToInt32(dr[0]);
				if (n == 0)
					result = true;
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(StatDAL), e.ToString());
			}
			return result;
		}

		/// <summary>
		/// Fonction permettant de mettre à jour les stats en incrémentant d'un unité la page visitée
		/// </summary>
		/// <param name="TypeStat">Type stat.</param>
		/// <param name="Mois">Mois.</param>
		public void majStat(string TypeStat,string Mois)
		{
			string requete;
			try
			{
				requete = "update tblStat ";
				requete = requete + " set "+TypeStat+"="+TypeStat+"+1";
				requete = requete + " where Mois= '" + Mois+"'";

				db.executerRequete(requete);
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(StatDAL), e.ToString());
			}
		}

		/// <summary>
		/// Fonction retournant les totaux de stats
		/// </summary>
		/// <returns>The total stat.</returns>
		public Stat getTotalStat()
		{
			Stat stat = new Stat();
			try
			{
				string requete = "select 1, 1, sum(PageAcceuil)  ";
				requete = requete + ",sum(PageGestion),sum(PageClub) ";
				requete = requete + ",sum(PageEquipe) ";
				requete = requete + ", sum(PageContact), sum(PageDocument),sum(PageActualite) ";
				requete = requete + "from tblStat";

				DataTable data = db.recupererDonnees(requete);

					DataRow dr = data.Rows[0];
					
					stat.Id = Convert.ToInt32(dr[0]);
					stat.Mois = "N/A";
					stat.PageAcceuil = Convert.ToInt32(dr[2]);
					stat.PageGestion = Convert.ToInt32(dr[3]);
					stat.PageClub = Convert.ToInt32(dr[4]);
					stat.PageEquipe = Convert.ToInt32(dr[5]);
					stat.PageContact = Convert.ToInt32(dr[6]);
				    stat.PageDocument= Convert.ToInt32(dr[7]);
					stat.PageActualite = Convert.ToInt32(dr[8]);

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(StatDAL), e.ToString());
			}
			return stat;
		}

		/// <summary>
		/// fonction retournant l'ensemble de stats du système (consultation des pages)
		/// </summary>
		/// <returns>The getstats.</returns>
		public List<Stat> getstats()
		{
			List<Stat> result = new List<Stat>();
			try
			{
				string requete = "select Id, Mois, PageAcceuil  ";
				requete = requete + ",PageGestion,PageClub ";
				requete = requete + ",PageEquipe ";
				requete = requete + ", PageContact, PageDocument,PageActualite ";
				requete = requete + "from tblStat order by Mois desc";

				DataTable data = db.recupererDonnees(requete);
				for (int i = 0; i < data.Rows.Count;i++)
				{
					DataRow dr = data.Rows[i];
					Stat stat = new Stat();
					stat.Id = Convert.ToInt32(dr[0]);
					stat.Mois = Convert.ToString(dr[1]);
					stat.PageAcceuil = Convert.ToInt32(dr[2]);
					stat.PageGestion = Convert.ToInt32(dr[3]);
					stat.PageClub = Convert.ToInt32(dr[4]);
					stat.PageEquipe = Convert.ToInt32(dr[5]);
					stat.PageContact = Convert.ToInt32(dr[6]);
					stat.PageDocument = Convert.ToInt32(dr[7]);
					stat.PageActualite = Convert.ToInt32(dr[8]);
					result.Add(stat);
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(StatDAL), e.ToString());
			}
			return result;
		}
		

		/// <summary>
		/// Fonction permettant dd'insérer une nouvelle ligne dans la table des stats
		/// </summary>
		/// <param name="Mois">Mois.</param>
		public void insertStat(string Mois)
		{
			try
			{
				string requete = "insert into tblStat (Mois) ";
				requete = requete + " values ( '" + Mois + "')";

				db.executerRequete(requete);
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(StatDAL), e.ToString());
			}
		}
			
	}
}
