// Code your solution here:

function driversWithRevenueOver(array, revenue){
  //[1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
  return array.filter(function (element){
    return element.revenue > revenue;
  });

}

function driverNamesWithRevenueOver(array, revenue){
  return array.filter(function (element){
    return element.revenue > revenue;
  }).map(function(element){
    return element.name;
  });



}



let drivers = [
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }];

function exactMatch(array, obj){

  return array.filter(function(element){

    for (let key in element){
      return obj.key === element.key
    }
    // debugger;


  });
}

exactMatch(drivers, {name: 'Sally'})

function exactMatchToList(){
  return ;
}
