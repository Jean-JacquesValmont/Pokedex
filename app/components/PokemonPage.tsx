import React from 'react'

const PokemonPage = (props : any) => {
    console.log("props: ", props)
    console.log("props.item: ", props.item)
    console.log("props.item.name: ", props.item.name)

    const handleReturnDisplayCard = () => {
        props.onReturnDisplayCard("pokemon/generation/1")
        }

  return (
    <div>
        <button onClick={handleReturnDisplayCard} className='cursor-pointer hover:text-white'>X</button>
        <h1>{props.item.name}</h1>
        <img src={props.item.image}/>
        <h2>Type1 : {props.item.apiTypes[0]?.name}</h2>
        {props.item.apiTypes[1]?.name == undefined ? "" : <h2>Type2 : {props.item.apiTypes[1]?.name}</h2>}
        <p>Evolue en : {props.item.apiEvolutions[0]?.name == "none" || props.item.apiEvolutions[0]?.name == undefined ? "Evolution final" : props.item.apiEvolutions[0]?.name}</p>
        <div>
            <h2>Stats:</h2>
            <p>HP: {props.item.stats.HP}</p>
            <p>Attack: {props.item.stats.attack}</p>
            <p>Defense: {props.item.stats.defense}</p>
            <p>Special attack: {props.item.stats.special_attack}</p>
            <p>Special defense: {props.item.stats.special_defense}</p>
            <p>Speed: {props.item.stats.speed}</p>
        </div>
    </div>
  )
}

export default PokemonPage