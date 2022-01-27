import * as React from 'react';


import Home from './pages/Home'
import MyRoutesPokeApi from './routes/routes';

import {
  
  useQuery,
  QueryClient,
  QueryClientProvider,
} from 'react-query'



const queryClient = new QueryClient();

function App():JSX.Element{

 return(
  <QueryClientProvider client={queryClient}>
    <MyRoutesPokeApi />
  </QueryClientProvider>
 )
}



export default App;
