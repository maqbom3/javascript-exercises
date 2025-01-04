const findTheOldest = function(people) {
    oldest = null;
    maxAge = 0;
    for (i = 0; i < people.length; i++) {
        if(people[i].yearOfDeath === undefined) {
            age = (new Date().getFullYear()) - people[i].yearOfBirth;
        } else{
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if (age > maxAge) {
            maxAge = age;
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
