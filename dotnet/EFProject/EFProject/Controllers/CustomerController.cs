using EFProject.Models.Requests;
using EFProject.Services;
using Microsoft.AspNetCore.Mvc;

namespace EFProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CustomersController : ControllerBase
{
    private readonly CustomerService _customerService;

    public CustomersController(CustomerService customerService)
    {
        _customerService = customerService;
    }

    [HttpPost]
    public IActionResult CreateCustomer([FromBody] CustomerCreateRequest request)
    {
        Console.WriteLine("CustomerValidator initialized!");
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        Console.WriteLine("CustomerValidator initialized!   1   ");
        var customer = _customerService.AddCustomer(
            request.FirstName, 
            request.LastName, 
            request.Address, 
            request.Phone, 
            request.Email);
        return CreatedAtAction(nameof(GetCustomer), new { id = customer.CustomerId }, customer);
    }   

    [HttpGet]
    public IActionResult GetAllCustomers()
    {
        var customers = _customerService.GetCustomers();
        return Ok(customers);
    }

    [HttpGet("{id}")]
    public IActionResult GetCustomer(int id)
    {
        var customer = _customerService.GetCustomer(id);
        return customer != null ? Ok(customer) : NotFound();
    }

    [HttpPut("{id}")]
    public IActionResult UpdateCustomer(int id, CustomerUpdateRequest request)
    {
        var updated = _customerService.UpdateCustomer(
            id, 
            request.FirstName, 
            request.LastName, 
            request.Address, 
            request.Phone, 
            request.Email);
        return updated ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteCustomer(int id)
    {
        var deleted = _customerService.DeleteCustomer(id);
        return deleted ? NoContent() : NotFound();
    }

    [HttpGet("{id}/orders")]
    public IActionResult GetCustomerOrders(int id)
    {
        var orders = _customerService.GetCustomerOrders(id);
        return Ok(orders);
    }
}