// Code your solution here:
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(driver => driver.revenue > rev)
}

function driverNamesWithRevenueOver(drivers, rev) {
  // let newArr = drivers.filter(driver => driver.revenue > rev)
  let newArr = driversWithRevenueOver(drivers, rev)
  return newArr.map(driver => driver.name)
}

function exactMatch(drivers, match) {
  let newArr =  drivers.filter(driver => driver.revenue === match.revenue || driver.name === match.name)
  return newArr
}

function exactMatchToList(drivers, match) {
  let newArr = exactMatch(drivers, match)
  let final = newArr.map(driver => driver.name)
  return final
}
