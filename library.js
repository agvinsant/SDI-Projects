// Adam Vinsant
// SDI 1206
// Project 4
// Library

var adamLib = function() {
 // Start Problem 1 
  // string to number function
  var stringToNum = function(val) {
      var string = (val),
          number = string * 1
   return number;
  };
   // Start Problem 2
   // Time To Go function
   // Created function to show both hours and days left. 
   var timeToGo = function(dateA, dateB) {  // This is also to show I learned how to work with arguments from Project 2.
     var start    = new Date(dateA),
         end      = new Date(dateB),
         millisecondsPerHour = 3600000,
         millisecondsPerDay = 86400000,
         // Using math methods to find time left in hours and days
         hoursLeft = (end - start)/millisecondsPerHour + " hours left,",
         daysLeft  = (end - start)/millisecondsPerDay + " days left",
         timeLeft = hoursLeft + " or " + daysLeft;
   return timeLeft;
   };
   
   // Start Problem 3
   // smallest number in an array that is greater than a given number
   var findTheValue = function (val) {
        var arr = [1,3,6,9,12,15];
        Array.prototype.minGreaterThan = function(val) {
         var t = this,
             num = Number.POSITIVE_INFINITY, i;
         // For Loop to assign the integers of my array
         for (i = 0; i < t.length; i++)
         // nested conditional to test the given value and find the least greater number in the array
         if (val < t[i] && t[i] < num) num = t[i];
         return num;
      };
   return arr.minGreaterThan(val);  
   };
   
   // Start Problem 4
   // Validating email address function
     // Messing around with some regEx... SPECIAL THANKS TO MDN AND GOOGLE FOR HELP WITH THIS! IT WORKS GREAT! :)
     
   var checkValidEmail = function(emailToCheck) {
      var  emailAddress = emailToCheck,
           emailPattern = /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,4}$/   // regular expression pattern to test characters.
      // This conditional tests the given email address with the pattern for validation
      if (emailPattern.test(emailAddress)) {
         // Output if it is a valid email address
         console.log("The address you have entered is valid!");
         // Output if it is an invalid email address     
      } else {
         console.log("The email address you have entered is invalid! Please Try again!");
      };
   };
   
   // Start Problem 5
   // Check URL function.
   // Once again using regEx...
   
   var checkUrl = function(testUrl) {
      var url = testUrl,
          regExp = /^(http[s]?:\/\/){0,1}[a-zA-Z]{2,5}[\.]{0,1}/,  // regular expression pattern to test characters in URL.
          isThisUrl = regExp.test(url);
      // The following code will test the URL and return true if yes and false if no...
      console.log("This is a valid URL: " + isThisUrl);
      // This conditional checks to see if the URL is an https: URL...
      if (url.charAt(4) == "s") {
         console.log("This is a https URL!");
      };
      // This will tell you if it is an http: URL...
      if (url.charAt(4) == ":") {
         console.log("This is a http URL!")
      };      
   };
   
   // Problem 6
   // Check Phone Number Function
   // Again using regEx...
   
   var checkPhoneNumber = function(testPhoneNumber) {
      var phoneNumber = testPhoneNumber,
          numberPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  // regular expression test pattern
      // This conditional tests my phone number with the regEx pattern 
      if (numberPattern.test(phoneNumber)) {
         var validPhoneNumber = phoneNumber.replace(numberPattern, "($1) $2-$3");
         // Output if valid
         console.log("This is a valid phone number!");
         // Output if invalid 
      } else {
         console.log("This is an invalid phone number!");
      };
   }

// Main Library return object
   return {
     "stringToNum": stringToNum,
     "timeToGo": timeToGo,
     "findTheValue": findTheValue,
     "checkValidEmail": checkValidEmail,
     "checkUrl": checkUrl,
     "checkPhoneNumber": checkPhoneNumber
   };
};
