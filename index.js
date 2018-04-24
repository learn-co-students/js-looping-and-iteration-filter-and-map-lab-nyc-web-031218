// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) { return driver.revenue > revenue; });
}

function  driverNamesWithRevenueOver (drivers, revenue) {
  newDrivers = drivers.filter(function (driver) { return driver.revenue > revenue; });
  return newDrivers.map (function (driver) { return driver.name });
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function (driver) {
    let matched = false;

    for (const key in attribute) {
      matched = driver[key] === attribute[key];
    };

    return matched;
  });
}

function exactMatchToList(drivers, attribute) {
  newDrivers = drivers.filter(function (driver) {
    let matched = false;

    for (const key in attribute) {
      matched = driver[key] === attribute[key];
    };

    return matched;
  });

  return newDrivers.map (function (driver) { return driver.name });
}
