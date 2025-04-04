using EFProject.Models;
using Microsoft.EntityFrameworkCore;

namespace EFProject.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderDetail> OrderDetails { get; set; }
    public DbSet<Product> Products { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure relationships

        // Customer -> Order (one-to-many)
        modelBuilder.Entity<Customer>()
            .HasMany(c => c.Orders)
            .WithOne(o => o.Customer)
            .HasForeignKey(o => o.CustomerId)
            .OnDelete(DeleteBehavior.Cascade); 

        // Order -> OrderDetail (one-to-many)
        modelBuilder.Entity<Order>()
            .HasMany(o => o.OrderDetails)
            .WithOne(od => od.Order)
            .HasForeignKey(od => od.OrderId)
            .OnDelete(DeleteBehavior.Cascade);

        // Product -> OrderDetail (one-to-many)
        modelBuilder.Entity<Product>()
            .HasMany(p => p.OrderDetails)
            .WithOne(od => od.Product)
            .HasForeignKey(od => od.ProductId)
            .OnDelete(DeleteBehavior.Restrict); 

        // Configure composite primary key for OrderDetail
        modelBuilder.Entity<OrderDetail>()
            .HasKey(od => od.OrderDetailId);
        
        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasColumnType("decimal(6,2)");
    }
}