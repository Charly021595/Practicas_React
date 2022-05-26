import React from 'react';
import './assets/css/App.css';

//Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas';


function App() {
  let buttonString = "Ver mas";

  return (
    <div className="App">

      <Header/>

      <Slider 
        title="Bienvenido al Curso de React"
        btn={buttonString}
      />

      <div className="center">
        <Peliculas/>
        
        <Sidebar/>
        <div className="clearfix"></div>
      </div> {/* END DIV CENTER */}
      <Footer/>
    </div>
  );
}

export default App;
