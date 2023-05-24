// Instructions

/* 
1- Define the EXPECTED_MINUTES_IN_OVEN constant that 
represents how many minutes the lasagna should be in
the oven. It must be exported. According to the cooking
book, the expected oven time in minutes is 40.

2- Implement the remainingMinutesInOven function 
that takes the actual minutes the lasagna has been 
in the oven as a parameter and returns how many minutes
the lasagna still has to remain in the oven, based on the
expected oven time in minutes from the previous task.

3- Implement the preparationTimeInMinutes function that 
takes the number of layers you added to the lasagna as a 
parameter and returns how many minutes you spent preparing 
the lasagna, assuming each layer takes you 2 minutes to prepare.

4- Implement the totalTimeInMinutes function that takes two
parameters: the numberOfLayers parameter is the number of layers 
you added to the lasagna, and the actualMinutesInOven parameter 
is the number of minutes the lasagna has been in the oven. The 
function should return how many minutes in total you've worked 
on cooking the lasagna, which is the sum of the preparation time 
in minutes, and the time in minutes the lasagna has spent in the 
oven at the moment.
 */

/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return (numberOfLayers * PREPARATION_MINUTES_PER_LAYER) + actualMinutesInOven;
}