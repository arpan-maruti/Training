using EFProject.Models.Requests;
using EFProject.Services;
using Microsoft.AspNetCore.Mvc;

namespace EFProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrderDetailController : ControllerBase
{
    private readonly OrderDetailService _orderDetailService;

    public OrderDetailController(OrderDetailService orderDetailService)
    {
        _orderDetailService = orderDetailService;
    }

    [HttpPost]
    public IActionResult CreateOrderDetail(OrderDetailCreateRequest request)
    {
        var orderDetail = _orderDetailService.AddOrderDetail(
            request.Quantity,
            request.ProductId,
            request.OrderId);
        return CreatedAtAction(nameof(GetOrderDetail), new { id = orderDetail.OrderDetailId }, orderDetail);
    }

    [HttpGet]
    public IActionResult GetAllOrderDetails()
    {
        var orderDetails = _orderDetailService.GetOrderDetails();
        return Ok(orderDetails);
    }

    [HttpGet("{id}")]
    public IActionResult GetOrderDetail(int id)
    {
        var orderDetail = _orderDetailService.GetOrderDetail(id);
        return orderDetail != null ? Ok(orderDetail) : NotFound();
    }

    [HttpPut("{id}")]
    public IActionResult UpdateOrderDetail(int id, OrderDetailUpdateRequest request)
    {
        var updated = _orderDetailService.UpdateOrderDetail(
            id,
            request.Quantity,
            request.ProductId,
            request.OrderId);
        return updated ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteOrderDetail(int id)
    {
        var deleted = _orderDetailService.DeleteOrderDetail(id);
        return deleted ? NoContent() : NotFound();
    }
}