// My Day At the Restaurant
// Adam Vinsant
// SDI 1206 Project 3

console.log("Hello All, today we have 9 servers on the floor with one busser and one host.");
console.log("Our servers for the day are: ");

var serverOnDuty = function (frontOfHouse) {
    for (var i = 0; i < frontOfHouse.servers.length; i++) {
        var server = frontOfHouse.servers[i];
        console.log("Name: " + server.name + ", Title: " + server.title);
    };
};

serverOnDuty(frontOfHouse);

