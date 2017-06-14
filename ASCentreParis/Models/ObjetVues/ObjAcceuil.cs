using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace Models
{
	public class ObjAcceuil
	{
		public List<Actualite> ListeActualites { get; set; }
        public int ElementCount { get; set; }

		public ObjAcceuil()
		{
			ListeActualites = new List<Actualite>();
		}
	}
}
