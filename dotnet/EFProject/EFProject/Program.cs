using EFProject.Data;
using EFProject.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);


// Add MySQL DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options => 
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    ));

builder.Services.AddScoped<UserService>();

// Add Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "User API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => 
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "User API V1");
    });
}

app.UseHttpsRedirection();

// Define API Endpoints
app.MapPost("/users", (UserService userService, UserCreateRequest request) =>
{
    var user = userService.AddUser(request.Name, request.Email);
    return Results.Created($"/users/{user.Id}", user);
})
.WithName("CreateUser")
.WithOpenApi();

app.MapGet("/users", (UserService userService) =>
{
    var users = userService.GetUsers();
    return Results.Ok(users);
})
.WithName("GetAllUsers")
.WithOpenApi();

app.MapGet("/users/{id}", (UserService userService, int id) =>
{
    var user = userService.GetUser(id);
    return user != null ? Results.Ok(user) : Results.NotFound();
})
.WithName("GetUserById")
.WithOpenApi();

app.MapPut("/users/{id}", (UserService userService, int id, UserUpdateRequest request) =>
{
    var updated = userService.UpdateUser(id, request.Name, request.Email);
    return updated ? Results.Ok() : Results.NotFound();
})
.WithName("UpdateUser")
.WithOpenApi();

app.MapDelete("/users/{id}", (UserService userService, int id) =>
{
    var deleted = userService.DeleteUser(id);
    return deleted ? Results.NoContent() : Results.NotFound();
})
.WithName("DeleteUser")
.WithOpenApi();

app.Run();

// Request/Response models
public record UserCreateRequest(string Name, string Email);
public record UserUpdateRequest(string Name, string Email);