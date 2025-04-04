using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using EFProject.Data;
using EFProject.Models;

namespace EFProject.Services
{
    public class OrderDetailService
    {
        private readonly ApplicationDbContext _context;

        public OrderDetailService(ApplicationDbContext context)
        {
            _context = context;
        }

        public OrderDetail AddOrderDetail(int quantity, int productId, int orderId)
        {
            var orderDetail = new OrderDetail 
            { 
                Quantity = quantity, 
                ProductId = productId, 
                OrderId = orderId 
            };
            _context.OrderDetails.Add(orderDetail);
            _context.SaveChanges();
            return orderDetail;
        }

        public List<OrderDetail> GetOrderDetails()
        {
            return _context.OrderDetails
                .Include(od => od.Product)
                .Include(od => od.Order)
                .ToList();
        }

        public OrderDetail? GetOrderDetail(int id)
        {
            return _context.OrderDetails
                .Include(od => od.Product)
                .Include(od => od.Order)
                .FirstOrDefault(od => od.OrderDetailId == id);
        }

        public bool UpdateOrderDetail(int id, int quantity, int productId, int orderId)
        {
            var orderDetail = _context.OrderDetails.Find(id);
            if (orderDetail == null) return false;

            orderDetail.Quantity = quantity;
            orderDetail.ProductId = productId;
            orderDetail.OrderId = orderId;
            _context.SaveChanges();
            return true;
        }

        public bool DeleteOrderDetail(int id)
        {
            var orderDetail = _context.OrderDetails.Find(id);
            if (orderDetail == null) return false;

            _context.OrderDetails.Remove(orderDetail);
            _context.SaveChanges();
            return true;
        }
    }
}