using System;
using System.Collections.Generic;
using System.Text;

namespace Diploma_Interactive_Electronics.Database
{
    public class User
    {
        public int Id { get; set; }
        public int Login { get; set; }
        public string Password { get; set; }
        public string Register_Date_Time { get; set; }
    }
}
