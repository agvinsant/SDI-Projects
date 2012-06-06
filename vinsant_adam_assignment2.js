// A Day In My Life...Part 2
// Author: Adam Vinsant
// SDI: 1206

// Global Variables
var family = ["Daddy", "Momma", "Gavin", "GeAnna"];
var kidOneReady = 1;
var kidTwoReady = 2;
var ready = true;
var notReady = false
;

// Starting the day! (procedure)
console.log("Alarm sounds and it's time to get up!");
console.log("Time to get kids up and ready for school.");
console.log("We can leave for school if "
            + family[2] + " and " + family[3]
            + " have their stuff and ready.")
;

if (ready === true) {
        (kidOneReady + kidTwoReady) <= 3
        console.log(family[0] + " says, " + "'Let's load up and head to school.'")
} else {
	console.log("Hurry up kids and let's go!")
};

// Kids are off to school and now I am back home.

// Do I go back to sleep or do I stay up and get the day going? (boolean function)
// t = tired, and a = awake
var t = false,
    a = true;

var whatToDo = function () {
    var stayAwake = "I stay up and get my day started!",
        backToBed = "I am tired and will go back to sleep with " + family[1] + "!";   
      if ((t || a) && !(t && a)) {
        console.log(stayAwake)
      } else { console.log(backToBed)
      };
    return ;
}; 

whatToDo();

/* So I decide to stay up and get the day going
 Time to make breakfast, but what to have? 
 I want cereal, fruit, and a beverage. How many options do I have? (number function) 
*/
    
    
