// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * In counter 1 the count variable is stored within the function (closure!), and in counter 2 the variable is stored outside of the function. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1 uses a closure. A child function is accessing a variable in a higher level. In counter 2 it's just accessing a variable in global scope. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * Counter 1 would be preferable if you want to keep the count variable protected and only use it with this particular function. Counter 2 would be preferable if you wanted to have multiple functions working with the count variable. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.round(Math.random()*2)
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// need to run cb() for each inning, and then add that to the total score 

function finalScore(cb, inning){
    let Home = 0
    let Away = 0 
    for (let i = 0; i < inning; i++){
      Home = cb() + Home;  
    }
    for (let i = 0; i < inning; i++){
      Away = cb() + Away;  
    }

    console.log(`Home: ${Home}`) 
    console.log(`Away: ${Away}`)
}

console.log(finalScore(inning, 9)); 

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(cb, inning){
  let Score = 0
  for (let i = 0; i < inning; i++){
    Score = cb() + Score;  
  }
  return Score; 

}


function scoreboard(cb1, cb2, innings) {
  let Home = 0
  let Away = 0 
  for (let i = 1; i <= innings; i++){
      Home = cb1(cb2, i);
      Away = cb1(cb2, i);
     console.log(`inning ${i}: Home: ${Home} - Away: ${Away}`) 
  }

  console.log(`Final Score: ${Home} - ${Away}`)

}

console.log(scoreboard(getInningScore, inning, 9))




