import React from 'react'

const Card = (props : any) => {

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