using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq.Expressions;
using System.Net;
using System.Reflection;
using System.Text;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using System.Web.Mvc.Html;
using System.Xml.Linq;

namespace ASCentreParis.Helpers
{
    public class HtmlHelper
    {
        /// <summary>
        /// Helper permettant d'afficher un texte sauvegardé en base avec des retours à la ligne
        /// </summary>
        /// <param name="id"></param>
        /// <param name="text"></param>
        /// <param name="class"></param>
        /// <returns></returns>
        public static MvcHtmlString HTMLRaw(string id, string text = "", string @class = null, bool? caractereGras=null)
        {
            StringBuilder sb = new StringBuilder();
            if (caractereGras == null || !caractereGras.Value)
            {
                sb.Append("<label style='font-weight : normal;' ");
            }
            else
            {
                sb.Append("<label style='font-weight :bold;' ");
            }
            if (!string.IsNullOrWhiteSpace(id))
            {
                sb.Append(" id=\"").Append(id).Append("\"");
            }


            if (@class != null)
            {
                sb.AppendFormat(" class=\"", @class).Append("\"");
            }
            sb.Append(">");
            if (text != null)
                sb.Append(Commons.Utils.UrlReformate(text).Replace("\r\n", "</br>").Replace("\n", "</br>").Replace("\r", "</br>"));
           

            sb.Append("</label>");

            return new MvcHtmlString(sb.ToString());
        }

    }
}