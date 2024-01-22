const removeFromArray = function(arr, ...myArg) {
    for (let i = 0; i < myArg.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ( myArg[i] === arr[j]){
                arr.splice(j,1);
                j--;
            }
            
        }
        
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
