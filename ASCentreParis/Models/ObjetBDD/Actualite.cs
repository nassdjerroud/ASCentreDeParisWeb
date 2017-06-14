using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Models
{
	public class Actualite
	{
		public int Id { get; set; }

		[Display(Name = "Titre")]
		[Required(ErrorMessage = "Veuillez renseigner un titre")]
		[MaxLength(150, ErrorMessage = "Le titre doit comporter 150 caractères maximum")]
		public string Titre { get; set; }
		public string CheminDocument { get; set; }
		[Display(Name = "Texte")]
		[MaxLength(8000, ErrorMessage = "Le texte doit comporter 8 000 caractères maximum")]
		public string Texte { get; set; }
		[Display(Name = "Resume")]
		[MaxLength(1000, ErrorMessage = "Le resume doit comporter 1 000 caractères maximum")]
		[Required(ErrorMessage = "Veuillez renseigner un résumé")]
		public string Resume { get; set; }
		public bool? isImage { get; set; }
		public DateTime DateCreation { get; set; }
		public string strDateCreation { get; set; }
		public string LibelleEquipe { get; set; }
		public string URLEquipe { get; set; }
		public bool isEquipeActive { get; set; }
		public int? idEquipe { get; set; }
		public string TitreIHM { get{ return (String.IsNullOrEmpty(LibelleEquipe)?"":"["+LibelleEquipe+"] ")+Titre; }  }
		public List<Commentaire> ListeCommentaires;
		public string styleCommentairesActualite { get; set; }
        public string couleurCommentaire { get; set; }

        public Actualite()
		{
			this.ListeCommentaires = new List<Commentaire>();
			this.styleCommentairesActualite= "display:none;";

;		}

        public Actualite(string _couleurCommentaire)
        {
            this.ListeCommentaires = new List<Commentaire>();
            this.styleCommentairesActualite = "display:none;";
            this.couleurCommentaire = _couleurCommentaire;
        }
    }
}
