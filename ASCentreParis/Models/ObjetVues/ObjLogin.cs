using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;


namespace Models
{
	public class ObjLogin : Utilisateur
	{
		
		public string messageKO { get; set; }
		public bool isConnectionOK { get; set; }

		public ObjLogin()
		{

		}
	}
}
