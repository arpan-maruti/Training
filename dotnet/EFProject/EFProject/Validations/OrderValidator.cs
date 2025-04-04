using FluentValidation;
using EFProject.Models;

namespace EFProject.Validators;

public class OrderValidator : AbstractValidator<Order>
{
    public OrderValidator()
    {
        RuleFor(o => o.OrderPlaced)
            .NotEmpty().WithMessage("Order date is required")
            .LessThanOrEqualTo(DateTime.Now).WithMessage("Order date cannot be in the future");

        RuleFor(o => o.OrderFulfilled)
            .GreaterThanOrEqualTo(o => o.OrderPlaced)
            .When(o => o.OrderFulfilled.HasValue)
            .WithMessage("Fulfillment date must be after order date");

        RuleFor(o => o.CustomerId)
            .GreaterThan(0).WithMessage("Customer ID must be valid");
    }
}