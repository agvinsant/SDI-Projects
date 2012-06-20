// Adam Vinsant
// SDI 1206
// Project 4
// Library

var adamLib = function() {
  
  // string to number function
  var stringToNum = function(val) {
      var string = (val),
          number = string * 1
      return number;
  };
   
   // Time To Go function
   // Created function to show both hours and days left. 
   var timeToGo = function(dateA, dateB) {  // This is also to show I learned how to work with arguments from Project 2.
     var start    = new Date(dateA),
         end      = new Date(dateB),
         millisecondsPerHour = 3600000,
         millisecondsPerDay = 86400000,
         hoursLeft = (end - start)/millisecondsPerHour + " hours left,",
         daysLeft  = (end - start)/millisecondsPerDay + " days left",
         timeLeft = hoursLeft + " or " + daysLeft;
      return timeLeft;
   };
   
   // smallest number in an array that is greater than a given number
   var findTheValue = function () {
        Array.prototype.minGreaterThan = function(a) {
         var t = this,
             r = Number.POSITIVE_INFINITY, i;
         for (i = 0; i < t.length; i++)
         if (a < t[i] && t[i] < r) r = t[i];
      return r;
}

         var arr=[1,6,12,14],n=5;
         return arr.minGreaterThan(n);
      
   };
   
   return {
     "stringToNum": stringToNum,
     "timeToGo": timeToGo,
     "findTheValue": findTheValue
      
   };
};