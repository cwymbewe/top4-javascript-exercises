const sumAll = function(min, max) {
let sum = 0;
    if(min < 0 || max < 0) { return `ERROR`};

    if(min < max && min > 0){
        for (let i = min; i <= max; i++) {
            sum += i;
        }
    }else if(min > max && max > 0){
        for (let j = max; j <= min ; j++) {
            sum += j;
        }
    }

    if(typeof min !== 'number' || typeof max !== 'number') {
        return "ERROR";
    }

return sum;
};

// Do not edit below this line
module.exports = sumAll;
