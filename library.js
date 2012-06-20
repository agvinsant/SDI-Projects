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
   
   // Finding sum of numbers in an array funcion
   var findTheNumbers = function () {
      var myArray = ["a",1,"b",2,"c",3,"d",4],
          sum = 0;
      for (var i = 0; i < myArray.length; i++) {
        if (!isNaN(parseInt(myArray[i]))) {
            var totalValue = sum += myArray[i];
        };
      return;
         
   };
     
     //  
   };
   
   return {
     "stringToNum": stringToNum,
     "timeToGo": timeToGo,
     "findTheValue": findTheValue,
     "findTheNumbers": findTheNumbers
      
   };
};