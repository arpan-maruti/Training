using System.ComponentModel.DataAnnotations.Schema;

namespace EFProject.Models;
public class Customer
{
        public int CustomerId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? Address { get; set; } = null!;
        public string? Phone { get; set; } = null!;
        public ICollection<Order> Orders { get; set; } = null!;
}
