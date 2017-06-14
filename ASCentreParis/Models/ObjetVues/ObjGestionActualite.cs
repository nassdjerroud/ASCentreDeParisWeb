using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;


namespace Models
{
	public class ObjGestionActualites : objFormulaire
	{
		public Actualite Actualite { get; set; }
		public List<objDropDownListItem> lEquipes { get; set; }

		public ObjGestionActualites()
		{
			messageOK = null;
			messageKO = null;
			Actualite = new Actualite();
			lEquipes = new List<objDropDownListItem>();
            isCreationOK = false;

        }
	}
}
