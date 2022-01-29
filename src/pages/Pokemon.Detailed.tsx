import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'

const PokemonDetail: React.FC = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const pokemon_info = location.pathname.replace(/[/][a-z]+[/]/, '')
  const pokemon_id = pokemon_info.replace(/\D+/g, '')
  const pokemon_name = pokemon_info.replace(/\d+/, '')
  
  const imageUrl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon_id}.svg`

  return (
    <div className='container-details'>
      <button className='back-to-home' onClick={() => { navigate('/') }}>
        <BiArrowBack  size={26} color='#000'/>
      </button>
      <div className='container-center'>

        <div className='card-details'>
          <div className='top-side'>

            <img src={imageUrl} alt="Foto do pokemon" className='pokemon-hight-image' />
          </div>
          <div className='bot-side'>
            <h4>{pokemon_name}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PokemonDetail;