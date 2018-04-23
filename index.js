// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver["revenue"] > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let results = drivers.filter(driver => driver["revenue"] > revenue);
  return results.map(result => result["name"]);
}

function exactMatch(drivers, object) {
  return drivers.filter( driver => driver[Object.keys(object)] === Object.values(object)[0]  );
}

function exactMatchToList(drivers, object) {
  let results = exactMatch(drivers, object);
  return results.map( result => result["name"] )
}
