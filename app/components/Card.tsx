import React from 'react'

type PokemonItem = {
  id: number;
  name: string;
  image: string;
};

type CardProps = {
  key: string | number
  item: PokemonItem
  onTakeID: (id: number) => void
}

const Card = (props : CardProps) => {

  const handleTakeID = () => {
    props.onTakeID(props.item.id)
  }

  return (
    <div onClick={handleTakeID} className="cursor-pointer text-center shadow-md border-cyan-200 border-2 rounded-lg transform hover:scale-105 transition-transform">
        <img src={props.item.image} alt={"image de " + props.item.name} />
        <h1 className="font-bold text-sm">{props.item.name}</h1>
    </div>
  )
}

export default Card