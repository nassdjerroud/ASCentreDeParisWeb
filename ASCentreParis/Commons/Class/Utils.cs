using System;
using System.IO;
using System.Collections.Generic;
using System.Web;
using System.Globalization;
using Models;
using System.Text.RegularExpressions;

namespace Commons
{
	public static class Utils
	{

		// '2017-01-20 23:00:00'
		/// <summary>
		/// Renvoie un string avec le format my sql
		/// </summary>
		/// <returns>The format string pour date my sql.</returns>
		/// <param name="date">Date.</param>
		public static string getFormatStringPourDateMySQL(DateTime date)
		{
			string result = "1990-01-01 23:00:00";

			if(date!=null)
			{
				result = date.ToString("yyyy-MM-dd HH:mm:ss");
			}
			return result;
		}

        /// <summary>
        /// Créations de liens pour les adresses url
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string UrlReformate(string text)
        {
            return Regex.Replace(
               text,
                "((?:http|https|ftp)(?::\\/{2}[\\w]+)(?:[\\/|\\.]?)(?:[^\\s\"]*))",
                "<a style='color:black;text-decoration: underline;' href=\"$0\">$0</a>",
                RegexOptions.IgnoreCase | RegexOptions.Singleline);
        }

        /// <summary>
        /// Deletes the specified document.
        /// </summary>
        /// <returns><c>true</c>, if document was deleted, <c>false</c> otherwise.</returns>
        /// <param name="cheminDocument">Chemin document.</param>
        public static bool deleteDocument(string cheminDocument)
		{
			bool result = true;
			try
			{
				if(!String.IsNullOrEmpty(cheminDocument))
				{
					string nomFichier = Path.GetFileName(cheminDocument);
					string urlRelative = cheminDocument.Replace(nomFichier, "");
					string urlAbsolue = getStorageRoot(urlRelative) + nomFichier;
					System.IO.File.Delete(urlAbsolue);
				}
			}
			catch (Exception e)
			{
				result = false;
				Commons.Logger.genererErreur(typeof(Utils), "chemin Document =" + cheminDocument+ " : " + e.ToString());
			}
			return result;
		}



		/// <summary>
		/// Formats the number space separator.
		/// </summary>
		/// <returns>The number space separator.</returns>
		/// <param name="number">Number.</param>
		public static string FormatNumberSpaceSeparator(int number)
		{
			if(number==null)
				return "";
			string numbercullture = number.ToString("N", CultureInfo.CreateSpecificCulture("fr-FR"));
			string result = numbercullture.Split(',')[0];

			return result;
		}

		/// <summary>
		/// Retourne l'adresse absolue d'un répertoire sur le serveur
		/// </summary>
		/// <returns>The storage root.</returns>
		/// <param name="url">URL.</param>
		public static string getStorageRoot(string url)
		{
			return Path.Combine(System.Web.HttpContext.Current.Server.MapPath(url)); 
		}

		/// <summary>
		/// Gets the format string pour date affichage.
		/// </summary>
		/// <returns>The format string pour date affichage.</returns>
		/// <param name="date">Date.</param>
		public static string getFormatStringPourDateAffichage(DateTime date)
		{
			string result = "";

			if (date != null)
			{
				//result = date.ToString("dd/mm/yyyy HH:mm:ss");
				result = rajouter0PourformatDate(date.Day.ToString()) + "/" + rajouter0PourformatDate(date.Month.ToString()) + "/" + date.Year.ToString() + " " + rajouter0PourformatDate(date.Hour.ToString()) + ":" + rajouter0PourformatDate(date.Minute.ToString()) + ":" + rajouter0PourformatDate(date.Second.ToString());
			}
			return result;
		}

		/// <summary>
		/// Gets the chemin image format upload.
		/// </summary>
		/// <returns>The chemin image format upload.</returns>
		/// <param name="extension">Extension.</param>
		public static string getCheminImageFormatUpload(string extension)
		{
			string result = Commons.Const.ImageUploadStandard;

			// En fonction de l'extension, on va appeler la bonne image
			if (extension == ".DOC" || extension == ".DOCX")
				result = Commons.Const.ImageUploadWord;
			else if (extension == ".XLS" || extension == ".XLSX")
				result = Commons.Const.ImageUploadExcel;
			else if (extension == ".PDF")
				result = Commons.Const.ImageUploadPDF;

			return result;
		}

