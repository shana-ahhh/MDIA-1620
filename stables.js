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

//------------------------- Seting up shop (Lab #1a, Week 3) -------------------------//

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
        isOutside: true,
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

//------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

let totalStalls = 15;
function availableStalls() {
    let totalOfHorses = 4;
    console.log(totalStalls - totalOfHorses + " stalls are available.");
}

availableStalls();

function owedRent() {
    console.log(
        horses.horseOne.name +
            " will owe $" +
            latePaymentFee +
            " if rent is paid late."
    );
}

owedRent();

function chosenHorse(horse) {
    return horse.nickname;
}

let horseNickname = chosenHorse(horses.horseThree);
console.log(horses.horseThree.name + "'s nickname is " + horseNickname + "!");
