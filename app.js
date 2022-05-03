


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
    if (user == "a" || "e" || "i" || "o" || "u") {
        return console.log("This is a vowel");
    } else {
        return console.log("This is NOT a vowel");
    }
};

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
};

bigNumber();


// // Hard 1 Sammie

