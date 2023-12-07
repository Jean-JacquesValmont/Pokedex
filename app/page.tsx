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
  const [selectedValue, setSelectedValue] = useState('');
  const [querySingle, setQuerySingle] = useState("pokemon/1")
  const [querySeveral, setQuerySeveral] = useState("pokemon")
  const dataPokemonSingle = useFetch("https://pokebuildapi.fr/api/v1/" + querySingle, querySingle)
  const dataPokemonSeveral = useFetch("https://pokebuildapi.fr/api/v1/" + querySeveral, querySeveral)

  const openPokedex = () => {
    setIsOpenPokedex(true)
  }

  const closePokedex = () => {
    setIsOpenPokedex(false)
    setclickOnPokemon(false)
  }

  useEffect(() => {
    // Utilisez un effet pour déclencher l'affichage de PokemonPage après le délai
    // Laisse le temps à l'autre pas de charger
    if (clickOnPokemon) {
      const timeoutId = setTimeout(() => {
        setShowPokemonPage(true);
      }, 300); // Délai en millisecondes

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

  const handleReturnDisplayCard = () => {
    setclickOnPokemon(false)
  }

  const handleNextPokemon = (id : number) => {
    if (id < 898) {
    setQuerySingle("pokemon/" + String(id + 1))
    }
  }

  const handlePreviousPokemon = (id : number) => {
    if (id > 1) {
      setQuerySingle("pokemon/" + String(id -1))
    }
    
  }

  // Fonction pour gérer le changement de sélection
  const handleSelectChange = (event : any) => {
    setSelectedValue(event.target.value)
    setQuerySeveral(event.target.value)
  };

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
      <div className="relative text-black font-bold text-5xl">
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
          <div className={"max-w-[35rem] m-4 overflow-y-auto " + (showPokemonPage ? "max-h-[28rem] " : "max-h-[21rem] grid grid-cols-6 gap-2")}>
            {showPokemonPage ? 
              <PokemonPage key={0} 
              item = {dataPokemonSingle} 
              onReturnDisplayCard = {handleReturnDisplayCard}
              nextPokemon = {handleNextPokemon}
              previousPokemon = {handlePreviousPokemon}
              /> 
              : cardsPokemon }
          </div>
          <div className={"w-[35rem]  " + (showPokemonPage ? "" : "h-24")}>
            {showPokemonPage ? "" 
            : <div className="px-2 flex justify-between">
                <div>
                  <h2>Sélectionnez une génération :</h2>
                  <select value={selectedValue} onChange={handleSelectChange}>
                    <option value="pokemon">Tous les pokémons</option>
                    <option value="pokemon/generation/1">Géneration 1</option>
                    <option value="pokemon/generation/2">Géneration 2</option>
                    <option value="pokemon/generation/3">Géneration 3</option>
                    <option value="pokemon/generation/4">Géneration 4</option>
                    <option value="pokemon/generation/5">Géneration 5</option>
                    <option value="pokemon/generation/6">Géneration 6</option>
                    <option value="pokemon/generation/7">Géneration 7</option>
                    <option value="pokemon/generation/8">Géneration 8</option>
                  </select>
                </div>
                <div>
                  <h2>Sélectionnez un type :</h2>
                  <select value={selectedValue} onChange={handleSelectChange}>
                    <option value="pokemon">Tous les types</option>
                    <option value="pokemon/type/Normal">Normal</option>
                    <option value="pokemon/type/Combat">Combat</option>
                    <option value="pokemon/type/Vol">Vol</option>
                    <option value="pokemon/type/Poison">Poison</option>
                    <option value="pokemon/type/Sol">Sol</option>
                    <option value="pokemon/type/Roche">Roche</option>
                    <option value="pokemon/type/Insecte">Insecte</option>
                    <option value="pokemon/type/Spectre">Spectre</option>
                    <option value="pokemon/type/Acier">Acier</option>
                    <option value="pokemon/type/Feu">Feu</option>
                    <option value="pokemon/type/Eau">Eau</option>
                    <option value="pokemon/type/Plante">Plante</option>
                    <option value="pokemon/type/Électrik">Électrik</option>
                    <option value="pokemon/type/Psy">Psy</option>
                    <option value="pokemon/type/Glace">Glace</option>
                    <option value="pokemon/type/Dragon">Dragon</option>
                    <option value="pokemon/type/Ténébres">Ténébres</option>
                    <option value="pokemon/type/Fée">Fée</option>
                  </select>
                </div>
              </div>}
          </div>
          <Footer />
        </div>
        <img className="w-full" src="/image/Pokedex_bas_rogner.png" alt="pokedex bottom" />
      </div>
    )}
  </main>
  )
}
