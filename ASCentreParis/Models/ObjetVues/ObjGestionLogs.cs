using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;


namespace Models
{
	public class ObjGestionLogs 
	{
		public string infoConnectionBBD { get; set; }

		public ObjGestionLogs()
		{
			infoConnectionBBD = "";
		}
	}
}
