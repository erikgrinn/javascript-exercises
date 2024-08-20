const findTheOldest = function(people) {
    // get all ages
    let yearsArr = people.map(person => person.yearOfDeath - person.yearOfBirth);
    
    // initial code //
    // yearsArr = []
    // for (let i=0; i<people.length; i++) {
    //     yearsArr.push(people[i].yearOfDeath - people[i].yearOfBirth)
    // }


    // find largest number
    let oldestNum = 0
    let oldIdx = []
    for (let i = 0; i < yearsArr.length; i++) {
        if (yearsArr[i] > oldestNum) {
            oldestNum = yearsArr[i];
            oldIdx = [i]; // Reset oldIdx to the current index only
            console.log(oldIdx)
        } else if (yearsArr[i] === oldestNum) {
            oldIdx.push(i); // Add this index if the age matches the oldestNum
            console.log(oldIdx)
        }
    }

    // initial code //    
    // let oldestNum = 0
    // let oldIdx = []
    // for (let i=0; i<people.length; i++) {
    //     if (yearsArr[i] > oldestNum) {
    //         oldestNum = yearsArr[i]
    //     }
    // }

    let oldestPeopleArr = oldIdx.map(index => people[index]); // Return all people with the oldest age
    return oldestPeopleArr[0]
    let oldestPersonName;
    // oldestPeopleArr.forEach((person) => 
    
};



// Do not edit below this line
module.exports = findTheOldest;

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// console.log(findTheOldest(people))


