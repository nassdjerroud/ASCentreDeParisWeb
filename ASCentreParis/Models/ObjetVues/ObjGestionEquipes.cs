using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;


namespace Models
{
	public class ObjGestionEquipes  : objFormulaire
	{
		public Equipe Equipe { get; set; }

		public ObjGestionEquipes()
		{
			messageOK = null;
			messageKO = null;
			Equipe = new Equipe();
            isCreationOK = false;
        }
	}
}
