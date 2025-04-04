using System.ComponentModel.DataAnnotations.Schema;

namespace EFProject.Models;
public class Customer
{
        public int CustomerId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? Address { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
    
        // Navigation property for Orders (one-to-many)
        public ICollection<Order> Orders { get; set; } = new List<Order>();
}
