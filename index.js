// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter(function(driver) {
    return driver.revenue > num;
  });
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers, num).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, object) {
  key = Object.keys(object)
  return drivers.filter(function(driver) {
    return driver[key] === object[key]
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver) {
    return driver.name;
  });
}
