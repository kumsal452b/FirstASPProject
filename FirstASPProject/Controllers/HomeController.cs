﻿using System.Web.Mvc;

namespace FirstASPProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
            //ses aramasi baslatir misin
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }
    }
}