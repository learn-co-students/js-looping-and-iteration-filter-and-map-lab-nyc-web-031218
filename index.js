// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(driver => driver.revenue > parseInt(revenue));
}

function driverNamesWithRevenueOver(drivers, revenue){
//  return drivers.filter(driver => { if (driver.revenue > parseInt(revenue)) return driver.name });
  return driversWithRevenueOver(drivers,revenue).map(driver => driver.name);
}

function exactMatch(drivers, attribute){
  return drivers.filter(driver => driver[Object.keys(attribute)[0]] === attribute[Object.keys(attribute)[0]]);
}

function exactMatchToList(drivers, attribute){
  return exactMatch(drivers,attribute).map(driver => driver.name);
}

// // driverNamesWithRevenueOver() - This function works the same way
// as driversWithRevenueOver(). The difference is that it returns an array
// of strings representing the name of each driver who has a revenue greater
// than the specified amount. For example, driverNamesWithRevenueOver(drivers, 2000)
// will return ['Sammy'], as Sammy is the name of the matching driver object with a
//  revenue greater than 2000.

// // exactMatch() - This function takes an array of driver objects as the first
// argument and a JavaScript object that specifies an attribute and corresponding
// value. For example, exactMatch(drivers, { revenue: 3000 }) will return all drivers
// whose revenue attribute equals 3000, and exactMatch(drivers, { name: 'Bob' }) will
// return all drivers whose name attribute equals Bob.

// // exactMatchToList() - This function works the same way as the exactMatch()
// function, except that instead of returning an array of driver objects, it
// returns an array of strings with each element in the array corresponding to the
//  matching driver's name. For example, exactMatchToList(drivers, { revenue: 2000 })
//   will return ['Sammy'], as Sammy is the name of the matching driver object.
