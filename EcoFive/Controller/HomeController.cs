using EcoFive.Models.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EcoFive.UI.Controller
{
    public class HomeController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly IHostingEnvironment _Environment;
        public HomeController(IHostingEnvironment environment)
        {
            _Environment = environment;
        }

        public IActionResult Index()
        {
            string[] filePaths = Directory.GetFiles(Path.Combine(this._Environment.WebRootPath, "EcoFiveLogs/"));

            List<FileViewModel> files = new List<FileViewModel>();
            foreach (string filePath in filePaths)
            {
                files.Add(new FileViewModel
                {
                    FileName = Path.GetFileName(filePath),
                    lastModified = System.IO.File.GetLastWriteTime(filePath),
                    FileCreateDate = System.IO.File.GetCreationTime(filePath)
                });
            }
            return View(files);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index(List<IFormFile> files)
        {
            var size = files.Sum(f => f.Length);

            var filePaths = new List<string>();
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    var filePath = Path.Combine(this._Environment.WebRootPath + "/EcoFiveLogs", Guid.NewGuid() + formFile.FileName);

                    filePaths.Add(filePath);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                }
            }

            return RedirectToAction("Index");
        }

        public FileResult DownloadFile(string fileName)
        {
            string path = Path.Combine(this._Environment.WebRootPath, "EcoFiveLogs/") + fileName;

            byte[] bytes = System.IO.File.ReadAllBytes(path);

            return File(bytes, "application/octet-stream", fileName);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteFile(string fileName, string confirmValue)
        {
            if (confirmValue == "true")
            {
                string path = Path.Combine(this._Environment.WebRootPath, "EcoFiveLogs/") + fileName;

                if (System.IO.File.Exists(path))
                {
                    System.IO.File.Delete(path);
                }
                return RedirectToAction("Index");
            }
            else
            {
                return RedirectToAction("Index");
            }

        }

    }
}
