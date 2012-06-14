// My Day At the Restaurant
// Adam Vinsant
// SDI 1206 Project 3

// Start

console.log("Hello All, our servers for the day are: ");

// For Loop with Argument: Object from JSON Data
var serverOnDuty = function (frontOfHouse) {
    for (var i = 0; i < frontOfHouse.servers.length; i++) {
        var server = frontOfHouse.servers[i];
        console.log("Name: " + server.name + ", Title: " + server.title);
    };
    
};
serverOnDuty(frontOfHouse); 

//  Math with Number Return and Number Argument 
var totalStaffOnDuty = function (numberStaff) {
     var numberServers = 9,
         numberBussers= 1,
         numberHosts = 1;
     var totalStaff = numberServers + numberBussers + numberHosts     
        
     return totalStaff;
};
var todayStaff = totalStaffOnDuty(11);
console.log("We have a total of " + todayStaff + " staff members on the floor today.")

// Global Variables
var busser = "Carlos",
    host = "Amy",
    managerFOH = "Doug",
    managerBOH = "Steve",
    soldDessert = true;
    
console.log("Our busser is " + busser + ", and our host is " + host + ".");
console.log("Your front of house manager is " + managerFOH + ", and the kitchen manager for the day is " + managerBOH + ".");
console.log("This week's contest is selling desserts. You will get 1 point per dessert sold. Most points at the end of the week wins.")

// Standard table greeting
// Contains Global Variables, local variables, while loop, nested conditional, array argument 
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
    return alcoholOptions;
};
beverageOrder = tableGreeting(alcoholBeverage);
console.log(beverageOrder);

// So shift is over and the dessert sales are being tallied. 
// I want to add these sales to an object, something that can track dessert sales per server throughout the week. 
// Object Return, Method: function, accessor, procedure
var dessertContestData = function(name) {
    var dailyDessertSales = [];
    var enterDesserts = function(numberDesserts) {
        if (dailyDessertSales >= 0) {
            dailyDessertSales.push(numberDesserts);
        }
    };
    var contestList = function () {
        for (var n = 0; n < dailyDessertSales.length; n++) {
            console.log(name + ":" + "Monday: " + dailyDessertSales[n]);
        }
    };
    var getName = function () { return "Name: " + name + ", Desserts Sold: " + dailyDessertSales};
    
    // Boolean Property
    var getSoldDessert = function () {
        if (n > 0) { dailyDessertsSales[n];
            return true;
            }
             else { return false; };
    }
    return {
        "name": getName, // getter accessor...
        "dailySales": dailyDessertSales,
        "soldDessert": getSoldDessert,
        "contestData": enterDesserts,
        "contestList": contestList
    };
    
};
var adam        = dessertContestData("Adam"),
    eric        = dessertContestData("Eric"),
    stephanie   = dessertContestData("Stephanie"),
    alex        = dessertContestData("Alex"),
    zak         = dessertContestData("Zak"),
    jeanine     = dessertContestData("Jeanine"),
    shelby      = dessertContestData("Shelby"),
    mike        = dessertContestData("Mike"),
    john        = dessertContestData("John")
;

// Entering number of desserts into Contest Data Object...
//  Method: Mutator
adam.dailySales.push(3);
eric.dailySales.push(2);
stephanie.dailySales.push(2);
alex.dailySales.push(0);
zak.dailySales.push(0);
jeanine.dailySales.push(1);
shelby.dailySales.push(2);
mike.dailySales.push(0);
john.dailySales.push(1);

console.log("I am posting the list of desserts sold for Monday, keep selling!");

// The list...

console.log(adam.name());
console.log(eric.name());
console.log(stephanie.name());
console.log(alex.name());
console.log(zak.name());
console.log(jeanine.name());
console.log(shelby.name());
console.log(mike.name());
console.log(john.name());

// Time for end of the shift comments from manager Doug.
// Conditional with string return, string argument, number argument, boolean argument, 

console.log( managerFOH + " says, 'Good shift guys and gals! I will now talk to you individually about your sales for the day.'")

var dessertsSold = function (name, sellDessert, numberDessertsSold) {
    if (numberDessertsSold > 0) {
        var goodJob = name + ", great job selling keep it up!";
        console.log(goodJob);
    } else { var noGood = name + ", no desserts sold, you need to pick it up!";
            console.log(noGood);   
    }
    return goodJob; 
};
dessertsSold("Adam", true, 3);
dessertsSold("Eric", true, 2);
dessertsSold("Stephanie", true, 2);
dessertsSold("Alex", false, 0);
dessertsSold("Zak", false, 0)
dessertsSold("Jeanine", true, 1);
dessertsSold("Shelby", true, 2);
dessertsSold("Mike", false, 0);
dessertsSold("John", true, 1);






