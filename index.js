// Code your solution here:

const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter((driver) => {
        return driver.revenue > revenue;
  });
}


const driverNamesWithRevenueOver = (drivers, revenue) => {
      let  revDrivers = driversWithRevenueOver(drivers, revenue);
      return revDrivers.map(driver => driver.name);
}


const exactMatch = (drivers, match) => {
      return  drivers.filter((driver) =>  {
        return driver.name === match.name || driver.revenue === match.revenue
      });
}

const exactMatchToList = (drivers, match) => {
      let matched =  exactMatch(drivers,match);
  return matched.map((driver)=> {
            return driver.name;

  });
}
