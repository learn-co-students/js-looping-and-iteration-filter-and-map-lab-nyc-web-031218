function driversWithRevenueOver(drivers, int) {
  fd = drivers.filter( driver => driver["revenue"] > int );

  return fd;
}

function driverNamesWithRevenueOver(drivers, int) {
  return driversWithRevenueOver(drivers, int).map( function(driver) {
    return driver["name"]
  })
}

function exactMatch(drivers, obj) {
  fd = drivers.filter( driver => driver[Object.keys(obj)[0]] === Object.values(obj)[0] )

  return fd;
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map( function(driver) {
    return driver["name"]
  })
}
