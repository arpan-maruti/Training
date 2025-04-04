using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using EFProject.Data;
using EFProject.Models;

namespace EFProject.Services
{
    public class ProductService
    {
        private readonly ApplicationDbContext _context;

        public ProductService(ApplicationDbContext context)
        {
            _context = context;
        }

        public Product AddProduct(string name, decimal price)
        {
            var product = new Product 
            { 
                Name = name, 
                Price = price 
            };
            _context.Products.Add(product);
            _context.SaveChanges();
            return product;
        }

        public List<Product> GetProducts()
        {
            return _context.Products.ToList();
        }

        public Product? GetProduct(int id)
        {
            return _context.Products.Find(id);
        }

        public bool UpdateProduct(int id, string name, decimal price)
        {
            var product = _context.Products.Find(id);
            if (product == null) return false;

            product.Name = name;
            product.Price = price;
            _context.SaveChanges();
            return true;
        }

        public bool DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null) return false;

            _context.Products.Remove(product);
            _context.SaveChanges();
            return true;
        }
    }
}