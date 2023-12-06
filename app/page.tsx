"use client"
import React, { useState, useEffect } from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import useFetch from './CustomHooks/UseFetch'
import Card from "./components/Card"
import PokemonPage from "./components/PokemonPage"

export default function Home() {
  const [isOpenPokedex, setIsOpenPokedex] = useState(false)
  const [clickOnPokemon, setclickOnPokemon] = useState(false)
  const [showPokemonPage, setShowPokemonPage] = useState(false)
  const [querySingle, setQuerySingle] = useState("pokemon/1")
  const [querySeveral, setQuerySeveral] = useState("pokemon/generation/1")
  const dataPokemonSingle = useFetch("https://pokebuildapi.fr/api/v1/" + querySingle, querySingle)
  const dataPokemonSeveral = useFetch("https://pokebuildapi.fr/api/v1/" + querySeveral, querySeveral)

  const openPokedex = () => {
    setIsOpenPokedex(true)
  }

  const closePokedex = () => {
    setIsOpenPokedex(false)
  }

  useEffect(() => {
    // Utilisez un effet pour déclencher l'affichage de PokemonPage après le délai
    // Laisse le temps à l'autre pas de charger
    if (clickOnPokemon) {
      const timeoutId = setTimeout(() => {
        setShowPokemonPage(true);
      }, 200); // Délai en millisecondes

      // Nettoyez le timeout si le composant est démonté avant l'expiration du délai
      return () => clearTimeout(timeoutId);
    }
    // Réinitialisez l'état pour masquer PokemonPage
    setShowPokemonPage(false);
  }, [clickOnPokemon]); // Effectue l'effet chaque fois que clickOnPokemon change

  const handleTakeIDPokemon = (id : string) => {
    setQuerySingle("pokemon/" + id)
    setclickOnPokemon(true)
  }

  const handleReturnDisplayCard = (query : string) => {
    setclickOnPokemon(false)
  }

  const cardsPokemon = dataPokemonSeveral.map((item,i) =>{
    return(
      <Card
        key={i}
        item = {item}
        onTakeID = {handleTakeIDPokemon}
      />
    )
  })

  return (
    <main className="flex items-center justify-center bg-black">
    {isOpenPokedex == false ? (
      <div className="relative text-black text-bold text-5xl">
        <img className="w-full" src="/image/Pokedex_ferme.png" alt="pokedex close" />
        <button onClick={openPokedex} className="rounded-full hover:text-gray-600 py-20 px-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[130px]">
          {"Open"}
        </button>
      </div>
    ) : (
      <div className="relative">
        <img className="w-full" src="/image/Pokedex_haut_rogner.png" alt="pokedex top" />
        <button onClick={closePokedex} className="text-5xl rounded-full hover:text-gray-600 py-12 px-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[430px]">
          {"Close"}
        </button>
        <div className="w-full h-[33rem] bg-gradient-to-b from-blue-200 via-blue-600 to-blue-200 rounded-3xl">
          <Header />
          <div className={"max-w-[35rem] max-h-[21rem] m-4 overflow-y-auto" + (showPokemonPage ? "" : " grid grid-cols-6 gap-1")}>
            {showPokemonPage ? <PokemonPage key={0} item = {dataPokemonSingle} onReturnDisplayCard = {handleReturnDisplayCard}  /> : cardsPokemon }
          </div>
          <Footer />
        </div>
        <img className="w-full" src="/image/Pokedex_bas_rogner.png" alt="pokedex bottom" />
      </div>
    )}
  </main>
  )
}
