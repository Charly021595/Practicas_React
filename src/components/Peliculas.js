import React, {Component} from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component{

    state = {
        peliculas: [
            { titulo: 'Batman vs Superman', image: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2014/05/batman-vs-superman-dawn-of-justice.jpg?w=1000&quality=50&strip=all&ssl=1'},
            { titulo: 'Spiderman No Way Home', image: 'https://noticiasdelmundo.news/wp-content/uploads/2022/02/%C2%BFEl-lanzamiento-digital-de-Spider-Man-No-Way-Home-incluira-una.webp-768x432.webp'},
            { titulo: 'Chip´ N Dale', image: 'https://phantom-marca.unidadeditorial.es/1a93cb4360e4831016eb21343126f0d5/resize/660/f/webp/assets/multimedia/imagenes/2022/05/21/16531551745231.jpg'}
        ],
        nombre: 'Charly Martinez',
        favorita: ''
    };

    cambiarTitulo = () => {
        let { peliculas } = this.state;
        // let random = Math.floor(Math.random() * 3);
        // peliculas[random].titulo = "Batman Begins";
        
        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        console.log("FAVORITA MARCADA");
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }

    render(){
        let pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        let favorita;
        if (this.state.favorita.titulo) {
            favorita = (
                <p className="favorita" style={pStyle}>
                    <strong> La pelicula favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
            );
        }else{
            favorita = (
                <p>No Hay Pelicula Favorita</p>
            );
        }
        return (
            <div id="content" className="peliculas">

                <h2 className="subheader">Peliculas</h2>
                <p>Selección de las peliculas favoritas de {this.state.nombre}</p>
                <p>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar Titulo de Batman
                    </button>
                </p>

                {/* { this.state.favorita.titulo ? (
                        <p className="favorita" style={pStyle}>
                            <strong> La pelicula favorita es: </strong>
                            <span>{this.state.favorita.titulo}</span>
                        </p>
                    ) : (
                        <p>No Hay Pelicula Favorita</p>
                    )
                } */}

                {favorita}

                {/* Crear componente pelicula */}
                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return(
                                <Pelicula 
                                    key={i} 
                                    pelicula={pelicula} 
                                    indice={i}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Peliculas;