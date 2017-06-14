using System;
namespace Models
{
	public class objDropDownListItem
	{

		public objDropDownListItem(int _ID, string _VALEUR_STRING, int _VALEUR_INT, int _Ordre)
		{
			this.ID = _ID;
			this.VALEUR_STRING = _VALEUR_STRING;
			this.VALEUR_INT = _VALEUR_INT;
			this.Ordre = _Ordre;
		}

		public objDropDownListItem(int _ID, int _VALEUR_INT)
		{
			this.ID = _ID;
			this.VALEUR_STRING = "";
			this.VALEUR_INT = _VALEUR_INT;
			this.Ordre = 1;
		}


		public objDropDownListItem(int _ID, string _VALEUR_STRING, int _Ordre)
		{
			this.ID = _ID;
			this.VALEUR_STRING = _VALEUR_STRING;
			this.VALEUR_INT = -1;
			this.Ordre = _Ordre;
		}

		public objDropDownListItem()
		{
			this.ID = -1;
			this.VALEUR_STRING = "Valeur";
			this.Ordre = 1;
		}

		public int ID { get; set; }

		public int Ordre { get; set; }
		public string VALEUR_STRING { get; set; }

		public int VALEUR_INT { get; set; }
	}
}
