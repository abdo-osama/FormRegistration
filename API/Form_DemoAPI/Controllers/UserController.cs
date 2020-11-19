using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Form_DemoAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Form_DemoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly Form_DBContext form_DBContext;

        public UserController(Form_DBContext form_DBContext)
        {
            this.form_DBContext = form_DBContext;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(form_DBContext.User.ToList());
        }

     
        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            if (!(ModelState.IsValid) || user.FName == "" || user.MName == "" || user.LName == "" || user.Birth_Date == "" || user.Mobile == ""
                || user.Email == "" || user.Governate == "" || user.City == "" || user.Street == "" || user.Flat_Number == 0 || user.Building_Num == 0)
                return BadRequest(" Please Enter Your Data ");

            var users = form_DBContext.User.SingleOrDefault( u => u.ID==user.ID );
            if (users != null)
                return BadRequest(" The User is already Exist ");

            if (!(Regex.IsMatch(user.Email, ".{2,28}@[a-zA-Z0-9]{2,15}[.]com")))
                return BadRequest("Please enter a valid email");

            if (!(Regex.IsMatch(user.Mobile, "[+]201[0-9]{9}")))
                return BadRequest("Please enter a valid email");

            form_DBContext.User.Add(user);
            form_DBContext.SaveChanges();
            return Ok(user);
        }
    }
}
