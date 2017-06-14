using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace Models
{
	public class Commentaire 
	{
		public int Id { get; set; }
		[Display(Name = "Commentaire")]
		[Required(ErrorMessage = "Veuillez renseigner un commentaire")]
		[MaxLength(250, ErrorMessage = "Le commentaire doit comporter 250 caractères maximum")]
		public string Message {get; set;}
		public DateTime DateCreation { get; set; }
		public string strDateCreation { get; set; }

		public int? idActualite { get; set; }
		public int? idDocument  { get; set; }
		public string  LibelleDocument { get; set; }
		public string 	LibelleActualite { get; set; }




        [Display(Name = "Nom d'utilisateur")]
		[Required(ErrorMessage = "Veuillez renseigner un nom d'utilisateur")]
		[MaxLength(20, ErrorMessage = "Le nom d'utilisateur doit comporter 20 caractères maximum")]
		public string Utilisateur { get; set; }


		public Commentaire()
		{
			
		}


        public Commentaire(int _idActualite)
		{
			this.idActualite = _idActualite;
		}
	}
}