		/// <summary>
		/// Rajouter0s the pourformat date.
		/// </summary>
		/// <returns>The pourformat date.</returns>
		/// <param name="element">Element.</param>
		public static string rajouter0PourformatDate(string element)
		{
			string result = element;;

			if (element.Length < 2)
				result = "0" + result;

			return result;
		}

		/// <summary>
		/// Shuffle the specified list.
		/// </summary>
		/// <returns>The shuffle.</returns>
		/// <param name="list">List.</param>
		public static List<Document> ShuffleListeDoc(List<Document> list)
		{
			Random rng = new Random();
			int n = list.Count;
			while (n > 1)
			{
				n--;
				int k = rng.Next(n + 1);
				Document doc = list[k];
				list[k] = list[n];
				list[n] =doc;
			}
			return list;
		}

		/// <summary>
		/// Permet d'enlever de remplacer les retour sà la ligne sql par de sretours à la ligne html
		/// </summary>
		/// <returns>The clean text for display.</returns>
		/// <param name="colonne">Texte.</param>
		public static string getCleanTextForDisplay(string colonne)
		{
			if (colonne == null)
				return "";
			return " replace(replace(" + colonne + ", char(13), '<br/>'), char(10), ' ') ";
		}


		/// <summary>
		/// Fonction retournant l'extension d'un fichier
		/// </summary>
		/// <returns>The extension document.</returns>
		/// <param name="urlDocument">URL document.</param>
		public static string getExtensionDocument(string urlDocument)
		 {
			string result = "";
			try
			{
				if (urlDocument != null && urlDocument.Split('.').Length > 1)
				{
                    if(urlDocument.Split('.').Length>2)
                    {
                        result = Const.ExtensionFichierKO;
					}
                    else
                    {
                        result = urlDocument.Split('.')[1];
                    }
				}
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(Utils), "urlDocument =" + urlDocument + " : " + e.ToString());
			}
			return result.ToUpper();
		}


		/// <summary>
		/// Fonction déterminant si un document est une  video en fonction de son extension
		/// </summary>
		/// <returns><c>true</c>, if image was ised, <c>false</c> otherwise.</returns>
		/// <param name="urlDocument">URL document.</param>
		public static bool isVideo(string urlDocument)
		{
			bool result = false;
			try
			{

				string extensionFichier = getExtensionDocument(urlDocument);
				// On regarde ensuite si l'extension est dans la liste des extensions "images"
				if (Const.ListeExtensionsVideos.Contains(extensionFichier))
					result = true;

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(Utils), "urlDocument =" + urlDocument + " /n " + e.ToString());
			}
			return result;
		}


		/// <summary>
		/// Fonction déterminant si un document est une image en fonction de son extension
		/// </summary>
		/// <returns><c>true</c>, if image was ised, <c>false</c> otherwise.</returns>
		/// <param name="urlDocument">URL document.</param>
		public static bool isImage(string urlDocument)
		{
			bool result = false;
			try
			{

				string extensionFichier = getExtensionDocument(urlDocument);
					// On regarde ensuite si l'extension est dans la liste des extensions "images"
				if (Const.ListeExtensionsImage.Contains(extensionFichier))
						result = true;                             

			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(Utils),"urlDocument ="+ urlDocument+" /n "+e.ToString());
			}
			return result;
		}

		public static void ConvertirEnblob(String CheminImage)
		{
			try
			{
				FileStream imgStream = File.OpenRead(CheminImage);
				byte[] blob = new byte[imgStream.Length];
				imgStream.Read(blob, 0, (int)imgStream.Length);

				imgStream.Dispose();
			}
			catch (Exception e)
			{
				Commons.Logger.genererErreur(typeof(Utils), e.ToString());
			}
		}
	}
}
