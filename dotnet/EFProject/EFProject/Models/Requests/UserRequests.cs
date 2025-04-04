namespace EFProject.Models.Requests;

public record UserCreateRequest(string Name, string Email);
public record UserUpdateRequest(string Name, string Email);