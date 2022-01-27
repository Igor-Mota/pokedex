import React,{useState, useRef, useEffect, useMemo} from 'react'
import { jsonToCsv } from '../../utils/jsonToCsv'
import pokemonslist from '../../data/pokemons.json'
import './styles.css'

interface IPokemonShow{
  name:string,
  sprite:string
}

interface Iprops {
  domRef:HTMLDivElement | null
}

const InputSearchAPokemon = ({domRef}:Iprops):JSX.Element => {
  
  const [pokemons_show, setPokemons_show] = useState<Array<IPokemonShow>>([])
  const [pokemons_show_focus, set_pokemons_show_foocus] = useState(false)

  const ulRef = useRef<HTMLUListElement | null>(null)
  const myPokeList =  jsonToCsv(pokemonslist)
  const returnStyles = (i:number, sprite:string|undefined) =>{
    
    if(i === 0 || !sprite){
      return{
        display:'none'
      }
    }else{
      return{}
    }
  }
  function handleShowPokemons(e:React.ChangeEvent<HTMLInputElement>){
    set_pokemons_show_foocus(true)
    const dig = e.target.value.toLocaleLowerCase()
  
    if(dig.length < 1){
      setPokemons_show([])
      return
    }
  
    var regex = new RegExp('^(?!.*'+dig+'.*).+$','gm')
    var returns = myPokeList.replace( regex,'')
    returns = returns.replace(/^(?:[\t ]*(?:\r?\n|\r))+/gm,'')
    var pokemons_arr_control = returns.split('\n')

    var  set_show_pokemons_control:Array<IPokemonShow> = []
    
    pokemons_arr_control.forEach( (el, i) => {
      var temp = el.split(',')
      set_show_pokemons_control.push({
        name:temp[0],
        sprite:temp[1]
      })
    })
    setPokemons_show(set_show_pokemons_control)
  }
  useEffect(() => {
        
    domRef !== null && domRef.addEventListener('click', () =>{
      set_pokemons_show_foocus(false)
    })
    pokemons_show_focus === false && setPokemons_show([])
  },[pokemons_show_focus])

  return(
    <div className='input-container'>
        <div className='input-group'>
        <input type="text"  className='input-search-a-pokemon' 
          onChange={(e) =>{handleShowPokemons(e)}}
          
          />
          <ul className='poke-list' ref={ulRef}>
            {pokemons_show ? pokemons_show.map((el:IPokemonShow,i) => {
   
              return(
                <li key={el.sprite+el.name} style={returnStyles(i,el.sprite)}>
                    <h6>{el.name}</h6>
                  <img src={el.sprite} alt="pokemon sprite" />  
                </li>
              )
             }): <></> }
          </ul>
        </div>
    </div>
  )
}

export default InputSearchAPokemon