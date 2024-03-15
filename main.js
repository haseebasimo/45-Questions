//Q2
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var message = 'haseeb';
console.log("hello ".concat(message, ", would you like to learn typescript today?"));
//Q3
var personName = 'haseeb asim';
console.log(personName.toLocaleUpperCase());
console.log(personName.toLowerCase());
console.log(personName.charAt(0) + personName.slice(1));
//Q4
console.log('albert Einstein once said, "A person who never made a mistake never tried anything new."');
//Q5
var famousPerson = "Albert Einstein";
var Message = "".concat(famousPerson, " once said, \"A person who never made a mistake never tried anything new.\"");
console.log(Message);
//Q6
var Name = "\t\n haseeb \t\n";
console.log(Name);
console.log(Name.trim());
//Q7
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Q8
console.log(5 + 3);
console.log(12 - 4);
console.log(16 / 2);
console.log(2 * 4);
//Q9
var favoriteNumber = 25;
console.log("My favorite number is ".concat(favoriteNumber));
//Q10
//Haseeb Asim, 2k24-3-09
//Program discribe personal message
var myself = "Haseeb asim";
console.log("\"Hello ".concat(myself, " would you like to learn some typescript today\""));
//Q11
var Names = ["hassam, umair, wadood"];
for (var i = 0; i < Names.length; i++) {
    console.log(Names[i]);
}
//Q12
var names = ["umair, hassam ,wadood"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", would you like to learn some typescript today?"));
}
//Q13
var transports = ["united moterbike", "hyunda car", "bianchi bicycle"];
transports.forEach(function (transports) {
    console.log("I like to own a ".concat(transports));
});
//Q14
var Guest = ["hassan ", "ahmad ", "akhtar", "shakell"];
Guest.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, ". would you like to joint at dinner"));
});
//Q15
var unableToAttend = "hassan";
console.log("".concat(unableToAttend, " cant make it to dinner."));
var newGuest = "haseeb asim";
Guest[Guest.indexOf(unableToAttend)] = newGuest;
Guest.forEach(function (guests) {
    console.log("Dear ".concat(Guest, ", wouls you like me to join at dinner"));
});
//Q16
var guests = ["haseeb", "marie curie", "charles darwin"];
console.log("Great news! I found a bigger dinner tabel!");
guests.unshift("isaac newton");
guests.splice(guests.length / 2, 0, "malik haseeb");
guests.push(" Ada lovelace");
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", would  you like to join me for dinner?"));
});
//Q17
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests);
//Q18
var places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
//Q19
var guest = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
console.log("I am inviting ".concat(guest.length, " people to dinner."));
//Q20
var countries = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);
//Q21
var book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.yearPublished));
//Q22
var friends = ["Alice", "Bob", "Charlie"];
console.log(friends[3]);
friends[2] = "Charlie";
//Q23
var car = 'Kia';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'Kia');
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota');
//Q24
console.log("Testing equality with strings:");
console.log("apple" == "apple");
console.log("apple" == "Apple");
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple");
console.log("Numerical tests:");
console.log(10 > 5);
console.log(2 < 1);
console.log("Tests with 'and' and 'or':");
console.log(true && false);
console.log(true, false);
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango"));
//Q25
var alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
//Q26
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
//Q27
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
//Q28
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//Q29
var favorite_fruits = ["apples", "bananas", "cherries"];
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
//Q30
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
//Q31
var username = [];
if (username.length === 0) {
    console.log("We need to find some user!");
}
else {
    // great user
}
//Q32
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_user = ["User 6", "User7", "User8", "admin", "User9"];
new_user.forEach(function (newuser) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, ", needs to enter a new username"));
    }
    else {
        console.log("".concat(newuser, ", is avalible"));
    }
});
//Q33
var numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number, ",").concat(suffix));
});
//Q34
var pizzas = ["fajjita", "tikka", "peppreroni"];
pizzas.forEach(function (pizzas) {
    console.log("I like ".concat(pizzas, " pizza"));
});
console.log("I really love pizza");
//Q35 
var animals = ["Dog", "Cat", "Rabbit"];
animals.forEach(function (animals) {
    console.log("A ".concat(animals, " would make a good pet."));
});
console.log("Any of these animal would make a great pet!!");
//Q36
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("medium", "Code is Life");
//Q37
function make_tshirt(size, messagE) {
    if (size === void 0) { size = "Large"; }
    if (messagE === void 0) { messagE = "I love typescript"; }
    console.log("Make a".concat(size, " T-shirt,with message ").concat(messagE, " printed on it"));
}
make_tshirt();
make_tshirt("small, Dive into coding");
make_tshirt("medium");
//Q38
function Name_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
Name_city("Chackwal");
Name_city("Islamabad");
Name_city("Tehran ", "Iran");
//Q39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Chackwal", "Pakistan"));
console.log(city_country("kabul", "Afganistan"));
console.log(city_country("Hanoi", "vietnam"));
//Q40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
//Q41
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//Q42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);
show_magicians(magicians);
