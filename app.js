


// Easy 1 Sammie
const numbers = [2, 4, 7, 11, 15, 16]
let odd = numbers.filter(n => n % 2);
let even = numbers.filter(n => n % 2 === 0);

console.log(odd);
console.log(even);

// /Easy 2 Jalynn
function checkPrime(numArray) {
    const primeNumber = numArray.filter(output => {
        if (output <= 1) {
            return false;
        } else {
            for (let i = 2; i < output; i++) {
                if (output % i == 0) {
                    return false;
                }
            }
            return true;
        }
    });
    console.log(`Prime number array:`, primeNumber);
};


// Medium 1 Sammie
let user = prompt("Type a Letter");
function vowelChecker(user) {
    if (user == "a") {
        return console.log("This is a vowel");
    } else if (user === "e") {
        return console.log("This is a vowel");
    } else if (user === "i") {
        return console.log("This is a vowel");
    } else if (user === "o") {
        return console.log("This is a vowel");
    } else if (user === "u") {
        return console.log("This is a vowel");
    } else {
        console.log("This is NOT a vowel")
    }

    vowelChecker(user);


    // //Medium 2 Jalynn

    // function anagram(x, z) {
    //     let len1 = x.length;
    //     let len2 = z.length;
    //     if (len1 !== len2) {
    //         console.log('Invalid Input');
    //         return
    //     }
    //     let str1 = x.split('').sort().join('');
    //     let str2 = z.split('').sort().join('');
    //     if (str1 === str2) {
    //         console.log("True");
    //     } else {
    //         console.log("False");
    //     }
    // }
    // anagram("children", "nerdlihc")

    // Medium 3 Sammie
    let num1 = prompt("Choose a 3 digit number");
    let num2 = prompt("Choose a smaller 3 digit number");
    let y = num1;
    let x = num2;
    let quotient = Math.floor(y / x);
    let remainder = y % x;

    function bigNumber() {
        if (remainder === 0) {
            alert(`${quotient}`)
        } else if (remainder >= 1) {
            alert(`Biggest number is ${quotient} and remainder is ${remainder}`)
        } else {
            alert("Try Again")
        }
    }
    bigNumber();
};


//Medium 4 Jalynn
const car = {
    Make: "Toyota", Model: "Cressida", Year: "1986", Mileage: 10000, Color: "Brown",
    driveToWork: function () {
        let oldMileage = this.Mileage; this.Mileage += 20;
        console.log(`oldMileage:${oldMileage}| newMileage: ${this.Mileage}`);
    },
    driveAroundTheWorld: function () {
        let oldMileage = this.Mileage; this.Mileage += 30000;
        console.log(`oldMileage:${oldMileage}| newMileage: ${this.Mileage}`);
    },
    runErrands: function () {
        let oldMileage = this.Mileage; this.Mileage += 15;
        console.log(`oldMileage:${oldMileage}| newMileage: ${this.Mileage}`);
    }
}
car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();


// Hard 1 Sammie 
let text = prompt("Use brackets. Type a sentence inside of the sentence.");
let result1 = text.includes("{, }");
let result2 = text.includes("[, ]");
let result3 = text.includes("(, )");
function bracketPlay(text) {
    if (result1 === true) {
        alert(true)
    } else if (result2 === true) {
        alert(true)
    } else if (result3 === true) {
        alert(true)
    } else {
        alert(false)
    }
};

bracketPlay(string);