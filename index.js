// Code your solution here:
function driversWithRevenueOver(array, revenue) {
  return array.filter(function(el){
  return el['revenue'] > revenue;
  })
}
function driverNamesWithRevenueOver(array, revenue) {
  return driversWithRevenueOver(array, revenue).map(function(el){
    return el['name']
  })
}
function exactMatch(array, match) {
  let key = Object.keys(match)[0]
  return array.filter(function(el){
    return el[key] === match[key]
  })
}
function exactMatchToList(array, match) {
  return exactMatch(array, match).map(function(el){
    return el['name']
  })
}
