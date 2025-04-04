using System.ComponentModel.DataAnnotations.Schema;

namespace EFProject.Models;

public class Product
{
  
        public int ProductId { get; set; }
        public string Name { get; set; } = null!;
    
        [Column(TypeName = "decimal(6,2)")]
        public decimal Price { get; set; }
    
        // Navigation property for OrderDetails (many-to-many via OrderDetail)
        public ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    
}