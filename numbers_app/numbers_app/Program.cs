using System;

// nameSpace
namespace numbers_app
{
    // main class
    class Program
    {
        // entry point method
        static void Main(string[] args)
        {
            // set app vars
            string appName = "Number guess";
            string appVersion = "1.0.2";
            string appAuthor = "sido zoldik";

            // cahange text color //
            Console.ForegroundColor = ConsoleColor.Yellow;
            
            Console.WriteLine("{0}: vesrsion {1} by {2}", appName, appVersion, appAuthor);

            // write out app info 
            Console.ResetColor();

            // Ask users name
            Console.WriteLine("what is your name");

            // get user name
            string input = Console.ReadLine();

            Console.WriteLine("Hello {0}, lets play a game...", input);

            // init correct number 
            int correctNumber = 7;

            // init guess var
            int guess = 0;

            Console.WriteLine("guess a number between 0 and 10");

            while (guess != correctNumber) 
            {
                // get user input 
                string userInput = Console.ReadLine();

                // cast int and put in guess
                guess = Int32.Parse(userInput);

                // match guess to correct number
                if(guess != correctNumber)
                {
                    // change text color
                    Console.ForegroundColor = ConsoleColor.Red;

                    // tell user it's the wrong number
                    Console.WriteLine("wrong number, please try again");

                    // reset color
                    Console.ResetColor();
                }
            }

            // change text color
            Console.ForegroundColor = ConsoleColor.Green;

            // tell you user you are correct
            Console.WriteLine("CORRECT {0}: is the right number", correctNumber);

            // reset text color
            Console.ResetColor();

        }
    }
}
