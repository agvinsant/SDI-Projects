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
   var timeToGo = function(dateA, dateB) {
     var start    = new Date(dateA),
         end      = new Date(dateB),
         millisecondsPerHour = 3600000,
         millisecondsPerDay = 86400000,
         hoursLeft = (end - start)/millisecondsPerHour + " hours left,",
         daysLeft  = (end - start)/millisecondsPerDay + " days left",
         timeLeft = hoursLeft + " or " + daysLeft;
      return timeLeft;
   };
   
   // 
   
   return {
     "stringToNum": stringToNum,
     "timeToGo": timeToGo
      
   };
};