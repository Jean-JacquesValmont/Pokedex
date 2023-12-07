"use client"
import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import useFetch from "./CustomHooks/UseFetch"
import Card from "./components/Card"
import PokemonPage from "./components/PokemonPage"
import Image from 'next/image';

export default function Home() {
  const [isOpenPokedex, setIsOpenPokedex] = useState<boolean>(false)
  const [clickOnPokemon, setclickOnPokemon] = useState<boolean>(false)
  const [showPokemonPage, setShowPokemonPage] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [querySingle, setQuerySingle] = useState<string>("pokemon/1")
  const [querySeveral, setQuerySeveral] = useState<string>("pokemon")
  const dataPokemonSingle = useFetch("https://pokebuildapi.fr/api/v1/" + querySingle, querySingle)
  const dataPokemonSeveral = useFetch("https://pokebuildapi.fr/api/v1/" + querySeveral, querySeveral)
  const pathGeneration : string = "pokemon/generation/"
  const pathType : string = "pokemon/type/"

  const openPokedex = () => {
    setIsOpenPokedex(true)
  }

  const closePokedex = () => {
    setIsOpenPokedex(false)
    setclickOnPokemon(false)
  }

  useEffect(() => {
    if (clickOnPokemon) {
      const timeoutId = setTimeout(() => {
        setShowPokemonPage(true);
      }, 300);

      return () => clearTimeout(timeoutId);
    }

    setShowPokemonPage(false);
  }, [clickOnPokemon]);

  const handleTakeIDPokemon = (id : number) => {
    setQuerySingle("pokemon/" + String(id))
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

  const handleSelectChange = (event : {target : { value: string }}) => {
    console.log(event)
    setSelectedValue(event.target.value)
    setSelectedValue2("")
    setQuerySeveral(event.target.value)
  };

  const handleSelectChangeType = (event : {target : { value: string }}) => {
    setSelectedValue2(event.target.value)
    if (querySeveral.substring(0,12) == "pokemon/type") {
      const newQuerySeveral = selectedValue.slice(0, 12) + "s" + selectedValue.slice(12, 21)
      setQuerySeveral(newQuerySeveral + event.target.value)
    }
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

  const filteredItems = dataPokemonSeveral.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardsPokemonfiltered = filteredItems.map((item, i) => (
    <Card key={i} item={item} onTakeID={handleTakeIDPokemon} />
  ))

  return (
    <main className="flex items-center justify-center bg-black">
    {isOpenPokedex == false ? (
      <div className="relative text-black font-bold text-5xl">
        <Image className="w-full" src="/image/Pokedex_ferme.png" alt="pokedex close" />
        <button onClick={openPokedex} className="rounded-full hover:text-gray-600 py-20 px-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[130px]">
          {"Open"}
        </button>
      </div>
    ) : (
      <div className="relative">
        <Image className="w-full" src="/image/Pokedex_haut_rogner.png" alt="pokedex top" />
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
              : searchTerm != "" ? cardsPokemonfiltered : cardsPokemon }
          </div>
          <div className={"w-[35rem]  " + (showPokemonPage ? "" : "h-24")}>
            {showPokemonPage ? "" 
            : <div className="">
                <div className="px-2 flex justify-between text-[13px] text-center">
                  <div>
                      <h2>Sélectionnez une génération :</h2>
                      <select value={selectedValue} onChange={handleSelectChange}>
                        <option value="pokemon">Tous les pokémons</option>
                        <option value={pathGeneration + "1"}>Géneration 1</option>
                        <option value={pathGeneration + "2"}>Géneration 2</option>
                        <option value={pathGeneration + "3"}>Géneration 3</option>
                        <option value={pathGeneration + "4"}>Géneration 4</option>
                        <option value={pathGeneration + "5"}>Géneration 5</option>
                        <option value={pathGeneration + "6"}>Géneration 6</option>
                        <option value={pathGeneration + "7"}>Géneration 7</option>
                        <option value={pathGeneration + "8"}>Géneration 8</option>
                      </select>
                    </div>
                    <div>
                      <h2>Sélectionnez un type :</h2>
                      <select value={selectedValue} onChange={handleSelectChange}>
                        <option value="pokemon">Tous les types</option>
                        <option value={pathType + "Normal"}>Normal</option>
                        <option value={pathType + "Combat"}>Combat</option>
                        <option value={pathType + "Vol"}>Vol</option>
                        <option value={pathType + "Poison"}>Poison</option>
                        <option value={pathType + "Sol"}>Sol</option>
                        <option value={pathType + "Roche"}>Roche</option>
                        <option value={pathType + "Insecte"}>Insecte</option>
                        <option value={pathType + "Spectre"}>Spectre</option>
                        <option value={pathType + "Acier"}>Acier</option>
                        <option value={pathType + "Feu"}>Feu</option>
                        <option value={pathType + "Eau"}>Eau</option>
                        <option value={pathType + "Plante"}>Plante</option>
                        <option value={pathType + "Électrik"}>Électrik</option>
                        <option value={pathType + "Psy"}>Psy</option>
                        <option value={pathType + "Glace"}>Glace</option>
                        <option value={pathType + "Dragon"}>Dragon</option>
                        <option value={pathType + "Ténébres"}>Ténébres</option>
                        <option value={pathType + "Fée"}>Fée</option>
                      </select>
                    </div>
                    <div>
                      <h2>Sélectionnez un second type :</h2>
                      <select value={selectedValue2} onChange={handleSelectChangeType}>
                        <option value=""></option>
                        <option value="/Normal">Normal</option>
                        <option value="/Combat">Combat</option>
                        <option value="/Vol">Vol</option>
                        <option value="/Poison">Poison</option>
                        <option value="/Sol">Sol</option>
                        <option value="/Roche">Roche</option>
                        <option value="/Insecte">Insecte</option>
                        <option value="/Spectre">Spectre</option>
                        <option value="/Acier">Acier</option>
                        <option value="/Feu">Feu</option>
                        <option value="/Eau">Eau</option>
                        <option value="/Plante">Plante</option>
                        <option value="/Électrik">Électrik</option>
                        <option value="/Psy">Psy</option>
                        <option value="/Glace">Glace</option>
                        <option value="/Dragon">Dragon</option>
                        <option value="/Ténébres">Ténébres</option>
                        <option value="/Fée">Fée</option>
                      </select>
                    </div>
                </div>
                <div className="flex justify-center p-4">
                <input
                  type="text"
                  placeholder="Rechercher par nom..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
              </div>}
          </div>
          <Footer />
        </div>
        <Image className="w-full" src="/image/Pokedex_bas_rogner.png" alt="pokedex bottom" />
      </div>
    )}
  </main>
  )
}
