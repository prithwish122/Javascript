var createCounter = function(n) {
    let currentCount=n-1;
    return function() {
        currentCount++;
        return currentCount;
        
    };
};
