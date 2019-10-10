using System;
using System.Collections.Generic;
using System.Text;
using Diploma_Interactive_Electronics.Database;
using Diploma_Interactive_Electronics.Services.Contracts.Interfaces;
using Diploma_Interactive_Electronics.Services.Contracts.Models;
using System.Threading.Tasks;
using AutoMapper;

namespace Diploma_Interactive_Electronics.Services
{
    public class UserServices:IUserServices
    {
        public UserContext _appContext;
        private readonly IMapper _mapper;
        public UserServices(IMapper mapper, UserContext context)
        {
            _appContext = context;
            _mapper = mapper;
        }
        public async Task<Database.User> GetUser(int id)
        {
            Database.User userFind = await _appContext.Users.FindAsync(id);
            return userFind;
        }
        public async Task<string> AddUser(AddUserModel addUserModel)
        {
            if (addUserModel != null)
            {
                Database.User userAdd = _mapper.Map<Database.User>(addUserModel);
                await _appContext.Users.AddAsync(userAdd);
                return "Success";
            }
            else
            {
                return "Fail";
            }
        }
    }
}
