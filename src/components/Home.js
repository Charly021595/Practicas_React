import React, {Component} from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";


class Home extends Component{
    render(){
        let buttonString = "Ver mas";
        return(
            <div id="home">
                <Slider 
                    title="Bienvenido al Curso de React"
                    btn="Ir al blog"
                    size="slider-big"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Ultimos articulos</h1>
                    </div>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Home;