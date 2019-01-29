let counter = 0 
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (i=0; i< officeItems.length; i++){

    if (officeItems[i] === "computer"){
        counter++;
        
        
    }
}
console.log(counter)


let count2 = 0

var peoplearray = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for ( i = 0; i < peoplearray.length; i++){
    if (peoplearray[i].age > 18){
        console.log(peoplearray[i].name + " old enough");
    } else {
        console.log(peoplearray[i].name + " not old enough")
    }
}
