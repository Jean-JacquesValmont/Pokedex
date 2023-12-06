import React from 'react'

const PokemonPage = (props : any) => {

    const handleReturnDisplayCard = () => {
        props.onReturnDisplayCard("pokemon/generation/1")
        }

  return (
    <div>
        <p onClick={handleReturnDisplayCard}>X</p>
        pokemonPage
    </div>
  )
}

export default PokemonPage