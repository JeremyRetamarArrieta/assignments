//let = input = "bookkeeper larry";
//Expected Output: "bokepr lay"

// function removeDup(input) {
//     let value = '';
//     for (let i=0; i < input.length; i++){
//         if (input.lastIndexOf((input)[i]) == input.indexOf(input[i])) {
//             value += input[i];
//         }
//     }
//     return value;
// }

// console.log(removeDup("banana"));

function removeDup(input){
    var empty='';
    for (var i=0; i<input.length; i++){
        if (empty.indexOf(input[i]) == -1){
            empty += input[i];
        }
    }
    return empty;
}
console.log(removeDup('bookkeeper larry'));