var xhr = new XMLHttpRequest()
var container = document.getElementById("container")

xhr.onreadystatechange = function(){
    if(xhr.status === 200 && xhr.readyState === 4){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData)
        listDataToDOM(objects.pokemon[0])
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

// //run through pokemon api and get different pokemon
// function listDataToDOM(pokemonArray){
//     for( var i ; i < pokemonArray; i++){
        
//         createPokemon()
//     }
// }

// //separate pokemon to single objects

// //apend html add pokemon to html
// function createPokemon(){
//     container.appendChild("h1", pokemonArray)
// }