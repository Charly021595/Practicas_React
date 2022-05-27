import React, {Component} from 'react';
import { BrowserRouter, Router, Switch} from 'react-router-dom';
import MiComponente from './MiComponente';
import SeccionPruebas from './SeccionPruebas';

class Router extends Component{
    render(){
        return (
            <BrowserRouter>
                
                {/* CONFIGURAR RUTAS Y PÁGINAS */}
                <Switch>
                    <Route path="/ruta-prueba" component={SeccionPruebas} />
                    <Route path="/segunda-ruta" component={MiComponente} />
                    
                </Switch>

            </BrowserRouter>
        );
    }
}

export default Router;