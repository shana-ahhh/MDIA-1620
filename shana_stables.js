// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

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

let horseName = "Jelly";
let horseAge = "5";
let isHorseInside = true;
let monthlyFee = 100;
let lateMonthlyFee = monthlyFee * 0.2;
let totalFee = monthlyFee + lateMonthlyFee;

console.log(horseName + " is " + horseAge + " years old!");
console.log(isHorseInside);
console.log(
    "The monthly payment for " +
        horseName +
        " is " +
        monthlyFee +
        "." +
        " The fee due to late monthly payment is " +
        lateMonthlyFee +
        "." +
        "The total fee is " +
        totalFee +
        "."
);

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

let horseOne = {
    name: "Bob",
    nickname: "Choco",
    favTreat: "candy",
    age: 3,
    monthlyRent: 75,
    isOutside: true,
    colour: "black",
    trainingLevel: "beginner",
};

let horseTwo = {
    name: "Lily",
    nickname: "Milk",
    favTreat: "peanut",
    age: 7,
    monthlyRent: 130,
    isOutside: false,
    colour: "brown",
    trainingLevel: "advanced",
};

let horseThree = {
    name: "Flora",
    nickname: "Bubble",
    favTreat: "chips",
    age: 10,
    monthlyRent: 155,
    isOutside: true,
    colour: "white",
    trainingLevel: "intermediate",
};

let horses = [horseOne, horseTwo, horseThree];

let horseFour = {
    name: "Leena",
    nickname: "Tea",
    favTreat: "potato",
    age: 4,
    monthlyRent: 80,
    isOutside: false,
    colour: "yellow",
    trainingLevel: "beginner",
};

console.log(horseFour);
horses.push(horseFour);

horses.horseOne.isHungry = true;
horses.horseTwo.isHungry = false;
horses.horseThree.isHungry = false;
horses.horseFour.isHungry = true;

console.log(horses);
// console.log(horseOne);
// console.log(horseTwo);
// console.log(horseThree);
// console.log(horseFour);

console.log(horses.horseOne.name + " is" + horses.horseOne.age + " years old!");
console.log(horses.horseTwo.name + " is" + horses.horseTwo.age + " years old!");

function printHorseAge(horseAge, horseName) {
    console.log(
        horseName +
            " is " +
            horseAge +
            " years old! Next year, they will be " +
            (horseAge + 1) +
            "years old!"
    );
}

printHorseAge(12, "Daffy");
printHorseAge(horses.horseOne.age, horses.horseOne.name);
printHorseAge(horses.horseTwo.age, horses.horseTwo.name);

let changer = "hello world!";
changer = "Byee world!";

const MONTHLY_RENT = 300;

function payMe(rent = MONTHLY_RENT) {
    console.log("You owe me " + rent + " dollars!");
}

function payMe(rent = MONTHLY_RENT) {
    let message = "You owe me " + rent + " dollars!";
    return message;
}

payMe(550);
payMe(3000);
payMe();
