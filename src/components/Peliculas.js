import React, {Component} from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component{

    state = {
        peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2014/05/batman-vs-superman-dawn-of-justice.jpg?w=1000&quality=50&strip=all&ssl=1'},
            { titulo: 'Spiderman No Way Home', image: 'https://noticiasdelmundo.news/wp-content/uploads/2022/02/%C2%BFEl-lanzamiento-digital-de-Spider-Man-No-Way-Home-incluira-una.webp-768x432.webp'},
            { titulo: 'Chip´ N Dale', image: 'https://phantom-marca.unidadeditorial.es/1a93cb4360e4831016eb21343126f0d5/resize/660/f/webp/assets/multimedia/imagenes/2022/05/21/16531551745231.jpg'}
        ],
        nombre: 'Charly Martinez'
    };

    cambiarTitulo = () => {
        let { peliculas } = this.state;
        let random = Math.floor(Math.random() * 3);
        peliculas[random].titulo = "Batman Begins";
        
        this.setState({
            peliculas: peliculas
        });
    }

    render(){
        return (
            <div id="content" className="peliculas">

                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las peliculas favoritas de {this.state.nombre}</p>
                <div>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar Titulo de Batman
                    </button>
                </div>

                {/* Crear componente pelicula */}
                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return(
                                <Pelicula key={i} pelicula={pelicula}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Peliculas;