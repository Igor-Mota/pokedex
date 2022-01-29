import React, { useEffect, useRef, useState } from "react";
import { useQuery } from 'react-query'
import api from "../services/api";
import Card from "../components/Card";
import './styles.css'
import { IPokemon } from "../interfaces/IPokemon";
import InputSearchAPokemon from "../components/InputSeacrcAPokemon";

const Home = (): JSX.Element => {

  const [ offset, setoffset ] = useState(0)
  var pokemons:Array<IPokemon> = []

  const fetchPokemons = useQuery('pokemons', async (): Promise<IPokemon[]> => {

    const response = await api.get(`?limit=60&offset=${offset}`)
    return response.data.results
  })

  function setConcat(data:Array<any>, state:Array<any>){

    var control = state;
    control = data.concat(control)
    pokemons = control
    // setpokemons(control)
  }

  const containerRef = useRef<HTMLDivElement | null>(null)
  const whistleblowerRef = useRef<HTMLDivElement | null>(null)

  fetchPokemons.isSuccess  && setConcat(fetchPokemons.data,pokemons)

  useEffect(() => {

    const interSectionObserver = new IntersectionObserver( entries  => {
      
      if(entries[0].isIntersecting){

        setoffset((current) => current+60)
      
      }
    })
 
    whistleblowerRef.current !== null && interSectionObserver.observe(whistleblowerRef.current)
    
   return () => {
     interSectionObserver.disconnect()
   }
  },[offset])

  return (

    <div ref={containerRef}>

      <InputSearchAPokemon  domRef={containerRef.current} />

      <div className="container">

        { pokemons.length > 0 ?
         pokemons.map( (pokemon:IPokemon) => {
      
            return <Card key={pokemon.name} pokemon={pokemon}/>}

            ):

            <div>Carregando...</div>
            
            }
            {fetchPokemons.isError && <div> Erro </div>}
      </div>
      <div className="whistleblower" ref={whistleblowerRef} />
    </div>
  )
}
export default Home
