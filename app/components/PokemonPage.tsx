import React from "react"
import { ImCross } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

type Stats = {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };

type PokemonItem = {
    id: number;
    name: string;
    image: string;
    apiTypes: {name: string }[];
    apiEvolutions: {name: string }[];
    apiPreEvolution: {name: string};
    stats: Stats;
  };

type PokemonPageProps = {
    key: number | string
    item: PokemonItem
    onReturnDisplayCard: () => void
    nextPokemon: (id: number) => void
    previousPokemon: (id: number) => void
}

const PokemonPage = (props : PokemonPageProps) => {

    const handleReturnDisplayCard = () => {
        props.onReturnDisplayCard()
        }
    
    const handleNextPokemon = () => {
        props.nextPokemon(props.item.id)
        }
    
    const handlePreviousPokemon = () => {
        props.previousPokemon(props.item.id)
        }

  return (
    <div className="flex flex-col">
        <div className="flex justify-between items-center m-4 text-4xl font-bold">
            <p>{props.item.id}</p>
            <h1>{props.item.name}</h1>
            <button onClick={handleReturnDisplayCard} className="cursor-pointer hover:text-white">
                <ImCross />
            </button>
        </div>
        <div className="flex">
            <div className="flex flex-col text-[18px]">
                <Image className="w-52 h-52" src={props.item.image} alt={props.item.name}/>
                <h2> <span className="font-bold">Type:</span> {props.item.apiTypes[0]?.name} {props.item.apiTypes[1]?.name && ` / ${props.item.apiTypes[1]?.name}`}</h2>
                <p><span className="font-bold">Evolution de:</span> {props.item.apiPreEvolution.name == "none" || props.item.apiPreEvolution.name == undefined ? "Aucun" : props.item.apiPreEvolution.name}</p>
                <p><span className="font-bold">Evolue en:</span> {props.item.apiEvolutions[0]?.name == "none" || props.item.apiEvolutions[0]?.name == undefined ? "Evolution final" : props.item.apiEvolutions[0]?.name}</p>
            </div>
            <div className="">
                <h2 className="text-center text-3xl p-2 font-bold" >Statistics</h2>
                <div className="flex p-4 text-[18px] border-2 border-cyan-200 rounded-md">
                    <div className="px-4">
                        <p><span className="font-bold">HP:</span> {props.item.stats.HP}</p>
                        <p><span className="font-bold">Attack:</span> {props.item.stats.attack}</p>
                        <p><span className="font-bold">Defense:</span> {props.item.stats.defense}</p>
                    </div>
                    <div className="px-4">
                        <p><span className="font-bold">Speed:</span> {props.item.stats.speed}</p>
                        <p><span className="font-bold">Spe att:</span> {props.item.stats.special_attack}</p>
                        <p><span className="font-bold">Spe def:</span> {props.item.stats.special_defense}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center m-4 text-4xl text-bold ">
            <button onClick={handlePreviousPokemon} className="cursor-pointer hover:text-white"><IoIosArrowBack /></button>
            <button onClick={handleNextPokemon} className="cursor-pointer hover:text-white"><IoIosArrowForward /></button>
        </div>
    </div>
  )
}

export default PokemonPage