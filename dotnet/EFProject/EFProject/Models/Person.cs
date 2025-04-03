using System.ComponentModel.DataAnnotations.Schema;

namespace EFProject.Models;

public class Person
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; } = null!;
        [Column(TypeName = "decimal(6,2)")]
        public decimal price { get; set; }

    }
}