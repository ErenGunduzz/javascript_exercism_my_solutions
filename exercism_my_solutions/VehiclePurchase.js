/**
 * // INSTRUCTIONS
In this exercise, we will write some code to help us prepare to buy a vehicle.

We have three tasks, one to determine if we will need to get a licence, one to
help us choose between two vehicles and one to estimate the acceptable price 
for a used vehicle.
 */

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
    if(kind == 'car' || kind == 'truck'){return true;}
    else{return false;}
  }
  
  /**
   * Helps choosing between two options by recommending the one that
   * comes first in dictionary order.
   *
   * @param {string} option1
   * @param {string} option2
   * @returns {string} a sentence of advice which option to choose
   */
  export function chooseVehicle(option1, option2) {
    if (option1[0] < option2[0]){return option1 + " is clearly the better choice.";}
    else{return option2 + " is clearly the better choice.";}
  }
  
  /**
   * Calculates an estimate for the price of a used vehicle in the dealership
   * based on the original price and the age of the vehicle.
   *
   * @param {number} originalPrice
   * @param {number} age
   * @returns {number} expected resell price in the dealership
   */
  export function calculateResellPrice(originalPrice, age) {
    if(age < 3){return originalPrice * 0.8}
    else if(3<= age && age <= 10){return originalPrice * 0.7;}
    else{return originalPrice * 0.5;}
  }