"use client"
import React, { useState } from "react"

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
    {isOpenPokedex ? (
      <div className="relative text-black text-bold text-5xl">
        <img className="w-full" src="/image/Pokedex_ferme.png" alt="Description de l'image" />
        <button onClick={closePokedex} className="rounded-full hover:text-gray-500 py-20 px-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[130px]">
          {"Close"}
        </button>
      </div>
    ) : (
      <div className="relative text-black text-bold text-5xl">
        <img className="w-full" src="/image/Pokedex_ferme.png" alt="Description de l'image" />
        <button onClick={openPokedex} className="rounded-full hover:text-gray-500 py-20 px-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[130px]">
          {"Open"}
        </button>
      </div>
    )}
  </main>
  )
}
