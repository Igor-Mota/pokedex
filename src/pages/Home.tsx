import React, { useRef } from "react";
import { useQuery } from 'react-query'
import api from "../services/api";
import Card from "../components/Card";
import './styles.css'
import { IPokemon } from "../interfaces/IPokemon";
import InputSearchAPokemon from "../components/InputSeacrcAPokemon";



const Home = (): JSX.Element => {

  const fetchPokemons = useQuery('pokemons', async (): Promise<IPokemon[]> => {
    const response = await api.get('?limit=60')
    return response.data.results
  })
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (

    <div ref={containerRef}>

      <InputSearchAPokemon  domRef={containerRef.current} />

      <div className="container">

        {fetchPokemons.isSuccess ?
          fetchPokemons.data.map( (pokemon:IPokemon) => {
      
            return <Card key={pokemon.name} pokemon={pokemon}/>}

            ):
            <div>Carregando...</div>
            }
            {fetchPokemons.isError && <div> Erro </div>}
      </div>
    </div>
  )
}

export default Home;