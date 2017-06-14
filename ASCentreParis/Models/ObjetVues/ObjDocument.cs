using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace Models
{
	public class ObjDocument
	{
		public List<Document> ListeDocuments { get; set; }
		public string LibelleCategorieDocument { get; set; }
		public int NombreDocumentsParLigne { get; set; }
        public int ElementCount { get; set; }
        public int NombreLignes { get; set; }
        public int idCategorieDocument { get; set; }

		public ObjDocument()
		{
			ListeDocuments = new List<Document>();
		}
	}
}
