using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;

namespace Models
{
	public class DataTableEquipe : DataTableBase
	{
		public List<Equipe> data { get; set; }
	}
}
