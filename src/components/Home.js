import React, {Component} from "react";
import Slider from './Slider';

class Home extends Component{
    render(){
        let buttonString = "Ver mas";
        return(
            <div id="home">
                <Slider 
                    title="Bienvenido al Curso de React"
                    btn="Ir al blog"
                />
                <div id="content">
                    <h1 className="subheader">Ultimos articulos</h1>
                </div>
            </div>
        );
    }
}

export default Home;