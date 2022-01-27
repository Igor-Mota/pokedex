import React from 'react';
import {
   BrowserRouter as Router,
   Route, 
   Routes,

  } from "react-router-dom";


import Home from '../pages/Home';
import PokemonDetail from '../pages/Pokemon.Detailed';


const MyRoutesPokeApi: React.FC<{}> = (props) => {

  return(  
    
    <Router>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:name_and_id" element={<PokemonDetail  />} />
      </Routes>
    </Router>
  )
}

export default MyRoutesPokeApi