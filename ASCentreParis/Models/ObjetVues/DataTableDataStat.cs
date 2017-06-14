using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.IO;

namespace Models
{
	public  class DataTableDataStat : DataTableBase
	{
		public List<Stat> data { get; set; }
	}
}
