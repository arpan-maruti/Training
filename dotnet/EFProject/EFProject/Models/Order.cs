namespace EFProject.Models;

public class Order
{
    public int OrderId { get; set; }
    public DateTime OrderPlaced { get; set; }
    public DateTime? OrderFulfilled { get; set; }
    
    // Foreign key
    public int CustomerId { get; set; }
    
    // Navigation properties
    public Customer Customer { get; set; } = null!;
    public ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();
}