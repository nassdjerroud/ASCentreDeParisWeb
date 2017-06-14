using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Xml;
using System.Xml.Serialization;
using System.Media;
using System.Resources;
using System.Threading;
using System.Globalization;
using System.Data;
using MySql.Data.MySqlClient;
using System.Configuration;
using Commons;

namespace DataAccess
{
	public class DBConnect : IDisposable
	{
		private MySqlDataAdapter MyAdapter;
		private string connectionString;
		private MySqlConnection mySqlConnection;

		public  DBConnect()
		{
			initDBConnect();
		}

		/// <summary>
		/// Fonction récupérant le dernier id inséré
		/// </summary>
		/// <returns>The last inserti d.</returns>
		public int getLastInsertID()
		{
			int result = -1;
			try
			{
				string requete = "SELECT LAST_INSERT_ID()";
				DataTable data = recupererDonnees(requete);
				DataRow dr;
				if (data != null && data.Rows.Count > 0)
				{
					dr = data.Rows[0];
					result = Convert.ToInt32(dr[0]) ;
				}

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(DBConnect), e.ToString());
			}
			return result;
		}


		public void Dispose()
		{
			mySqlConnection.Dispose();
		}
		/// <summary>
		/// Recuperation de données à partir d'une requete
		/// </summary>
		/// <returns>The donnees.</returns>
		/// <param name="requete">Requete.</param>
		public DataTable recupererDonnees(string requete)
		{
			DataTable data = new DataTable();
			DataSet ds = new DataSet();
			try {
				//	requete = requete.Replace("'", "''");
				mySqlConnection.Open();
				MyAdapter.SelectCommand = new MySql.Data.MySqlClient.MySqlCommand(requete, mySqlConnection);
				MyAdapter.Fill(ds);
				mySqlConnection.Close();
				data=ds.Tables[0];
				}
			catch(Exception e)
			{
				string message = "Erreur lors de l'execution de la requete de type select \n requete = " + requete + " \n " + e.ToString();
				Commons.Logger.genererErreur(typeof(DBConnect),message);
			}
			return data;
		}

		/// <summary>
		/// Executers the requete.
		/// </summary>
		/// <returns><c>true</c>, if requete was executered, <c>false</c> otherwise.</returns>
		/// <param name="requete">Requete.</param>
		public bool executerRequete(string requete)
		{
			bool result = true;
			try
			{
				//requete = requete.Replace("'", "''");
				MySqlCommand myCommand = new MySqlCommand(requete);
				myCommand.Connection = mySqlConnection;
				mySqlConnection.Open();
				myCommand.ExecuteNonQuery();
				mySqlConnection.Close();
			}
			catch (Exception e)
			{
				result = false;
				Commons.Logger.genererErreur(typeof(DBConnect), "Erreur lors de l'execution de la requete de type update/insert avec requete = " + requete + " et " + e.ToString());
			}
			return result;
		}

		/// <summary>
		/// Checks the connection.
		/// </summary>
		/// <returns>The connection.</returns>
		public string checkConnection()
		{
			string result = "*** Connection OK ***";
			try
			{
				MySqlCommand myCommand = new MySqlCommand();
				myCommand.Connection = mySqlConnection;
				mySqlConnection.Open();
				if (mySqlConnection.State == ConnectionState.Open)
				{
					result = "Connection OK et ouverte.";
				}
				else
				{
					result = "Connection OK mais fermée.";
				}
			}
			catch (Exception e)
			{
				result = "*** Connection KO ***</br></br>";
				result = result +"Connection string :</br>";
				if(mySqlConnection!=null && mySqlConnection.ConnectionString!=null)
					result = result +mySqlConnection.ConnectionString.ToString()+"</br></br>";
				else
					result = result +"ConnectionString Nulle!</br></br>";
				result = result +"Erreur :</br>";
				result = result + e.ToString();
				Commons.Logger.genererErreur(typeof(DBConnect), "Erreur lors du test de connection à la BDD MySQL: "+ e.ToString());
			}
			result = result.Replace("/n", "</br>");
			return result;				
		}
		/// <summary>
		/// Initiation de la connection
		/// </summary>
		public void initDBConnect()
		{
			try
			{
				connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["MySQL"].ToString();
				MyAdapter = new MySqlDataAdapter();
				mySqlConnection = new MySqlConnection();
				mySqlConnection.ConnectionString = connectionString;
			}
			catch(Exception e)
			{
				Commons.Logger.genererErreur(typeof(DBConnect), e.ToString());
			}
		}
	}
}
