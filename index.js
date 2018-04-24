// Code your solution here:

function driversWithRevenueOver (list, revenue) {
  return list.filter(function (driver) {
    // debugger
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver (list, revenue) {
  return driversWithRevenueOver(list, revenue).map(
    function (driver) {
      return driver.name;
    })
}

function exactMatch (list, obj) {
  return list.filter(function (driver) {
    for (const k in driver) {
      if (obj[k] === driver[k]) {
        return driver
      }
    }
  })
}

function exactMatchToList (list, obj) {
  return exactMatch (list, obj).map(
    function (driver) {
      return driver.name
    }
  )
}
