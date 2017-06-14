using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;

namespace Models
{
	public class DataTableDataDocument :DataTableBase
	{
		public List<Document> data { get; set; }
	}

}
