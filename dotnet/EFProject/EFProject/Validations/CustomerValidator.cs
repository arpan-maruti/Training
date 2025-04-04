using FluentValidation;
using EFProject.Models;

namespace EFProject.Validators;

public class CustomerValidator : AbstractValidator<Customer>
{
    public CustomerValidator()
    {
        RuleFor(c => c.FirstName)
            .NotEmpty().WithMessage("First name is required")
            .Length(2, 50).WithMessage("First name must be between 2 and 50 characters");

        RuleFor(c => c.LastName)
            .NotEmpty().WithMessage("Last name is required")
            .Length(2, 50).WithMessage("Last name must be between 2 and 50 characters");

        RuleFor(c => c.Email)
            .EmailAddress().WithMessage("Invalid email format")
            .When(c => !string.IsNullOrEmpty(c.Email));

        RuleFor(c => c.Phone)
            .Matches(@"^[0-9\-\+\(\)\s]+$").WithMessage("Invalid phone number format")
            .When(c => !string.IsNullOrEmpty(c.Phone));
    }
}