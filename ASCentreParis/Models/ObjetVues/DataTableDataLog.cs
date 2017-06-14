using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;

namespace Models
{
	public class DataTableDataLog : DataTableBase
	{
		public List<Log4Net> data { get; set; }
	}
}
