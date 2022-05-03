const numbers = [2, 4, 7, 11, 15, 16]
oddArray = [7, 11, 15]
evenArray = [2, 4, 16]
function odd() {
    console.log()
}


//Easy 2 Jalynn
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

checkPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

           
