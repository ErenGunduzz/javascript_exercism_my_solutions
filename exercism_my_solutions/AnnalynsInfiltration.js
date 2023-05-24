/* 
In this exercise, implement the quest logic for a new
RPG game a friend is developing. 
Main character Annalyn.
She will try to find and free 
her best friend, optionally taking her dog on this quest.

Having found the kidnappers, Annalyn considers which of 
the following actions she can engage in:

Fast attack: a fast attack can be made if the knight is sleeping,
as it takes time for him to get his armor on, so he will be vulnerable.
Spy: the group can be spied upon if at least one of them is awake. 
Otherwise, spying is a waste of time.
Signal prisoner: the prisoner can be signalled using bird sounds 
if the prisoner is awake and the archer is sleeping, as archers 
are trained in bird signaling so they could intercept the message.
Free prisoner: Annalyn can try sneaking into the camp to free the 
prisoner. 

    -If Annalyn has her pet dog with her she can rescue the prisoner 
    if the archer is asleep. The knight is scared of the dog and 
    the archer will not have time to get ready before Annalyn and 
    the prisoner can escape.
    -If Annalyn does not have her dog then she and the prisoner 
    must be very sneaky! Annalyn can free the prisoner if the 
    prisoner is awake and the knight and archer are both sleeping, 
    but if the prisoner is sleeping they can't be rescued: the prisoner 
    would be startled by Annalyn's sudden appearance and wake up the 
    knight and archer.


//INSTRUCTIONS 

1- Implement a function named canExecuteFastAttack that takes a 
boolean value which indicates if the knight is awake. 
This function returns true if the 'Fast Attack' action is 
available based on the state of the character. 
Otherwise, returns false:

const knightIsAwake = true;
canExecuteFastAttack(knightIsAwake);
// => false

2- Implement a function named canSpy that takes three boolean values, 
indicating if the knight, archer and the prisoner, respectively, are awake. 
The function returns true if the 'Spy' action is available based on the 
state of the characters. Otherwise, returns false:

const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
// => true

3- Implement a function named canSignalPrisoner that takes two boolean 
values, indicating if the archer and the prisoner, respectively, are awake. 
The function returns true if the 'Signal Prisoner' action is available based 
on the state of the characters. Otherwise, returns false:

const archerIsAwake = false;
const prisonerIsAwake = true;
canSignalPrisoner(archerIsAwake, prisonerIsAwake);
// => true

4- Implement a function named canFreePrisoner that takes four boolean values. 
The first three parameters indicate if the knight, archer and the prisoner, 
respectively, are awake. The last parameter indicates if Annalyn's pet dog 
is present. The function returns true if the 'Free Prisoner' action is 
available based on the state of the characters and Annalyn's pet dog presence. 
Otherwise, it returns false:

const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;
canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
// => false
*/


/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
export function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake){
      return false;
    }
    else{return true;}
  }
  
  /**
   * A useful spy captures information, which they can't do if everyone's asleep.
   *
   * @param {boolean} knightIsAwake
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can spy on someone.
   */
  export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if(knightIsAwake || archerIsAwake || prisonerIsAwake){
      return true;
    }
    else{return false;}
  }
  
  /**
   * You'll get caught by the archer if you signal while they're awake.
   *
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   *
   * @returns {boolean} Whether or not you can send a signal to the prisoner.
   */
  export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if(archerIsAwake == false && prisonerIsAwake == true){return true;}
    else{return false;}
  }
  
  /**
   * The final stage in the plan: freeing Annalyn's best friend.
   *
   * @param {boolean} knightIsAwake
   * @param {boolean} archerIsAwake
   * @param {boolean} prisonerIsAwake
   * @param {boolean} petDogIsPresent
   *
   * @returns {boolean} Whether or not you can free Annalyn's friend.
   */
  export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
  ) {
    if(petDogIsPresent && archerIsAwake == false){return true;}
    else if(petDogIsPresent == false && prisonerIsAwake && archerIsAwake == false && knightIsAwake == false){return true;}
    else{return false;}
  }

