using System;
using System.Collections.Generic;
using System.Text;

namespace Diploma_Interactive_Electronics.Services.Contracts.Models
{
    public class AddUserModel
    {
        public int Login { get; set; }
        public string Password { get; set; }
        public string Register_Date_Time { get; set; }
    }
}
