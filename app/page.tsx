"use client"
import React, { useState } from "react"
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [isOpenPokedex, setIsOpenPokedex] = useState(false)

  const openPokedex = () => {
    setIsOpenPokedex(true)
  }

  const closePokedex = () => {
    setIsOpenPokedex(false)
  }

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
        <div className="h-[33rem] bg-gradient-to-b from-blue-200 via-blue-600 to-blue-200 rounded-3xl">
          <Header />
          <p className="text-center">Test</p>
          <Footer />
        </div>
        <img className="w-full" src="/image/Pokedex_bas_rogner.png" alt="pokedex bottom" />
      </div>
    )}
  </main>
  )
}
