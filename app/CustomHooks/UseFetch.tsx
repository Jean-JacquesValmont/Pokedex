import { useState, useEffect } from "react"

type PokemonType = {
  name: string;
  image: string
};

type Stats = {
  HP: number;
  attack: number;
  defense: number;
  speed: number;
  special_attack: number;
  special_defense: number;
};

type PokemonData = {
  id: number;
  name: string;
  image: string;
  apiTypes: PokemonType[]
  apiEvolutions: {name: string }[]
  apiPreEvolution: {name: string}
  stats: Stats
};

const useFetch = (url : string, query : string) => {

    const [dataFetch, setDataFetch] = useState<PokemonData[]>([])

    useEffect(() => {
        
    const fetchData = async () => {
        try {
        const response = await fetch(url);
        const data = await response.json();
        setDataFetch(data);
        } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        }
    };

    fetchData();
    }, [url, query]);

  return (
    dataFetch
  )
}

export default useFetch