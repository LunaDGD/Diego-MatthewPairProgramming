//easy(1)

const input0 = [1, 4, 7, 4, 56, 67, 23, 44];

const even = [];
const odd = [];

function evenOrOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
}

// evenOrOdd(input0);
// console.log(even, odd);

// easy(2)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newPrime = [];
// function isPrime(num) {
//   for (let i = 2; i < num.length; i++)
//     if (num[i] % i === 0) {
//       return false;
//     } else {
//       newPrime.push(num[i]);
//     }
// }
function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(arr.filter(isPrime));

//----MEDIUM(1)----//
const vowels = ["a", "e", "i", "o", "u"];

const vowelChecker = function (char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    console.log(`${char} is a vowel`);
  } else {
    console.log(`${char} is not a vowel`);
  }
};

vowelChecker("b");

//----MEDIUM(2)----//

function anaChecker(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}

console.log(anaChecker("ab cd", "dc ab"));
console.log(anaChecker("Things are good", "Dogs eat ants"));

//----MEDIUM(3)----//
function gcd(num1, num2) {
  if (num2 == 0) {
    return num1;
  } else {
    const remainder = num1 % num2;
    return gcd(num2, remainder);
  }
}

console.log(gcd(336, 360)); // 2
//----MEDIUM(4)----//

const car = {
  make: "toyota",
  model: "camry",
  year: 1984,
  mileage: 1000,
  color: "black",
  driveToWork: function () {
    console.log(
      `Old Mileage: ${this.mileage} | Newmileage: ${this.mileage + 33}`
    );
  },
  driveAroundTheWorld: function () {
    console.log(
      `Old Mileage: ${this.mileage} | Newmileage: ${this.mileage + 24000}`
    );
  },
  runErrands: function () {
    console.log(
      `Old Mileage: ${this.mileage} | Newmileage: ${this.mileage + 30}`
    );
  },
};

car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();

//----HARD----//

function checkbalance(str) {
  let par = 0;
  let curly = 0;
  let square = 0;

  for (let char of str) {
    switch (char) {
      case "(":
        par++;
        break;

      case ")":
        par--;
        break;
      case "{":
        curly++;
        break;

      case "}":
        curly--;
        break;
      case "[":
        square++;
        break;

      case "]":
        square--;
        break;
    }
  }
  return curly === 0 && par === 0 && square === 0;
}

console.log(checkbalance("(hello)"));
