using EFProject.Data;
using EFProject.Models;
using EFProject.Models.Requests;
using EFProject.Services;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using EFProject.Validators;
using FluentValidation;

var builder = WebApplication.CreateBuilder(args);

// Add MySQL DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options => 
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    ));

// Register services
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<CustomerService>();
builder.Services.AddScoped<OrderService>();
builder.Services.AddScoped<OrderDetailService>();
builder.Services.AddScoped<ProductService>();
// Add controllers
builder.Services.AddControllers()
    .AddFluentValidation(fv => 
    {
        fv.RegisterValidatorsFromAssemblyContaining<CustomerValidator>();
        fv.ImplicitlyValidateChildProperties = true;
    });

// Register validators explicitly (alternative to assembly scanning)
builder.Services.AddScoped<IValidator<Customer>, CustomerValidator>();
builder.Services.AddScoped<IValidator<Product>, ProductValidator>();
builder.Services.AddScoped<IValidator<Order>, OrderValidator>();
builder.Services.AddScoped<IValidator<OrderDetail>, OrderDetailValidator>();
builder.Services.AddScoped<IValidator<CustomerCreateRequest>, CustomerCreateRequestValidator>();


// Add Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "EFProject API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => 
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "EFProject API V1");
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();