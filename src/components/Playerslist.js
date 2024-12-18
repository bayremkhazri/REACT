import React from 'react'
import players from '../DATA'
import Player from './Player'
const Playerslist = () => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>

{players.map((joueur, index) => (
        <Player key={index} {...joueur} /> 
      ))}
    </div>

 )
}






export default Playerslist
