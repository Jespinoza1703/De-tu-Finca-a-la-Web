import React,{Fragment} from 'react';
import Producto from './components/Producto';
import Banner from './components/Banner';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <Fragment>
      <Banner/>
      
      <Catalogo/>
      
    </Fragment>
   
  );
}

export default App;
