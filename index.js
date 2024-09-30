const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function findMatching(driversArray,name) {
    return driversArray.filter(driver => driver.toLowerCase() === name.toLowerCase())
}
function fuzzyMatch(driversArray,name){
    return driversArray.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}
function matchName(driversArray,name){
    return driversArray.filter(drivers => drivers.name.toLowerCase() === name.toLowerCase())
}