// Adam Vinsant
// SDI 1206
// Project 4

// access to my library
// variable for adamLib
var lib = new adamLib();

// Problem 1
// Calling String to Number function
console.log("Problem 1: Calling String to Number function:");
// Output for Problem 1
console.log(lib.stringToNum("42"));

// Problem 2
// Calling Time to go function
console.log("Problem 2: Calling Time to go function:");
// Output for Problem 2
console.log(lib.timeToGo("June 19, 2012", "June 21, 2012"));

// Probelm 3
// Calling the smallest number in an array that is greater than a given number function
console.log("Problem 3: Calling the smallest number in an array that is greater than a given number function:");
// Output for Problem 3
console.log(lib.findTheValue(7));

// Problem 4
// Checking a valid email address function.
// Checking my personal email address (agvinsant@gmail.com).
console.log("Problem 4: Calling the valid email address function:")
// Output for Problem 4
lib.checkValidEmail("agvinsant@gmail.com");

// Problem 5
// Checking a valid URL function
// Checking with my music label's website: http://www.purelogicrecordings.com
console.log("Problem 5: Calling the valid URL function:");
// Output for Problem 5
lib.checkUrl("http://www.purelogicrecordings.com");

// Problem 6
// Checking a valid U.S. phone number function
// Checking the function using my personal phone number
console.log("Problem 6: Calling the valid phone number function");
// Output for Problem 6
lib.checkPhoneNumber("205-617-5232");