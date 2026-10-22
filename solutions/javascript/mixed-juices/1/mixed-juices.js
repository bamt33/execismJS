// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
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
  let wedges = 0;
  let itemCount = 0;
  while (itemCount < limes.length) {
    if (wedges >= wedgesNeeded) {
      return itemCount;
    }
    switch (limes[itemCount]) {
      case 'small':
        wedges += 6;
        break;
      case 'medium':
        wedges += 8;
        break;
      case 'large':
        wedges += 10;
        break;
    }
    itemCount++;
  };
  return itemCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let remaining = timeLeft;
  let restOfOrders = orders;
  while (remaining > 0) {
    if (restOfOrders.length === 0){
      return restOfOrders;
    }
    
    switch (restOfOrders[0]) {
    case 'Pure Strawberry Joy':
      remaining -= 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      remaining -= 1.5;
      break;
    case 'Tropical Island':
      remaining -= 3;
      break;
    case 'All or Nothing':
      remaining -= 5;
      break;
    default:
      remaining -= 2.5;
    }

    restOfOrders.shift();
  }
  return restOfOrders;
}
