function driversWithRevenueOver(driver, revenue) {
  const newDriver = driver.filter(anything => anything.revenue > revenue);
  return newDriver;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDriver = driversWithRevenueOver(drivers, revenue).map(x => x.name);
  return newDriver;
}

function exactMatch(drivers, obj) {
  const newDriver = drivers.filter(x => x.revenue === obj.revenue || x.name === obj.name)
  return newDriver;
}

function exactMatchToList(drivers, obj) {
  const newDriver = exactMatch(drivers, obj).map(x => x.name);
  return newDriver;
}
