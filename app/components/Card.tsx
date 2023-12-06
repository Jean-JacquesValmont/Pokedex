import React from 'react'

const Card = (props : any) => {

  const handleTakeID = () => {
    props.onTakeID(props.item.id)
  }

  return (
    <div onClick={handleTakeID} className="text-center shadow-md border-cyan-200 border-2 rounded-lg transform hover:scale-105 transition-transform">
        <img src={props.item.image} alt={"image de " + props.item.name} />
        <h1 className="font-bold text-sm">{props.item.name}</h1>
        {/* <h2>Type1 : {props.item.apiTypes[0]?.name}</h2>
        {props.item.apiTypes[1]?.name == undefined ? "" : <h2>Type2 : {props.item.apiTypes[1]?.name}</h2>}
        <p>Evolue en : {props.item.apiEvolutions[0]?.name == "none" || props.item.apiEvolutions[0]?.name == undefined ? "Evolution final" : props.item.apiEvolutions[0]?.name}</p> */}
    </div>
  )
}

export default Card