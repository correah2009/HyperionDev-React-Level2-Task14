To run this project, do the following:
1. Fork repo https://github.com/correah2009/HyperionDev-React-Level2-Task14
2. Navigate to this directory from the command line interface.

For Part 1:
3. Run the node server by typing
```
node helloWorld.js
```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

For Part 2:
5. Run the node server by typing
```
node test.js
```
6. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

For Part 3:
7. Run the node server by typing
```
node my_numbers.js
```
8. Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


## Task User Stories

Follow these steps:
Part 1
● Install Node.js and create a Node.js file called “HelloWorld.js”. This code should create a web server that returns a web page that says “Hey! I can use Node!”. Your web server should listen for HTTP requests on port 3000.
Part 2
● Create a module called ‘stringManip.js’ that can be used in other .js files and which will accept a string as an input, remove the whitespace from the beginning and end of the string and make the string lowercase. The string should then be written to a text file called ‘content.txt’. Use the ‘stringManip.js’ module in a file called ‘test.js’.
Part 3
● Create a module called ‘primes.js’ that finds returns all the prime numbers between 1 and 100.
● Create a module called ‘even_nums.js’ that returns all the even number between 1 and 50.
● Create a Node.js file called ‘my_numbers.js’ that uses the modules (‘prime.js’ and ‘even_nums.js’) that you created. The program should:
○ Write the word “Primes:” and then the prime numbers returned by ‘primes.js’ in a text file called ‘nums.txt’.
○ It should then append the heading “Even numbers:” and the even numbers returned by ‘even_nums.js’ to ‘nums.txt.
○ Write a message to the console that indicates whether the file was created successfully or not.
○ Read ‘nums.txt’ and display the contents of this file in the browser when the user navigates to ​http://localhost:8000/
● Create a module called ‘delete_file.js’ that will delete ‘nums.txt’ when called.