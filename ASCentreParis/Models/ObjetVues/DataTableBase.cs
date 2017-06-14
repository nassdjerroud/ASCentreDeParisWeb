using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;

namespace Models
{
	public class DataTableBase
	{
		public int draw { get; set; }
		public int NbResultatTotal { get; set; }
	}
}
