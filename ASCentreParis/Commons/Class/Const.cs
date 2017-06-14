using System;
using System.Linq;
using System.Collections.Generic;

namespace Commons
{
	public class Const
	{
		public static string theme = "";

		public static string BaseCheminRelatifFichiers = "~/Ressources";
		public static string BaseCheminRelatifFichiersUploads= "~/Ressources";

		public static string CheminRelatifImagesHistoireClub = BaseCheminRelatifFichiers+"/Fichiers/Images/Histoire/";
		public static string CheminRelatifImagesPSG = BaseCheminRelatifFichiers+"/Fichiers/Images/PSG/";
        public static string CheminRelatifImagesDons = BaseCheminRelatifFichiers + "/Fichiers/Images/Don/";
		public static string CheminRelatifImagesASCMarcory = BaseCheminRelatifFichiers + "/Fichiers/Images/ASCMarcory/";

        public static string ImageImportant = BaseCheminRelatifFichiers + "/Images/important.png";
		public static string ImageStandardActualite = BaseCheminRelatifFichiers+"/Images/no-image.png";

		public static string ImageUploadStandard = BaseCheminRelatifFichiers + "/Images/logo_fichier.png";
		public static string ImageUploadPDF= BaseCheminRelatifFichiers + "/Images/logo_pdf.jpeg";
		public static string ImageUploadExcel = BaseCheminRelatifFichiers + "/Images/logo_excel.png";
		public static string ImageUploadWord = BaseCheminRelatifFichiers + "/Images/logo_word.png";
		public static string ImageLogin = BaseCheminRelatifFichiers + "/Images/login.png";
		public static string ImageLogin_ok = BaseCheminRelatifFichiers + "/Images/login_ok.png";

		public static string CheminLogoApplication = BaseCheminRelatifFichiers + "/Images/logo.png";
        public static string CheminMiniBandeau_violet = BaseCheminRelatifFichiers + "/Images/minibandeau_violet.png";


        public static string URLDocuments = "/Document/AfficherDocuments?idCategorieDocument=";
	
		public static string Creation= "Creation";
		public static string Modification = "Modification";


        public static string ExtensionFichierKO = "EXTENSIONFICHIERKO";

		public static string sessionName_idActualiteAdministration = "sessionName_idActualiteAdministration";
		public static string sessionName_idDocumentAdministration = "sessionName_idDocumentAdministration";
		public static string sessionName_idEquipeAdministration = "sessionName_idEquipeAdministration";
		public static string sessionName_MenusDocuments = "sessionName_MenusDocuments";
		public static string sessionName_UserConnecte = "sessionName_UserConnecte";
		public static string sessionName_MenusEquipes= "sessionName_MenusEquipes";
		public static string sessionName_NomUtilisateurCommentaire = "sessionName_NomUtilisateurCommentaire";

		public static string URLEquipes = "/Equipe/AfficherEquipe?idEquipe=";

		public static string UploadActualitePath = BaseCheminRelatifFichiersUploads + "/Fichiers/Uploads/Actualite";
		public static string UploadDocumentPath = BaseCheminRelatifFichiersUploads + "/Fichiers/Uploads/Document";
		public static string UploadEquipePath = BaseCheminRelatifFichiersUploads + "/Fichiers/Uploads/Equipe";

		public static string MessageErreurModelNotValid = ""; 

		public const string ProfilAdministrateur = "Administrateur";
        public const string ProfilAdministrateurPartiel = "Administrateur Partiel";
        public const string ProfilUtilisateur = "Utilisateur";


        public const int idProfilUtilisateur = 3;

		public static List<string> ListeExtensionsVideos = new List<string> { "MP4", "M4V", "MOV", "MKV"};
		public static List<string> ListeExtensionsImage = new List<string> {"JPG","JPEG","PNG","GIF" };
    }		
}
