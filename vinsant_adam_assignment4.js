// Adam Vinsant
// SDI 1206
// Project 4

// access to my library
// variable for adamLib
var lib = new adamLib();

// Problem 1
// Calling String to Number function
console.log("Calling String to Number function:");
console.log(lib.stringToNum("42"));

// Problem 2
// Calling Time to go function
console.log("Calling Time to go function:");
console.log(lib.timeToGo("June 19, 2012", "June 21, 2012"));

// Probelm 3
// Calling the smallest number in an array that is greater than a given number function
console.log("Calling the smallest number in an array that is greater than a given number function:");
console.log(lib.findTheValue(5));

// Problem 4
// Checking a valid email address function.
// Checking my personal email address (agvinsant@gmail.com).
console.log("Calling the valid email address function:")
lib.checkValidEmail("agvinsant@gmail.com");

// Problem 5
// Checking a valid URL function
// Checking with my music label's website: http://www.purelogicrecordings.com
console.log("Calling the valid URL function:");
lib.checkUrl("http://www.purelogicrecordings.com");