namespace EFProject.Models.Requests;

public record ProductCreateRequest(
    string Name,
    decimal Price);

public record ProductUpdateRequest(
    string Name,
    decimal Price);