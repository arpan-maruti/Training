// See https://aka.ms/new-console-template for more information

Console.WriteLine("Hello, World!");
string name= "      Arpan       ";
name = name.Trim();
//name = name.TrimStart();
//name = name.TrimEnd();
string line= $"my name is {name}";
Console.WriteLine(line.ToUpper());
Console.WriteLine(line.Contains("name"));
Console.WriteLine(line.Replace("Arpan", "arpan-changed"));
Console.WriteLine(line.Length);
Console.WriteLine(line.StartsWith("M"));

int a=2100000000;
int b=2100000000;
long d=(long)a+(long)b;
Console.WriteLine(d);

float f=3.14f;
double db=3.14;
Console.WriteLine(f+db);

decimal fd=3.14M;
decimal dd=3.14M;
Console.WriteLine(fd+dd);

int counter=0;
while (counter < 5)
{
    counter++;
    Console.WriteLine(counter);
}

var names = new List<string> { "A", "B", "C" };
names.Add("D");

Console.WriteLine("For loop");
for(int i = 0; i < names.Count; i++)
{
    Console.WriteLine(names[i]);
}


names.Add("E");
names.Add("F");

Console.WriteLine("ForEach loop");
foreach (var n in names[2..4])
{
    Console.WriteLine(n);
}
Console.WriteLine();
Console.WriteLine(names[0]);
Console.WriteLine(names[^2]);

Console.WriteLine();
var numbers = new List<int> {2,10,1,89,12,33};
numbers.Sort();
foreach (var x in numbers)
{
    Console.WriteLine(x);
}
Console.WriteLine();
Console.WriteLine(numbers.IndexOf(10));

Console.WriteLine();
IEnumerable<int> searchQuery =
    from x in numbers
    where x > 11
    orderby x descending 
    select x;

foreach (var x in searchQuery)
{
    Console.WriteLine(x);
}    
Console.WriteLine(searchQuery.Count());


Console.WriteLine();
var searchQuery2 = numbers.Where(x=> x>11).OrderByDescending(x=>x);

foreach (var x in searchQuery2)
{
    Console.WriteLine(x);
}  

var p1 = new Person("A", "B", new DateOnly(2004,1,1));
var p2 = new Person("C", "D", new DateOnly(2004,1,1));

var persons = new List<Person> { p1, p2 };
Console.WriteLine($"count {persons.Count}");
public class Person
{
    private string firstName;
    private string lastName;
    private DateOnly date;

    public Person(string first, string last, DateOnly dt)
    {
        firstName= first;
        lastName= last;
        date =dt;
    }
}


