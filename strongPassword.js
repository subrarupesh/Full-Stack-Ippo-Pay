minimumSteps = (password) => {
    let count = 0;
    
    const digit = /(\d)/;
    const upper = /([A-Z])/;
    const lower = /([a-z])/;
    
    const numDigits = digit.exec(password);
    const numUpper = upper.exec(password);
    const numLower = lower.exec(password);
    
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
