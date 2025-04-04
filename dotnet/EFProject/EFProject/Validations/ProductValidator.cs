using FluentValidation;
using EFProject.Models;

namespace EFProject.Validators;

public class ProductValidator : AbstractValidator<Product>
{
    public ProductValidator()
    {
        RuleFor(p => p.Name)
            .NotEmpty().WithMessage("Product name is required")
            .Length(2, 100).WithMessage("Product name must be between 2 and 100 characters");

        RuleFor(p => p.Price)
            .GreaterThan(0).WithMessage("Price must be greater than 0")
            .ScalePrecision(2, 6).WithMessage("Price cannot have more than 2 decimal places");
    }
}