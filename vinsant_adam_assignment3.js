// My Day At the Restaurant
// Adam Vinsant
// SDI 1206 Project 3

// Start
console.log("Hello All, today we have 9 servers on the floor with one busser and one host.");
console.log("Our servers for the day are: ");

// For Loop with Argument: Array from JSON Data
var serverOnDuty = function (frontOfHouse) {
    for (var i = 0; i < frontOfHouse.servers.length; i++) {
        var server = frontOfHouse.servers[i];
        console.log("Name: " + server.name + ", Title: " + server.title);
    };
    
};

serverOnDuty(frontOfHouse);

// Global Variables
var busser = "Carlos",
    host = "Amy",
    managerFOH = "Doug",
    managerBOH = "Steve",
    soldDessert = true;
    
console.log("Our busser is " + busser + ", and our host is " + host + ".");
console.log("Your front of house manager is " + managerFOH + ", and the kitchen manager for the day is " + managerBOH + ".");
console.log("This week's contest is selling desserts. You will get 1 point per dessert sold. If you do not sell a dessert in a day, you are out of the contest.")

// Standard table greeting
// Contains Global Variables, 
var alcoholBeverage = ["beer", "wine", "coctail"],
        nonAlcoholBeverage = ["soda", "tea", "lemonade"],
        i = 3;
var tableGreeting = function (alcoholBeverage) {
    console.log("Hello, welcome to California Pizza Kitchen!");
    while (i > 0) {
        i--;
       console.log("Can I get you started with a refreshing " + alcoholBeverage[i] + " or " + nonAlcoholBeverage[i] + "?");
       var alcoholOptions = "We have " + alcoholBeverage[i] + " for you!",
            nonAlcoholOptions = "Well we can get you a " + nonAlcoholBeverage[i];
       
    };
    if (alcoholBeverage) {
        console.log(alcoholOptions)
    }
    else {
        console.log(nonAlcoholOptions);
    };
};
tableGreeting(alcoholBeverage);



// Conditional with return, string argument, number argument

var dessertsSold = function (name, numberDessertsSold) {
    if (numberDessertsSold > 0) {
        var goodJob = name + ", great job selling keep it up!";
        console.log(goodJob);
    } else { var noGood = name + ", no desserts sold, then your no longer in the contest!";
            console.log(noGood);   
    }
    return goodJob; 
};
dessertsSold("Adam", 3);
dessertsSold("Eric", 2);
dessertsSold("Stephanie", 2);
dessertsSold("Alex", 0);
dessertsSold("Zak", 0)
dessertsSold("Jeanine",1);
dessertsSold("Shelby", 2);
dessertsSold("Mike", 0);
dessertsSold("John", 1);








