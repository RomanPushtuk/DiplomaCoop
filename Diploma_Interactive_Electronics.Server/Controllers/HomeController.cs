using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Diploma_Interactive_Electronics.Server.Models;

namespace Diploma_Interactive_Electronics.Server.Controllers
{


public class HomeController : Controller
    {
       
        [HttpGet]
        public IActionResult Index()
        {
            User[] mas = new User[3];
            for (int i = 0; i<3; i++)
            {
                mas[i]= new User { Id = 1, Name = "Tom", Age = 28 };
            }
            return Json(mas);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
