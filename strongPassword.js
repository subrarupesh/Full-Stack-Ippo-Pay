minimumSteps = (password) => {
    let count = 0;
    
    let digit = /(\d)/;
    let upper = /([A-Z])/;
    let lower = /([a-z])/;
    
    let numDigits = digit.exec(password);
    let numUpper = upper.exec(password);
    let numLower = lower.exec(password);
    
    if(!numDigits) {
        count++;
    }
    
    if(!numUpper) {
        count++;
    }
    
    if(!numLower) {
        count++;
    }
    
    if(count + password.length < 6) {
        count = count + 6 - (count + password.length);
    }
    return count;
}

console.log(minimumSteps("a"));
console.log(minimumSteps("aA1"));
console.log(minimumSteps("1337C0d3"));
