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
