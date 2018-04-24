// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter((element) => {return element.revenue > revenue})
}

function driverNamesWithRevenueOver(driver, revenue) {
  arr = driversWithRevenueOver(driver, revenue)
  return arr.map((element) => {return element.name})
}

function exactMatch(driver, obj){
  return driver.filter((element) => {
    for (const key in obj){
      bool = element[key] === obj[key]
    }
    return bool
  }
)
}

function exactMatchToList(driver, obj){
  arr = exactMatch(driver, obj)
  return arr.map((element) => {
      return element.name
    }
  )
}
