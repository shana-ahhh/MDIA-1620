//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

// Declare variables with values for the following:
// - the name of the horse at the stable
// - the age of the horse
// - whether the horse is inside or outside
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store a message for visitors to the stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// Include the name of your horse in the message.

//------------------------- First day (Lab #2, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

//------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

let horseName = "Jelly";
let horseAge = "5";
let isHorseInside = true;
let monthlyFee = 100;
let latePaymentFee = monthlyFee * 0.2;

let welcomeMessage = "Welcome to my stables!";
let latePaymentMessage =
    "The monthly payment for " +
    horseName +
    " is " +
    monthlyFee +
    ". The fee due to late monthly payment is " +
    latePaymentFee +
    ". The total fee is " +
    (monthlyFee + latePaymentFee) +
    ".";

let horses = {
    horseOne: {
        name: horseName,
        nickname: "Choco",
        favTreat: "candy",
        age: 3,
        monthlyRent: monthlyFee,
        isInside: isHorseInside,
        colour: "black",
        trainingLevel: "beginner",
    },
    horseTwo: {
        name: "Lily",
        nickname: "Milk",
        favTreat: "peanut",
        age: 7,
        monthlyRent: 130,
        isInside: false,
        colour: "brown",
        trainingLevel: "advanced",
    },
    horseThree: {
        name: "Flora",
        nickname: "Bubble",
        favTreat: "chips",
        age: 10,
        monthlyRent: 155,
        isInside: true,
        colour: "white",
        trainingLevel: "intermediate",
    },
};

let newHorse = {
    name: "Leena",
    nickname: "Tea",
    favTreat: "potato",
    age: 4,
    monthlyRent: 80,
    isInside: false,
    colour: "yellow",
    trainingLevel: "beginner",
};

horses.horseFour = newHorse;

horses.horseOne.isHungry = true;
horses.horseTwo.isHungry = false;
horses.horseThree.isHungry = false;
horses.horseFour.isHungry = true;

const totalStalls = 10;

function availableStalls(numberOfStalls, numberOfHorses) {
    let numberOfAvailableStalls = numberOfStalls - numberOfHorses;
    console.log("There are " + numberOfAvailableStalls + " stalls available!");
}

function latePaymentNotice(horse) {
    console.log(
        "Your payment for " +
            horse.name +
            " is late! You owe $" +
            horse.monthlyRent * 0.2 +
            " plus the monthly fee of $" +
            horse.monthlyRent +
            "!"
    );
}

function chosenHorse(horse) {
    return (
        "This is " +
        horse.name +
        ", you can also call him/her " +
        horse.nickname +
        "!"
    );
}

availableStalls(totalStalls, 4);
latePaymentNotice(horses.horseOne);
console.log(chosenHorse(horses.horseTwo));
