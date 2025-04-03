using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Rewrite;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<ITaskService>(new InMemoryTaskService());
var app = builder.Build();
app.UseRewriter(new RewriteOptions().AddRedirect("^tasks/(.*)$", "todos", 301));
app.Use(async (context, next) =>
{
    Console.WriteLine($"Incoming request: [{context.Request.Method} {context.Request.Path}]");
    
    await next(); // Corrected line

    Console.WriteLine($"Outgoing response: [{context.Response.StatusCode}]");
});

var todos = new List<Todo>();

// GET all todos
app.MapGet("/todos", (ITaskService service) => Results.Ok(service.GetAllTodos()));

// GET a todo by ID
app.MapGet("/todos/{id}", (int id, ITaskService service ) =>
{
    return Results.Ok(service.GetTodoById(id));
});

app.MapPost("/todos", async (HttpContext context, ITaskService service) =>
    {
        // Get the already validated input from the filter
        if (!context.Items.TryGetValue("validatedTodoInput", out var input) || input is not TodoInput todoInput)
        {
            return Results.BadRequest("Invalid request body");
        }

        // Auto-assign new ID
        int newId = todos.Count > 0 ? todos.Max(t => t.Id) + 1 : 1;
        var newTodo = new Todo(newId, todoInput.Name, todoInput.DueDate, todoInput.IsCompleted);
        service.AddTodo(newTodo);

        return Results.Created($"/todos/{newId}", newTodo);
    })
    .AddEndpointFilter(async (context, next) =>
    {
        try
        {
            var todoInput = await context.HttpContext.Request.ReadFromJsonAsync<TodoInput>();
            
            if (todoInput == null)
            {
                Console.WriteLine("Filter: Request body is NULL or invalid");
                return Results.BadRequest("Invalid request payload");
            }

            var errors = new Dictionary<string, string[]>();

            if (todoInput.DueDate < DateTime.UtcNow)
            {
                errors.Add(nameof(TodoInput.DueDate), new[] { "Due date cannot be in the past." });
            }

            if (todoInput.IsCompleted)
            {
                errors.Add(nameof(TodoInput.IsCompleted), new[] { "Cannot mark a new task as completed." });
            }

            if (errors.Count > 0)
            {
                return Results.ValidationProblem(errors);
            }

            // Store the validated input for the endpoint to use
            context.HttpContext.Items["validatedTodoInput"] = todoInput;
            
            return await next(context);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception in filter: {ex.Message}");
            return Results.Problem("Internal server error in endpoint filter.");
        }
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
app.MapDelete("/todos/{id}", (int id, ITaskService service) =>
{
    var todo = todos.SingleOrDefault(t => t.Id == id);
    if (todo is null) return Results.NotFound($"Todo with ID {id} not found");

   service.DeleteTodo(id);
    return Results.Ok($"Todo with ID {id} deleted successfully");
});

app.Run();






// Record for Todo
public record Todo(int Id, string Name, DateTime DueDate, bool IsCompleted);

// Record for Todo Input (without ID)
public record TodoInput(string Name, DateTime DueDate, bool IsCompleted);


public interface ITaskService
{
    Todo? GetTodoById(int id);
    IEnumerable<Todo> GetAllTodos();
    Todo? AddTodo(Todo todo);
    void DeleteTodo(int id);
}

public class InMemoryTaskService : ITaskService
{
    private readonly List<Todo> _todos = [];

    public Todo? GetTodoById(int id)
    {
        return _todos.SingleOrDefault(t => t.Id == id);
    }

    public IEnumerable<Todo> GetAllTodos()
    {
        return _todos;
    }

    public Todo AddTodo(Todo todo)
    {
        _todos.Add(todo);
        return todo;
    }

    public void DeleteTodo(int id)
    {
        var todo = GetTodoById(id);
        if (todo != null)
        {
            _todos.Remove(todo);
        }
    }
}
