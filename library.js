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
        var arr = [1,6,12,14];
        Array.prototype.minGreaterThan = function(val) {
         var t = this,
             r = Number.POSITIVE_INFINITY, i;
         for (i = 0; i < t.length; i++)
         if (val < t[i] && t[i] < r) r = t[i];
      return r;
      };
  
         return arr.minGreaterThan(val);
      
   };
   
   // Start Problem 4
   // Validating email address function
     // Messing around with some regExp.
     
   var checkValidEmail = function(emailToCheck) {
      var  emailAddress = emailToCheck,
           emailPattern = /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2,4}$/   // regular expression pattern to test characters.
      if (emailPattern.test(emailAddress)) {
         console.log("The address you have entered is valid!");
      } else {
         console.log("The email address you have entered is invalid! Please Try again!");
      };
   };
   
   // Start Problem 5
   // Check URL function.
   // Once again using regExp...
   
   var checkUrl = function(testUrl) {
      var url = testUrl,
          regExp = /^(http[s]?:\/\/){0,1}[a-zA-Z]{2,5}[\.]{0,1}/,  // regular expression pattern to test characters in URL.
          isThisUrl = regExp.test(url);
      // The following code will test the URL and return true if yes and false if no...
      console.log("This is a valid URL: " + isThisUrl);
      if (url.charAt(4) == "s") {
         console.log("This is a https URL!");
      };
      // This will tell you if it is an https: or http: URL...
      if (url.charAt(4) == ":") {
         console.log("This is a http URL!")
      };      
   };
   
   
   return {
     "stringToNum": stringToNum,
     "timeToGo": timeToGo,
     "findTheValue": findTheValue,
     "checkValidEmail": checkValidEmail,
     "checkUrl": checkUrl
   };
};