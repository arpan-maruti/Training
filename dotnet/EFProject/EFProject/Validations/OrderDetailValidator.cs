using FluentValidation;
using EFProject.Models;

namespace EFProject.Validators;

public class OrderDetailValidator : AbstractValidator<OrderDetail>
{
    public OrderDetailValidator()
    {
        RuleFor(od => od.Quantity)
            .GreaterThan(0).WithMessage("Quantity must be at least 1")
            .LessThanOrEqualTo(1000).WithMessage("Quantity cannot exceed 1000");

        RuleFor(od => od.ProductId)
            .GreaterThan(0).WithMessage("Product ID must be valid");

        RuleFor(od => od.OrderId)
            .GreaterThan(0).WithMessage("Order ID must be valid");
    }
}