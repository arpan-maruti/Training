using EFProject.Models.Requests;
using EFProject.Services;
using Microsoft.AspNetCore.Mvc;

namespace EFProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductController(ProductService productService)
    {
        _productService = productService;
    }

    [HttpPost]
    public IActionResult CreateProduct(ProductCreateRequest request)
    {
        var product = _productService.AddProduct(request.Name, request.Price);
        return CreatedAtAction(nameof(GetProduct), new { id = product.ProductId }, product);
    }

    [HttpGet]
    public IActionResult GetAllProducts()
    {
        var products = _productService.GetProducts();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public IActionResult GetProduct(int id)
    {
        var product = _productService.GetProduct(id);
        return product != null ? Ok(product) : NotFound();
    }

    [HttpPut("{id}")]
    public IActionResult UpdateProduct(int id, ProductUpdateRequest request)
    {
        var updated = _productService.UpdateProduct(id, request.Name, request.Price);
        return updated ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteProduct(int id)
    {
        var deleted = _productService.DeleteProduct(id);
        return deleted ? NoContent() : NotFound();
    }
}