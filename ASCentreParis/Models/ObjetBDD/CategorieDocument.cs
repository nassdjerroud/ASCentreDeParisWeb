using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using MvcSiteMapProvider.Web.Html.Models;
namespace Models
{
	public class CategorieDocument
	{

			public int Id { get; set; }
		  	[Display(Name = "Libellé")]
		    [Required(ErrorMessage = "Veuillez renseigner un libellé")]
		    [MaxLength(250, ErrorMessage = "Le libellé doit comporter 250 caractères maximum")]
			public string Libelle { get; set; }
			public string URL { get; set; }
			public int Ordre { get; set; }
		    public int NombreDocuments { get; set; }
			public int? idCategorieDocumentPere { get; set; }
			public List<CategorieDocument> ListSousCategorie { get; set; }

			public CategorieDocument()
			{
				ListSousCategorie = new List<CategorieDocument>();
			}
	}
}
