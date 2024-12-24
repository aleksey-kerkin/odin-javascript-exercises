const findTheOldest = function (arr) {
  const oldest = arr.sort((a, b) => {
    if (!a.yearOfDeath) {
      a.yearOfDeath = new Date().getFullYear();
    }
    if (!b.yearOfDeath) {
      b.yearOfDeath = new Date().getFullYear();
    }
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
