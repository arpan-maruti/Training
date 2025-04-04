using EFProject.Models.Requests;
using EFProject.Services;
using Microsoft.AspNetCore.Mvc;

namespace EFProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly UserService _userService;

    public UsersController(UserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    public IActionResult CreateUser(UserCreateRequest request)
    {
        var user = _userService.AddUser(request.Name, request.Email);
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }

    [HttpGet]
    public IActionResult GetAllUsers()
    {
        var users = _userService.GetUsers();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public IActionResult GetUser(int id)
    {
        var user = _userService.GetUser(id);
        return user != null ? Ok(user) : NotFound();
    }

    [HttpPut("{id}")]
    public IActionResult UpdateUser(int id, UserUpdateRequest request)
    {
        var updated = _userService.UpdateUser(id, request.Name, request.Email);
        return updated ? NoContent() : NotFound();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteUser(int id)
    {
        var deleted = _userService.DeleteUser(id);
        return deleted ? NoContent() : NotFound();
    }
}