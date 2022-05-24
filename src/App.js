import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes

import MiComponente from "./components/MiComponente";
import Peliculas from './components/Peliculas';

function HolaMundo(nombre, edad){
  let presentacion = ( 
    <div>
        <h2>Hola, soy {nombre}</h2>
        <h3>Tengo {edad} años</h3>
    </div> 
  );
  return presentacion;
}

function App() {
  let nombre = "Carlos Martinez";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Bienvenido.
        </p>
        {HolaMundo(nombre, 27)}

        <section className='componentes'>

        <MiComponente />
        <Peliculas/>
      </section>
        
      </header>
    </div>
  );
}

export default App;
