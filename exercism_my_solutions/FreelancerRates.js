//Instructions

/* 
1- A client contacts the freelancer to enquire about their rates. 
The freelancer explains that they work 8 hours a day. However, 
the freelancer knows only their hourly rates for the project. 
Help them estimate a day rate given an hourly rate.

2- Another day, a project manager offers the freelancer to work on
a project with a fixed budget. Given the fixed budget and the 
freelancer's hourly rate, help them calculate the number of days
they would work until the budget is exhausted. The result must be
rounded down to the nearest whole number.

3- Often, the freelancer's clients hire them for projects spanning 
over multiple months. In these cases, the freelancer decides to offer
a discount for every full month, and the remaining days are billed at
day rate. Every month has 22 billable days. Help them estimate their
cost for such projects, given an hourly rate, the number of days the 
project spans, and a monthly discount rate. The discount is always passed
as a number, where 42% becomes 0.42. The result must be rounded up to the
nearest whole number.
*/

export const DAILY_WORK_HOUR = 8;
export const DAYS = 22;
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * DAILY_WORK_HOUR;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * DAILY_WORK_HOUR));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let a = ((numDays % DAYS) * ratePerHour * DAILY_WORK_HOUR) + (((numDays -  (numDays % DAYS)) * ratePerHour * DAILY_WORK_HOUR) * (1 - discount));
  return Math.ceil(a);
}