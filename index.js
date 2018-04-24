// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  const driversRev = drivers.filter(driver => driver.revenue >= rev)
  return driversRev
};

function driverNamesWithRevenueOver(drivers, rev) {
    return driversWithRevenueOver(drivers, rev).map(driver => driver.name)
};

function exactMatch(drivers, obj){
  const driversRev = drivers.filter(driver => driver.revenue === obj.revenue || driver.name === obj.name)
  return driversRev
};

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(driver => driver.name)
};

// function nameToAttributes(drivers) {
//   const newDrivers = drivers.map(driver => {
//     const fullNames = driver.split(" ")
//     return {firstName: fullNames[0], lastName: fullNames[1]}
//   })
// return newDrivers
// };
