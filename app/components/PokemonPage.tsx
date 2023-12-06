import React from 'react'

const PokemonPage = (props : any) => {

    const handleReturnDisplayCard = () => {
        props.onReturnDisplayCard("pokemon/generation/1")
        }

  return (
    <div className="flex flex-col">
        <div className="flex justify-between items-center m-4 text-4xl text-bold">
            <p>{props.item.id}</p>
            <h1>{props.item.name}</h1>
            <button onClick={handleReturnDisplayCard} className='bg-red-700 cursor-pointer hover:text-white'>
                X
            </button>
        </div>
        <div className="flex">
            <div className="flex flex-col text-[18px]">
            <img className="w-52 h-52" src={props.item.image}/>
            <h2>Type: {props.item.apiTypes[0]?.name} {props.item.apiTypes[1]?.name && ` / ${props.item.apiTypes[1]?.name}`}</h2>
            <p>Evolue en : {props.item.apiEvolutions[0]?.name == "none" || props.item.apiEvolutions[0]?.name == undefined ? "Evolution final" : props.item.apiEvolutions[0]?.name}</p>
            </div>
            <div className="">
                <h2 className="text-center text-2xl" >Statistics</h2>
                <div className="flex p-4 text-[18px]">
                    <div className="px-4">
                        <p>HP: {props.item.stats.HP}</p>
                        <p>Attack: {props.item.stats.attack}</p>
                        <p>Defense: {props.item.stats.defense}</p>
                    </div>
                    <div className="px-4">
                        <p>Speed: {props.item.stats.speed}</p>
                        <p>Spe att: {props.item.stats.special_attack}</p>
                        <p>Spe def: {props.item.stats.special_defense}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PokemonPage