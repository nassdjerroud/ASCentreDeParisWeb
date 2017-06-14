using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;


namespace Models
{
	public class ObjGestionCommentaire : objFormulaire
	{
		public Commentaire Commentaire { get; set; }

		public ObjGestionCommentaire()
		{
			messageOK = null;
			messageKO = null;
			Commentaire = new Commentaire();
		}

		public ObjGestionCommentaire(int idActualite)
		{
			messageOK = null;
			messageKO = null;
			Commentaire = new Commentaire(idActualite);
		}
	}
}
