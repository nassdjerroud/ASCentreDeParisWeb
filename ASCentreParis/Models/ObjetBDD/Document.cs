using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Models
{
	public class Document
	{
        public int Id { get; set; }

		[Display(Name = "Titre")]
		[MaxLength(150, ErrorMessage = "Le titre doit comporter 150 caractères maximum")]
		public string Titre { get; set; }
		public string CheminDocument { get; set; }
		[Display(Name = "Ordre")]
		[Required(ErrorMessage = "Veuillez renseigner un numéro d'ordre")]
		[Range(0, 99999, ErrorMessage = "L'ordre renseigné doit être strictement positif")]
		public int Ordre { get; set; }
		[Display(Name = "Texte")]
		[MaxLength(8000, ErrorMessage = "Le titre titre comporter 8 000 caractères maximum")]
		public string Texte { get; set; }

		[Display(Name = "Catégorie document")]
		[Required(ErrorMessage = "Veuillez renseigner une catégorie de document")]
		public int idCategorieDocument { get; set; }
		public string LibelleCategorieDocument { get; set; }
		public bool isImage { get; set; }
		public bool isVideo { get; set; }
		public DateTime DateCreation { get; set; }
		public string Extension { get; set; }
		public string strDateCreation { get; set; }
		public string CheminImageFormatUpload { get; set; }
		public string NomFichierUpload { get; set; }
		public string LibelleMenuDocument { get; set; }
		public string LibelleCategorieDocumentIHM { get { return String.IsNullOrEmpty(LibelleMenuDocument)?LibelleCategorieDocument:LibelleMenuDocument+" - "+LibelleCategorieDocument;} }	
		public List<Commentaire> ListeCommentaires;

		public Document()
				{
				ListeCommentaires = new List<Commentaire>();
				}
	}
}
