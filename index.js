// Code your solution here:


function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, attribute){
  return drivers.filter(function(driver){
    //here we want to then iterate through each object and check the attribute keys and match them
    for(const key in attribute){
      matches = driver[key] ===attribute[key];
    }
    return matches
  });
}


function exactMatchToList(drivers,attribute){
  return exactMatch(drivers, attribute)
    .map(function(driver){
      return driver.name
    })
}
