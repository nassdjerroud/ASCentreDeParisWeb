using System;
using Models;
using System.Data;
using Commons;
using System.Xml;
using System.Xml.Serialization;
using System.Collections.Generic;

namespace DataAccess
{
	public class UtilisateurDAL : IDisposable
	{
		private DBConnect db;

		public UtilisateurDAL()
		{
			db = new DBConnect();
		}


		public void Dispose()
		{
			db.Dispose();
		}

		/// <summary>
		/// Fonction testant si les logins et le mot passe de passe renseignés sont corrects et renvoyant l'id du type utilisateur
		/// </summary>
		/// <returns>The connexion ok.</returns>
		/// <param name="Login">Login.</param>
		/// <param name="Password">Password.</param>
		public int isConnexionOK(string Login,string Password)
		{
            int idTypeUtilisateur = -1;
			try
			{
				Login = Login.Replace("'", "''");
				Password=Password.Replace("'", "''");
				string requete = "select idTypeUtilisateur  ";
				requete = requete + "from tblUtilisateur ";
				requete = requete + " where Login='" + Login + "' ";
				requete = requete + " and Password='" + Password+ "' ";

				DataTable data = db.recupererDonnees(requete);
				DataRow dr;
				if (data != null && data.Rows.Count > 0)
				{
					dr = data.Rows[0];
					idTypeUtilisateur = Convert.ToInt32(dr[0]);
				}

			}
			catch (Exception e)
			{
                idTypeUtilisateur= -1;
				Commons.Logger.genererErreur(typeof(UtilisateurDAL), "Login =" + Login +" et Password =" + Password + " : " + e.ToString());
			}
			return idTypeUtilisateur;
		}

		/// <summary>
		/// Fonction permettant de tester l'existance d'un utilisateur
		/// </summary>
		/// <returns><c>true</c>, if utilisateur existant was ised, <c>false</c> otherwise.</returns>
		/// <param name="Login">Login.</param>
		public bool isUtilisateurExistant(string Login)
		{
			bool result = false;
			int n = -1;
			try
			{
				Login = Login.Replace("'", "''");
				string requete = "select count(*)  ";
				requete = requete + "from tblUtilisateur ";
				requete = requete + " where Login='"+Login+"' ";

				DataTable data = db.recupererDonnees(requete);
				DataRow dr;
				if (data != null && data.Rows.Count > 0)
					{
					dr = data.Rows[0];
				    n = Convert.ToInt32(dr[0]);
					if(n == 1)
						result = true;
				    }

			}
			catch (Exception e)
			{
				
				Commons.Logger.genererErreur(typeof(UtilisateurDAL),"Login ="+Login+" : "+ e.ToString());
			}
			return result;
		}

	
	}
}
