// Code your solution here:
function driversWithRevenueOver(arr, num){
  return arr.filter(function(x){
    return x.revenue > num
  })
};

function driverNamesWithRevenueOver(arr, num){
  return driversWithRevenueOver(arr, num).map(function(x){
    return x.name;
  })
};

function exactMatch(arr, thing){
  let matched = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].name === thing.name || thing.revenue === arr[i].revenue){
      matched.push(arr[i])
    }
  }
  return matched;
};

function exactMatchToList(arr, nameOrRevenue){
  return exactMatch(arr, nameOrRevenue).map(function(x){
    return x.name;
  });

};
