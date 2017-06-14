using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections.Generic;
using System.Web.Optimization;
using System.Web.Optimization.Extensions;

namespace ASCentreParis
{
	
    /// <summary>
    /// NonOrderingBundleOrderer class
    /// </summary>
    /// <seealso cref="IBundleOrderer" />
    public class NonOrderingBundleOrderer : IBundleOrderer
    {
        /// <summary>
        /// Orders the files.
        /// </summary>
        /// <param name="context">The context.</param>
        /// <param name="files">The files.</param>
        /// <returns>File enum</returns>
        public IEnumerable<BundleFile> OrderFiles(BundleContext context, IEnumerable<BundleFile> files)
        {
            return files;
        }
    }

}