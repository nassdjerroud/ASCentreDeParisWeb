using System;
using Microsoft.Owin;
using Owin;


[assembly: log4net.Config.XmlConfigurator(ConfigFile = "Web.config", Watch = true)]

namespace WebFootball
{

    
    public partial class Startup
    {
        // Pour plus d’informations sur la configuration de l’authentification, rendez-vous sur http://go.microsoft.com/fwlink/?LinkId=301864
        public void ConfigureAuth(IAppBuilder app)
        {
    
        }
    }
}