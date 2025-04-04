using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using EFProject.Data;
using EFProject.Models;

namespace EFProject.Services
{
    public class OrderService
    {
        private readonly ApplicationDbContext _context;

        public OrderService(ApplicationDbContext context)
        {
            _context = context;
        }

        public Order AddOrder(DateTime orderPlaced, DateTime? orderFulfilled, int customerId)
        {
            var order = new Order 
            { 
                OrderPlaced = orderPlaced, 
                OrderFulfilled = orderFulfilled, 
                CustomerId = customerId 
            };
            _context.Orders.Add(order);
            _context.SaveChanges();
            return order;
        }

        public List<Order> GetOrders()
        {
            return _context.Orders.Include(o => o.Customer).ToList();
        }

        public Order? GetOrder(int id)
        {
            return _context.Orders
                .Include(o => o.Customer)
                .FirstOrDefault(o => o.OrderId == id);
        }

        public bool UpdateOrder(int id, DateTime orderPlaced, DateTime? orderFulfilled, int customerId)
        {
            var order = _context.Orders.Find(id);
            if (order == null) return false;

            order.OrderPlaced = orderPlaced;
            order.OrderFulfilled = orderFulfilled;
            order.CustomerId = customerId;
            _context.SaveChanges();
            return true;
        }

        public bool DeleteOrder(int id)
        {
            var order = _context.Orders.Find(id);
            if (order == null) return false;

            _context.Orders.Remove(order);
            _context.SaveChanges();
            return true;
        }

        public List<OrderDetail> GetOrderDetails(int orderId)
        {
            return _context.OrderDetails
                .Include(od => od.Product)
                .Where(od => od.OrderId == orderId)
                .ToList();
        }
    }
}