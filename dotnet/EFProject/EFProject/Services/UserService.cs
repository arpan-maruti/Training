using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using EFProject.Data;
using EFProject.Models;

namespace EFProject.Services
{
    public class UserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public User AddUser(string name, string email)
        {
            var user = new User { Name = name, Email = email };
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public List<User> GetUsers()
        {
            return _context.Users.ToList();
        }

        public User? GetUser(int id)
        {
            return _context.Users.Find(id);
        }

        public bool UpdateUser(int id, string newName, string newEmail)
        {
            var user = _context.Users.Find(id);
            if (user == null) return false;

            user.Name = newName;
            user.Email = newEmail;
            _context.SaveChanges();
            return true;
        }

        public bool DeleteUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null) return false;

            _context.Users.Remove(user);
            _context.SaveChanges();
            return true;
        }
    }
}