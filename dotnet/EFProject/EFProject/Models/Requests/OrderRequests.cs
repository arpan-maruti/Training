namespace EFProject.Models.Requests;

public record OrderCreateRequest(
    DateTime OrderPlaced,
    DateTime? OrderFulfilled,
    int CustomerId);

public record OrderUpdateRequest(
    DateTime OrderPlaced,
    DateTime? OrderFulfilled,
    int CustomerId);