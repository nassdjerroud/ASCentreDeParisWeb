using System;
using Models;
using DataAccess;

namespace Business
{
	public class StatBLL
	{
		/// <summary>
		/// Fonction permettant d'ajouter une stat
		/// </summary>
		/// <param name="TypeState">Type state.</param>
		public static void ajouterStat(string TypeState)
		{
			try
			{
				// On détermine le mois en cours
				string Mois = DateTime.Now.Year.ToString() + "-" + (DateTime.Now.Month.ToString().Length == 1 ? "0" + DateTime.Now.Month.ToString() : DateTime.Now.Month.ToString());
				using (StatDAL db = new StatDAL())
				{
					if (db.isNouveauMois(Mois))
					{
						db.insertStat(Mois);
					}
					db.majStat(TypeState, Mois);
				}
			}
			catch (Exception e)
			{
				
				Commons.Logger.genererErreur(typeof(StatBLL),"TypeState="+TypeState+" : "+ e.ToString());
			}

		}
	}
}
