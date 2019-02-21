import React from 'react';
import Name from './Name.js';

const App = () => {
  const superHeros = ["Hulk", "Wolverine", "Spiderman", "Deadpool", "Punisher"]

  // const mappedHeros = superHeros.map((superHero, i) => {
    // return <h3>{i+1}: {superHero}</h3>
  // })
    const mappedHerosComponents = superHeros.map((superHero, i) => <Name superHero = {superHero} key ={i}/>)
  return(
    <div>
      <h1>Mapping heros in React .map</h1>
      { mappedHerosComponents }
    </div>
  )
} 
export default App