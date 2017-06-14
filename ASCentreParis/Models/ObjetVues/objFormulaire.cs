using System;
namespace Models
{
	public class objFormulaire
	{
		public string TitrePage { get; set; }
		public string ModePage { get; set; }
		public bool isActionOK { get; set; }
		public string LibelleBoutonSauvegarde { get; set; }
		public string messageOK { get; set; }
		public string messageKO { get; set; }
        public bool isCreationOK { get; set; }
    }
}
