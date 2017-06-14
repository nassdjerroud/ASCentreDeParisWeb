using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace Models
{
	public class Equipe 
	{
		public int Id { get; set; }
		[Display(Name = "Libellé")]
		[Required(ErrorMessage = "Veuillez renseigner un libellé")]
		[MaxLength(250, ErrorMessage = "Le libellé doit comporter 250 caractères maximum")]
		public string Libelle {get; set;}
		public string InformationsEntrainements { get; set; }
		public string InformationsResponsable { get; set; }
		public string InformationsDivision { get; set; }
		public string Commentaire { get; set; }
		public string LienClassement { get; set; }
		[Display(Name = "Commentaire")]
		[MaxLength(8000, ErrorMessage = "Le commentaire doit comporter 8000 caractères maximum")]
		public string CheminPhoto { get; set; }
		public string URL { get; set; }
		public string CheminCalendrier { get; set; }
		public string CheminFicheEntrainement { get; set; }
		[Display(Name = "Ordre")]
		[Required(ErrorMessage = "Veuillez renseigner un numéro d'ordre")]
		[Range(0, 99999, ErrorMessage = "L'ordre renseigné doit être strictement positif")]
		public int Ordre { get; set; }
		public DateTime DateCreation { get; set; }
		public string strDateCreation { get; set; }
		public bool isActif  { get; set; }

		public Equipe()
		{

		}
	}
}