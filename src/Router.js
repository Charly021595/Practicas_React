import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importar componentes
import Header from './components/Header';
import Footer from './components/Footer';
import MiComponente from './components/MiComponente';
import Error from "./components/Error";
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Peliculas from './components/Peliculas';

class Router extends Component{

    render(){
        return (

            <BrowserRouter>
                <Header/>

                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/segunda-ruta" element={<MiComponente />} />
                    <Route exact path="/blog" element={<Blog/>} />
                    <Route exact path="/formulario" element={<Formulario/>} />
                    <Route exact path="/peliculas" element={<Peliculas/>} />
                    
                    <Route exact path="/pruebas"  render={() => <Error/>}/>

                    {/* <Route element={<Error/>}/> */}
                </Routes>
                
                <div className="clearfix"></div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;