/**
 * Task-1
 * 
 * Li Mei likes to tell her customers in advance how long they have to wait for a juice from the menu that they ordered. She has a hard time remembering the exact numbers because the time it takes to mix the juices varies. 'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 1.5 minutes each, 'Tropical Island' takes 3 minutes and 'All or Nothing' takes 5 minutes. For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.

To help your friend, write a function timeToMixJuice that takes a juice from the menu as an argument and returns the number of minutes it takes to mix that drink.

timeToMixJuice('Tropical Island');
// => 3

timeToMixJuice('Berries & Lime');
// => 2.5

Task-2

A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration. So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.

Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing the supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. She always cuts the limes in the order in which they appear in the list, starting with the first item. She keeps going until she reached the number of wedges that she needs or until she runs out of limes.

Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function should return the number of limes to cut.

limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
// => 4

Task-3

Li Mei always works until 3pm. Then her employee Dmitry takes over. There are often drinks that have been ordered but are not prepared yet when Li Mei's shift ends. Dmitry will then prepare the remaining juices.

To make the hand-over easier, implement a function remainingOrders which takes the number of minutes left in Li Mei's shift and an array of juices that have been ordered but not prepared yet. The function should return the orders that Li Mei cannot start preparing before the end of her workday.

The time left in the shift will always be greater than 0. The array of juices to prepare will never be empty. Furthermore, the orders are prepared in the order in which they appear in the array. If Li Mei starts to mix a certain juice, she will always finish it even if she has to work a bit longer. If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.

remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);
// => ['Green Garden']
 */

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    switch(name) {
      case 'Pure Strawberry Joy':
        return 0.5;
        break;
      case 'Energizer':
        return 1.5;
        break;
      case 'Green Garden':
        return 1.5;
        break;
      case 'Tropical Island':
        return 3;
        break;
      case 'All or Nothing':
        return 5;
        break;
      default:
        return 2.5;
        break;
    }
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    let sum = 0;
    let flag = 0;
    let i = 0;
    while(sum < wedgesNeeded){
      if(limes[i] == 'small'){sum += 6; flag++;}
      else if(limes[i] == 'medium'){sum += 8; flag++;}
      else if(limes[i] == 'large'){sum += 10; flag++;}
      if(i == (limes.length - 1) || i == limes.length){break;}
      i++;
    }
    return flag;
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    let sum = 0;
    let i = 0;
    let flag = true;
    
    do{
      switch(orders[i]) {
      case 'Pure Strawberry Joy':
        sum += 0.5;
        break;
      case 'Energizer':
        sum += 1.5;
        break;
      case 'Green Garden':
        sum += 1.5;
        break;
      case 'Tropical Island':
        sum += 3;
        break;
      case 'All or Nothing':
        sum += 5;
        break;
      default:
        sum += 2.5;
        break;
    }
      orders.shift();
      if(sum >= timeLeft){
        flag = false;
      }
      
    }while(flag);
    return orders;
  }