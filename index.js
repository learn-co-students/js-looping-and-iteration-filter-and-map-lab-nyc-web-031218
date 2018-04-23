// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(function(driver) {
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers,revenue) {
  return driversWithRevenueOver(drivers,revenue).map(function(driver){
    return driver.name
  })
}

function exactMatch(array, obj) {
  return array.filter(function(driver){
    let matches = false;
      for (const key in obj) {
        matches = driver[key] === obj[key];
      }
        return matches
  })
}

function exactMatchToList (array, obj) {
  return exactMatch(array, obj).map(function(driver){
    return driver.name
  })
}
