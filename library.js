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
   var timeToGo = function(dateA, dateB) {
     var start    = new Date(dateA),
         end      = new Date(dateB),
         milliseconds = 3600000,
         timeLeft = (end - start)/milliseconds + " hours left."
      return timeLeft;
   };
   
   
   return {
     "stringToNum": stringToNum,
     "timeToGo": timeToGo
      
   };
};