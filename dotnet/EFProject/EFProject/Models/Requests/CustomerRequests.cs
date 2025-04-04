namespace EFProject.Models.Requests;

public record CustomerCreateRequest(
    string FirstName, 
    string LastName, 
    string? Address, 
    string? Phone, 
    string? Email);

public record CustomerUpdateRequest(
    string FirstName, 
    string LastName, 
    string? Address, 
    string? Phone, 
    string? Email);