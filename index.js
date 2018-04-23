// Code your solution here:
function getNames(drivers) {
  const names = drivers.map ( function(driver) { return driver.name; } );
  return names;
}

function driversWithRevenueOver(drivers, revenue) {
  const newArr = drivers.filter ( function(driver) { return driver.revenue > revenue; } );
  return newArr;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const driverObjects = driversWithRevenueOver(drivers, revenue);
  const driverNames = getNames(driverObjects);
  return driverNames;
}

function exactMatch(drivers, attribute) {
  const key = Object.keys(attribute)[0];
  const newArr = drivers.filter ( function(driver) { return driver[key] === attribute[key]; } );
  return newArr;
}

function exactMatchToList(drivers, attribute) {
  const driverObjects = exactMatch(drivers, attribute);
  const driverNames = getNames(driverObjects);
  return driverNames;
}
