"use client"
import React, { useState } from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import useFetch from './CustomHooks/UseFetch'
import Card from "./components/Card"

export default function Home() {
  const [isOpenPokedex, setIsOpenPokedex] = useState(false)
  const dataPokemon = useFetch('https://pokebuildapi.fr/api/v1/pokemon/generation/1')
  console.log(dataPokemon)

  const openPokedex = () => {
    setIsOpenPokedex(true)
  }

  const closePokedex = () => {
    setIsOpenPokedex(false)
  }

  const cardsPokemon = dataPokemon.map(item =>{
    return(
      <Card
        item = {item}
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
          <div className="max-w-[35rem] max-h-[21rem] m-4 grid grid-cols-6 gap-1 overflow-y-auto">
            {cardsPokemon}
          </div>
          <Footer />
        </div>
        <img className="w-full" src="/image/Pokedex_bas_rogner.png" alt="pokedex bottom" />
      </div>
    )}
  </main>
  )
}
