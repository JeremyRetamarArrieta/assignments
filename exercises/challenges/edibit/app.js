
//function that takes two parameters
let count = 0
function myfunction(letter, string){
    //compare letter to string and count how many times letter appears in string
    let look = string.indexOf(letter)
    
    for (let i=0 ; i < string.length; i++){
        if (string[i].value > look)       
        count++
    }
    return count
}
console.log(myfunction("e","aoeieeewe"))

