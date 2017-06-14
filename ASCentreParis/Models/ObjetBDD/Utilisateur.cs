using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Models
{
	public class Utilisateur
	{
		public int Id { get; set; }

		[Display(Name = "Login")]
		[Required(ErrorMessage = "Veuillez renseigner un login")]
		[MaxLength(10, ErrorMessage = "Le login doit comporter 10 caractères maximum")]
		public string Login { get; set; }

		[Display(Name = "Mot de passe")]
		[Required(ErrorMessage = "Veuillez renseigner un mot de passe")]
		[MaxLength(10, ErrorMessage = "Le mot de passe doit comprter 10 caractères maximum.")]
		public string Password { get; set; }

		public List<string> Profils { get; set; }

        public string strProfils { 
            get {
                string result = "";
                if (Profils != null && Profils.Count>0)
                    {
                    foreach (string Profil in Profils)
                        {
                        result = result  + Profil + ",";
                        }
                    result = result.Substring(0, result.Length - 1);
                    }
                    return result;
                } 
        }

		public Utilisateur()
			{
			Profils = new List<string>();
			Profils.Add("Utilisateur");
			}

		public Utilisateur(int idTypeUtilisateur)
		{
			Profils = new List<string>();
            if (idTypeUtilisateur == 1)
                Profils.Add("Administrateur");
            else if (idTypeUtilisateur == 2)
                Profils.Add("Administrateur Partiel");
            else
                Profils.Add("Utilisateur");
		}
	}
}
