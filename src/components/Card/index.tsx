import React from "react";
import './styles.css'
import {useNavigate} from 'react-router-dom'
import { useQuery } from 'react-query'

import axios from "axios";



interface IPokemonProps {
  pokemon: {
    name: string
    url: string
  }
}

const Card = ({ pokemon }: IPokemonProps): JSX.Element => {

  var navigate = useNavigate();

  const { data, isSuccess } = useQuery(`pokemon/${pokemon.name}`, async () => {
    const response = await axios.get(pokemon.url)
    return response.data
  })
 
  if (isSuccess) {
    return (
      <div className="card">
          <button 
              onClick={() => {
           
                navigate(`detail/${data.id+pokemon.name}`)
              }}
            >
        <div className="card-image" >
          {data?.sprites && <img src={data.sprites.front_shiny} alt="foto do ditto" />}
        </div>
        <div>
          <div className="line" />
          <ul>
          
              <li>{pokemon.name}</li>
          </ul>
          <div className="line" />
        </div>
        <div></div>
            </button>
      </div>
    )
  }
  return (

    <></>
  )
}

export default Card