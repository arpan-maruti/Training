using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using EFProject.Data;
using EFProject.Models;

namespace EFProject.Services
{
    public class CustomerService
    {
        private readonly ApplicationDbContext _context;

        public CustomerService(ApplicationDbContext context)
        {
            _context = context;
        }

        public Customer AddCustomer(string firstName, string lastName, string? address, string? phone, string? email)
        {
            var customer = new Customer 
            { 
                FirstName = firstName, 
                LastName = lastName, 
                Address = address, 
                Phone = phone, 
                Email = email 
            };
            _context.Customers.Add(customer);
            _context.SaveChanges();
            return customer;
        }

        public List<Customer> GetCustomers()
        {
            return _context.Customers.ToList();
        }

        public Customer? GetCustomer(int id)
        {
            return _context.Customers.Find(id);
        }

        public bool UpdateCustomer(int id, string firstName, string lastName, string? address, string? phone, string? email)
        {
            var customer = _context.Customers.Find(id);
            if (customer == null) return false;

            customer.FirstName = firstName;
            customer.LastName = lastName;
            customer.Address = address;
            customer.Phone = phone;
            customer.Email = email;
            _context.SaveChanges();
            return true;
        }

        public bool DeleteCustomer(int id)
        {
            var customer = _context.Customers.Find(id);
            if (customer == null) return false;

            _context.Customers.Remove(customer);
            _context.SaveChanges();
            return true;
        }

        public List<Order> GetCustomerOrders(int customerId)
        {
            return _context.Orders
                .Where(o => o.CustomerId == customerId)
                .ToList();
        }
    }
}