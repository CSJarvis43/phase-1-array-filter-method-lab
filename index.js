const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

// function findMatching(array, driver){
//     return array.filter(el => el.toLowerCase() === driver.toLowerCase())

// }

// function fuzzyMatch(array, driver){
//     return array.filter(el => el.toLowerCase() === driver.includes())
// }

// const partialDrivers = drivers.filter(matchDriver)

// function matchDriver(driver){
//   if(driver === drivers.name){
//     console.log(driver)
//     return drivers.name
//   }
// }
// matchDriver('Bobby')

function matchDriver(array, string) {
  let matches = array.filter(function(str) {
    return str.includes(string) === string
  })
  return (matches.length > 0) ? matches: string
}

console.log(matchDriver(drivers, "b"))