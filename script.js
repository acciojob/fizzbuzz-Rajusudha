//your JS code here. If required.
// Initialize an empty string to store the result
var result = "";

// Loop through numbers from 1 to 20
for (var i = 1; i <= 20; i++) {
  // Check for multiples of both three and five
  if (i % 3 === 0 && i % 5 === 0) {
    result += "FizzBuzz";
  }
  // Check for multiples of three
  else if (i % 3 === 0) {
    result += "Fizz";
  }
  // Check for multiples of five
  else if (i % 5 === 0) {
    result += "Buzz";
  }
  // For other numbers, append the number itself as a string
  else {
    result += i.toString();
  }

  // Add a newline character ("\n") to separate numbers/strings
  result += "\n";
}

// Display the result using alert
alert(result);
