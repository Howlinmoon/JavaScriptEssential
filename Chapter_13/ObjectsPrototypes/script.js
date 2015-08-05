// Simple prototype example

// the original object constructor with properties
function Player(n, s, r) {
    this.name = n;
    this.score = s;
    this.rank = r;
}

// add methods to the initial object design via prototype
Player.prototype.logInfo = function() {
    console.log("I am: ", this.name);
}

Player.prototype.promote = function() {
    this.rank++;
    console.log("My new rank is: ", this.rank);
}

var fred =  new Player("Fred", 1000, 5);
fred.logInfo();
fred.promote();

// create new instances
var bob = new Player("Bob", 50, 1);
bob.logInfo();
bob.promote();
bob.logInfo();
bob.promote();

var jane = new Player("Jane", 50000, 10);
jane.logInfo();
jane.promote();













