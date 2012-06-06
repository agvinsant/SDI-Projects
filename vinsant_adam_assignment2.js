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

var whatToDo = function () {
    var stayAwake = "I stay up and get my day started!",
        backToBed = "I am tired and will go back to sleep with " + family[1] + "!",  
        t = false,
        a = true;
      if ((t || a) && !(t && a)) {
        console.log(stayAwake)
      } else { console.log(backToBed)
      };
    return ;
}; 

whatToDo();

/* So I decide to stay up and get the day going
 Time to make breakfast, but what to have? 
 I want cereal, I have 3 options, which to choose...(number function)
 I also want fruit and beverage so I will show the functions for that too!
*/
var cerealChoice = function () {
    var cerealTypes = 3;
    console.log("What kind of cereal do I want, I have " + cerealTypes + " to choose from...");

    while (cerealTypes > 1 ) {
        console.log(cerealTypes + " kinds of cereal to choose from...Na, next...");
        cerealTypes--;   
    };
    return console.log("That's the cereal I want!!!");
};

cerealChoice();
// This function shows that I have been through the choices one by one and found the one I wanted!

var fruitChoice = function () {
    var fruitTypes = 4;
        
    console.log("What kind of fruit do I want with my cereal? I have "
                + fruitTypes + " to choose from." );
        
        while (fruitTypes > 1) {
            console.log(fruitTypes + " kinds of fruit, which will go best with my cereal?...Na, next...");
            fruitTypes--;
        };
        return console.log("That will be good in my cereal!");
};

fruitChoice(); // calls my fruitChoice function

var bevChoice = function() {
    var drinks= 3
    console.log("Which drink will go best with my breakfast?");
    
    while (drinks > 1 ) {
        console.log(drinks + " kinds of drinks to choose from...Na, next...");
        drinks--;
    };
    return(console.log("I want to drink this with my breakfast!"))    
};
bevChoice(); // calls my bevChoice function

// string function...
console.log("Is my breakfast healthy or not healthy?");

var healthyOrNotHealthy = function () {
    var healthy = "This will be good for me.",
    notHealthy = "not so good for me, but oh so yummy!";
    if (cerealChoice + fruitChoice + bevChoice === true) {
    console.log(healthy)  
    } else if (cerealChoice + fruitChoice + bevChoice === false) {
    console.log(notHealthy)};    
    console.log(healthy + " Or, this is " + notHealthy);
    return (console.log("Which do I choose?"));
};

healthyOrNotHealthy();

    






    
    
