using Microsoft.AspNetCore.Http.HttpResults;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// In-memory todo list
var todos = new List<Todo>();

// GET all todos
app.MapGet("/todos", () => Results.Ok(todos));

// GET a todo by ID
app.MapGet("/todos/{id}", (int id) =>
{
    var targetTodo = todos.SingleOrDefault(t => t.Id == id);
    return targetTodo is null ? Results.NotFound($"Todo with ID {id} not found") : Results.Ok(targetTodo);
});

// POST a new todo (Auto-assign ID)
app.MapPost("/todos", (TodoInput input) =>
{
    Console.WriteLine(todos.Count);
    int newId = todos.Count > 0 ? todos.Max(t => t.Id) + 1 : 1;
    var newTodo = new Todo(newId, input.Name, input.DueDate, input.IsCompleted);
    todos.Add(newTodo);
    return Results.Created($"/todos/{newId}", newTodo);
});

// PUT (Update a todo by ID)
app.MapPut("/todos/{id}", (int id, TodoInput input) =>
{
    var index = todos.FindIndex(t => t.Id == id);
    if (index == -1) return Results.NotFound($"Todo with ID {id} not found");

    todos[index] = new Todo(id, input.Name, input.DueDate, input.IsCompleted);
    return Results.Ok(todos[index]);
});

// DELETE a todo by ID
app.MapDelete("/todos/{id}", (int id) =>
{
    var todo = todos.SingleOrDefault(t => t.Id == id);
    if (todo is null) return Results.NotFound($"Todo with ID {id} not found");

    todos.Remove(todo);
    return Results.Ok($"Todo with ID {id} deleted successfully");
});

app.Run();

// Record for Todo
public record Todo(int Id, string Name, DateTime DueDate, bool IsCompleted);

// Record for Todo Input (without ID)
public record TodoInput(string Name, DateTime DueDate, bool IsCompleted);