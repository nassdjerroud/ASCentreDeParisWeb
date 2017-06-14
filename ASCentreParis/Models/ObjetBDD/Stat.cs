using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace Models
{
	public class Stat
	{
		public int Id { get; set; }
		public string Mois { get; set; }
		public int PageAcceuil { get; set; }
		public int PageClub { get; set; }
		public int PageContact { get; set; }
		public int PageEquipe { get; set; }
		public int PageGestion { get; set; }
		public int PageDocument { get; set; }
		public int PageActualite { get; set; }
		public int Total { get { return PageActualite+PageDocument+PageContact+PageAcceuil+PageClub+PageEquipe+PageGestion; }  }
	}
}
