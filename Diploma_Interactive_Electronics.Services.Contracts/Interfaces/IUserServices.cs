using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Diploma_Interactive_Electronics.Database;
using Diploma_Interactive_Electronics.Services.Contracts.Models;

namespace Diploma_Interactive_Electronics.Services.Contracts.Interfaces
{
    public interface IUserServices
    {
        Task<Database.User> GetUser(int id);
        Task<string> AddUser(AddUserModel addUserModel);
    }
}
