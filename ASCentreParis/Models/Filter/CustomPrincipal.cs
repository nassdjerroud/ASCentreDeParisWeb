using System;
using System.Security.Principal;
using System.Collections.Generic;

namespace Models
{
public class CustomPrincipal : ICustomPrincipal
	{
		public IIdentity Identity { get; private set; }
		public bool IsInRole(string role) { return false; }

		public CustomPrincipal(string _Login)
		{
			this.Identity = new GenericIdentity(_Login);
			this.Login = _Login;
		}

		public string Login { get; set; }
	}
}
