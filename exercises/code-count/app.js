// Write a function that returns the number of times that the string "code" 
//appears anywhere in the given string, except we'll accept any letter for "d", so 
//"cope" and "cooe" would also count.


function countCode(string) {
    var count = 0;
    for(var i = 0; i < string.length; i++){
        if (string[i] + string[i +1] + string[i + 3] === "coe"){
            count++
        }
    }
    return count;
}

console.log(countCode("addcodesldk"))
console.log(countCode("codexxcode"))