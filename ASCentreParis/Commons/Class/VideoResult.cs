using System.IO;
using System.Web.Hosting;
using System.Web.Mvc;
using System;
using System.Collections.Generic;
using System.Web;
using System.Globalization;
using Models;

namespace Commons
{
	public class VideoResult : ActionResult
	{
		public string CheminDocument { get; set; }

		public VideoResult(string _CheminDocument)
		{
			this.CheminDocument = _CheminDocument;
		}
		/// <summary> 
		/// The below method will respond with the Video file 
		/// </summary> 
		/// <param name="context"></param> 
		public override void ExecuteResult(ControllerContext context)
		{
            try
            {
                //The File Path 
                var videoFilePath = HostingEnvironment.MapPath(this.CheminDocument);
                //The header information 
                //context.HttpContext.Response.AddHeader("Content-Disposition", "attachment; filename=Win8.mp4");
                var file = new FileInfo(videoFilePath);
                //Check the file exist,  it will be written into the response 
                if (file.Exists)
                {
                    var stream = file.OpenRead();
                    var bytesinfile = new byte[stream.Length];
                    stream.Read(bytesinfile, 0, (int)file.Length);
                    context.HttpContext.Response.BinaryWrite(bytesinfile);
                }
            }
            catch(Exception e)
            {
                Commons.Logger.genererErreur(typeof(VideoResult), "Chemin Document =" + this.CheminDocument + " : " + e.ToString());
            }
		}
	}
}