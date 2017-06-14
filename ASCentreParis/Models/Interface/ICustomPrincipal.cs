using System;
using System.Security.Principal;
using System.Collections.Generic;

namespace Models
{
	public interface ICustomPrincipal : IPrincipal
	{
		string Login { get; set; }
	}
}
