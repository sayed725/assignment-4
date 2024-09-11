


function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }

    for (let nam of name) {
        if (nam >= '0' && nam <= '9') {
            return true;
        }
    }
    return false;
}



console.log(checkDigitsInName('raj123'))
console.log(checkDigitsInName('n9ayeem'))
console.log(checkDigitsInName('e1mu3'))

console.log(checkDigitsInName('suman'))
console.log(checkDigitsInName('name2024'))
console.log(checkDigitsInName('!@#'))
console.log(checkDigitsInName(["Raj"]))