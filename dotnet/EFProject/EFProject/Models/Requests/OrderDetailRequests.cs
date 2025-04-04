namespace EFProject.Models.Requests;

public record OrderDetailCreateRequest(
    int Quantity,
    int ProductId,
    int OrderId);

public record OrderDetailUpdateRequest(
    int Quantity,
    int ProductId,
    int OrderId);