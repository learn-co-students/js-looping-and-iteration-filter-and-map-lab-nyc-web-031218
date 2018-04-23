// Code your solution here:
function driversWithRevenueOver(array, amount) {
  return array.filter(function (driver) {
    return driver.revenue > amount
  })
}
function driverNamesWithRevenueOver(array, amount) {
  return driversWithRevenueOver(array, amount)
    .map(function (driver) {
      return driver.name;
  });
}
function exactMatch(array, name) {
  return array.filter(function (driver) {
    let matchArray = [];
    for (const key in name) {
      matchArray = driver[key] === name[key];
    }
    return matchArray
  })
}

function exactMatchToList(array, amount) {
  return exactMatch(array, amount)
    .map(function (driver) {
      return driver.name;
  });
}
