using EFProject.Models.Requests;
using EFProject.Services;
using Microsoft.AspNetCore.Mvc;

namespace EFProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase
{
    private readonly OrderService _orderService;

    public OrderController(OrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpPost]
    public IActionResult CreateOrder(OrderCreateRequest request)
    {
        var order = _orderService.AddOrder(
            request.OrderPlaced,
            request.OrderFulfilled,
            request.CustomerId);
        return CreatedAtAction(nameof(GetOrder), new { id = order.OrderId }, order);
    }

    [HttpGet]
    public IActionResult GetAllOrders()
    {
        var orders = _orderService.GetOrders();
        return Ok(orders);
    }

    [HttpGet("{id}")]
    public IActionResult GetOrder(int id)
    {
        var order = _orderService.GetOrder(id);
        return order != null ? Ok(order) : NotFound();
    }

    [HttpPut("{id}")]
    public IActionResult UpdateOrder(int id, OrderUpdateRequest request)
    {
        var updated = _orderService.UpdateOrder(
            id,
            request.OrderPlaced,
            request.OrderFulfilled,
            request.CustomerId);
        return updated ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteOrder(int id)
    {
        var deleted = _orderService.DeleteOrder(id);
        return deleted ? NoContent() : NotFound();
    }

    [HttpGet("{id}/details")]
    public IActionResult GetOrderDetails(int id)
    {
        var details = _orderService.GetOrderDetails(id);
        return Ok(details);
    }
}