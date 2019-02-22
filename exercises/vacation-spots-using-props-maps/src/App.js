import React from 'react'
import Place from './Place.js'

const App = () =>{

    const vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]

      const mappedPlaces = vacationSpots.map((place , i)=> <Place place ={place.place} price={place.price} timeToGo={place.timeToGo}/>)
      
    return(
        <div>
            {mappedPlaces}
        </div>
    )
}

export default App