import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importar componentes
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas';
import Error from "./components/Error";
import Home from './components/Home';

class Router extends Component{

    render(){
        return (

            <BrowserRouter>
                <Header/>

                <div className="center">
                    {/* CONFIGURAR RUTAS Y PAGINAS */}
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route exact path="/ruta-prueba" element={<SeccionPruebas />} />
                        <Route exact path="/segunda-ruta" element={<MiComponente />} />
                        
                        <Route exact path="/pruebas"  render={() => <Error/>}/>

                        {/* <Route element={<Error/>}/> */}
                    </Routes>
                    <Sidebar/>
                    <div className="clearfix"></div>
                    {/* END DIV CENTER */}
                    <Footer/>
                </div>

            </BrowserRouter>
        );
    }
}

export default Router;