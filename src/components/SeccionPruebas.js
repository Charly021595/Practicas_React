import React, {Component} from "react";
import MiComponente from "./MiComponente";

class SeccionPruebas extends Component{

    contador = 0;
    state = {
        contador: 0
    };

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         contador: 0
    //     };
    // }

    // let HolaMundo = () => {} 
    HolaMundo(nombre, edad){
        let presentacion = ( 
          <div>
              <h2>Hola, soy {nombre}</h2>
              <h3>Tengo {edad} años</h3>
          </div> 
        );
        return presentacion;
    }

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render(){
        let nombre = "Carlos Martinez";
        return(
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Hola Bienvenidoal curso de react !!
                </p>

                <h2 className="subheader">Funciones y JSX basico</h2>
                {this.HolaMundo(nombre, 27)}

                <h2 className="subheader">Coponentes</h2>
                <section className="componentes">
                    <MiComponente/>
                    {/* <Peliculas/> */}
                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>

            </section>
        ); 
    }
}

export default SeccionPruebas;