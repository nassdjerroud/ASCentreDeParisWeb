using System.Web;
using System;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Optimization.Extensions;


namespace ASCentreParis
{
	public class BundleConfig
	{

		// Pour plus d'informations sur le regroupement, viClubz http://go.microsoft.com/fwlink/?LinkId=301862

		public static void AddDefaultFileOrderings(IList<BundleFileSetOrdering> list)
		{
			if (list != null)
			{
				
                var fs = new BundleFileSetOrdering("orderer");
                fs.Files.Add("jquery.js");
                fs.Files.Add("jquery-min.js");
                fs.Files.Add("jquery-*");
                fs.Files.Add("jquery-ui*");
                fs.Files.Add("jquery.ui*");
                fs.Files.Add("jquery.unobtrusive*");
                fs.Files.Add("~/resources/jquery/js/globalize/globalize.js");
                fs.Files.Add("globalize.culture*");
                fs.Files.Add("jquery.validate.js");
                fs.Files.Add("jquery.validate.unobtrusive.js");
                fs.Files.Add("~/resources/jquery/js/jquery.validate.globalize.js");
                fs.Files.Add("bdf.globalize.js");
                fs.Files.Add("jquery.Storage.js");
                fs.Files.Add("bootstrap.js");
                fs.Files.Add("bdf.charte.js");
               
			}
		}

		public static void AddDefaultFileExtensionReplacements(FileExtensionReplacementList list)
		{
			if (list != null)
			{
				list.Add("min", OptimizationMode.WhenEnabled);
				list.Add("debug", OptimizationMode.WhenDisabled);
				return;
			}
			else
			{
				throw new ArgumentNullException("list");
			}
		}

		private static void AddCssBundles(BundleCollection bundles)
		{
			bundles.Add(new StyleBundle("~/resources/bootstrapv311/css/bootstrap").Include(
							"~/resources/bootstrapv311/css/bootstrap.css"));

			bundles.Add(new StyleBundle("~/resources/extPlugins/css/icons")
				.Include(
				"~/resources/extPlugins/css/flags.css",
				"~/resources/bdf/css/bdf.glyphicons.css"));

			bundles.Add(new StyleBundle("~/resources/elusive-iconfont/css/font")
				.Include("~/resources/elusive-iconfont/css/elusive-webfont.css"));

			bundles.Add(new StyleBundle("~/resources/bdf/css").Include(
				"~/resources/bdf/css/bdf.charte.css",
				"~/resources/bdf/css/bdf.charte.maquette.css",
				"~/resources/bdf/css/bdf.charte.submenus.css"));

			bundles.Add(new StyleBundle("~/Style/controls").Include(
				"~/resources/extPlugins/css/bootstrap-datepicker.css",
				"~/resources/extPlugins/css/bootstrap-select2.css",
				"~/resources/jquery/css/DataTables/css/jquery.dataTables.css",
				//// "~/resources/extPlugins/css/bootstrap.datatables.css",
				"~/resources/jquery/css/DataTables/css/DataTables.bootstrap.css",
				"~/resources/extPlugins/css/bootstrap-duallistbox.css",
				"~/resources/extPlugins/css/bootstrap-validation.css",
				"~/resources/extPlugins/css/easy-responsive-tabs.css",
				"~/resources/extPlugins/css/bootstrap-treeview.css",
				"~/resources/bdf/css/bdf.calendar.css",
				"~/resources/bdf/css/bdf.duallist.css",
				"~/resources/bdf/css/bdf.tabs.css",
				"~/resources/bdf/css/bdf.panel.css"));

			bundles.Add(new StyleBundle("~/Style/DataTables").Include(
				// "~/resources/jquery/css/DataTables/css/jquery.dataTables.css",
				// "~/resources/extPlugins/css/bootstrap.datatables.css",
				"~/resources/jquery/css/DataTables/css/data.css"
				));

			bundles.Add(new StyleBundle("~/resources/jquery/css")
				.Include(
				"~/resources/jquery/css/jquery-ui.css"));

		
			bundles.Add(new StyleBundle("~/resources/ajoutsCSS").Include(
				"~/ressources/css/Ajout.css",
				"~/resources/toastr/css/toastr.css"
				));

		}

		public static void AddDefaultIgnorePatterns(IgnoreList ignoreList)
		{
			if (ignoreList != null)
			{
				ignoreList.Ignore("*.intellisense.js");
				ignoreList.Ignore("*-vsdoc.js");
				ignoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
				ignoreList.Ignore("*.min.js", OptimizationMode.WhenDisabled);
				ignoreList.Ignore("*.min.css", OptimizationMode.WhenDisabled);
				return;
			}
			else
			{
				throw new ArgumentNullException("ignoreList");
			}
		}

		private static void AddJsBundles(BundleCollection bundles)
		{
			// Utilisez la version de développement de Modernizr pour développer et apprendre. Puis, lorsque vous êtes
			// prêt pour la production, utilisez l'outil de génération sur http://modernizr.com pour sélectionner uniquement les tests dont vous avez besoin.
			bundles.Add(new ScriptBundle("~/Scripts/modernizr").Include("~/resources/modernizr/js/modernizr-*"));


			bundles.Add(new ScriptBundle("~/resources/ajouts") { Orderer = new NonOrderingBundleOrderer() }.Include(
			"~/resources/html5shiv/js/html5shiv.js",
			"~/resources/respond/js/respond.min.js",
			"~/resources/datatables/jquery_ui11.js",
			"~/resources/datatables/datatables.js",
			"~/resources/jquery/js/modal.js",
			"~/resources/toastr/js/toastr.js",
			"~/Scripts/Commons.js",
			"~/Scripts/Login.js",
			"~/resources/fancybox/js/jquery_migrate.js",
			"~/resources/fancybox/js/fancybox.js"));


			bundles.Add(new ScriptBundle("~/Scripts/placeholders").Include("~/resources/extPlugins/js/bootstrap-placeholders.js"));

		}

		public static void RegisterBundles(BundleCollection bundles)
		{

			bundles.IgnoreList.Clear();
			AddDefaultIgnorePatterns(bundles.IgnoreList);
			AddDefaultFileOrderings(bundles.FileSetOrderList);
			AddDefaultFileExtensionReplacements(bundles.FileExtensionReplacementList);

			// BundleTable.EnableOptimizations = false;
			AddJsBundles(bundles);
			AddCssBundles(bundles);

		}

	}

}
