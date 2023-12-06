import React, { useState, useEffect } from 'react'

const useFetch = (url : string, query : string) => {

    const [dataFetch, setDataFetch] = useState([])

    useEffect(() => {
        
    const fetchData = async () => {
        try {
        const response = await fetch(url);
        const data = await response.json();
        setDataFetch(data);
        } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        }
    };

    fetchData();
    }, [query]);

  return (
    dataFetch
  )
}

export default useFetch