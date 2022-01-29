import  React from 'react';

import MyRoutesPokeApi from './routes/routes';

import {
  
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
