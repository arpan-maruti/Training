using System;
using PasswordGenerator;
namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            var pwd = new Password();
            var password = pwd.Next();
            Console.WriteLine(password.ToString());
        }
    }
}