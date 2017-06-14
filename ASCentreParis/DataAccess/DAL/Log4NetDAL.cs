using System;
using Models;
using System.Data;
using Commons;
using System.Xml;
using System.Xml.Serialization;
using System.Collections.Generic;


namespace DataAccess
{
	public class Log4NetDAL : IDisposable
	{
		private DBConnect db;

		public Log4NetDAL()
		{
			db = new DBConnect();
		}

		public void Dispose()
		{
			db.Dispose();
		}

		/// <summary>
		/// Fonction permettant de récupérer les logs applicatives
		/// </summary>
		/// <returns>The logs.</returns>
		public List<Log4Net> getLogs()
		{
			List<Log4Net> result = new List<Log4Net>();
			try
			{
				string requete = "select Id, Level, Thread ,Date ";
				requete = requete + ",Logger,Message,Exception ";
				requete = requete + "from tblLog4Net order by id desc";

				DataTable data = db.recupererDonnees(requete);
				for (int i = 0; i < data.Rows.Count; i++)
				{
					DataRow dr = data.Rows[i];
					Log4Net log = new Log4Net();
					log.Id = Convert.ToInt32(dr[0]);
					log.Level = Convert.ToString(dr[1]);
					log.Thread = Convert.ToString(dr[2]);
					log.Date = Convert.ToDateTime(dr[3]);
					log.Logger=Convert.ToString(dr[4]);
					log.Message=Convert.ToString(dr[5]);
					log.Exception=Convert.ToString(dr[6]);
					log.strDate = Commons.Utils.getFormatStringPourDateAffichage(Convert.ToDateTime(dr[3]));
					result.Add(log);
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(Log4Net), e.ToString());
			}
			return result;
		}

	}
}
