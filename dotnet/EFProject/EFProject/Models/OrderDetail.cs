namespace EFProject.Models;

public class OrderDetail
{
    public int OrderDetailId { get; set; } 
    public int Quantity { get; set; } 
    
    // Foreign keys
    public int ProductId { get; set; } 
    public int OrderId { get; set; }
    
    // Navigation properties
    public Product Product { get; set; } = null!;
    public Order Order { get; set; } = null!;
}