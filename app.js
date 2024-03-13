//Creating An Empty Array

var cars = []
console.log("cars-->" , cars);

//Checking Length 

var length = cars.length
console.log("cars length-->" + length);

//Using Push Method TO Add 5 Different Elements

cars.push("Charade", "Reborn" , "Accord" , "Mark X" , "Dodge Challenger")
console.log("After Push-->" , cars);

//Using Pop Method TO Remove last Element

cars.pop()
console.log("After Pop-->" , cars);

//Using Shift Method TO Remove First Element

cars.shift()
console.log("After Shift-->" , cars);

//Using UnShift Method TO Add New Element In The Beginning

cars.unshift("Khyber")
console.log("After UnShift-->" , cars);

// Final Array

var usercar =prompt("Enter Your Favourite Car")
console.log(usercar);
cars.push(usercar)
console.log(cars);