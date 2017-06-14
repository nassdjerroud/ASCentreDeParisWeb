using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using log4net;

namespace Commons
{
	public static class Logger
	{

		public static void genererErreur(System.Type type,string Message)
		{
			log4net.ILog logger = log4net.LogManager.GetLogger(type);
			logger.Error(Message);
		}

		public static ILog Monitoring
		{
			get
			{

				return LogManager.GetLogger("MonitoringLogger");
			}
		}
		public static ILog Generation
		{
			get
			{
				return LogManager.GetLogger("GenerationLogger");
			}
		}
	}
}
