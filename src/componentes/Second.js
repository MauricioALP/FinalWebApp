import React from "react";

import './estilos/second.css';
import ReactDOM from 'react-dom';

import Main from '../componentes/Mainsc';





import f1 from './imagenes/second/1.jpg';
import hs from './imagenes/second/HalfStar.png';
import logo from './imagenes/second/logo.png';
import menu from './imagenes/second/menu.png';
import mtc from './imagenes/second/metacritic-icon.svg';
import search from './imagenes/second/search.png';
import star from './imagenes/second/Star.png';


class Second extends React.Component{

    /*
    ms(e){
        ReactDOM.render(<Mainsc/>, document.getElementById('root'));
    };
    */
    

    render(){
        return(
            <body>
                <nav id="menu">
                    <ul>
                        <li><input type="image" src={menu} alt="Menu-Icon" style={{"width":"100px", "height":"100px"}}/>
                            <ul>
                                <li><a href="#">Juegos más votados</a></li>
                                <li><a href="#">Juegos de escritorio</a></li>
                                <li><a href="#">Juegos de consola</a></li>
                                <li><a href="#">Juegos de móvil</a></li>
                                <li><a href="#">Categorías</a></li>
                                <li><a href="#">Cuenta</a></li>
                                <li><a href="#">Configuración</a></li>
                            </ul>
                        </li>
                        <li><img id="logoimg" src={logo} alt="logo" style={{"width":"185px", "height":"100px"}}/></li>
                        <li><img id="searchimg"src={search} alt="search" style={{"width":"100px", "height":"100px"}}/></li>
                    </ul>
                </nav>


                <div className="container">
                    <div className="im">
                        <img src={f1} alt="img"/>
                    </div>


                    <div className="labeltext"> 
                        <p>Tom Clancy's: Rainbow Six Siege</p>
                    </div>


                    <div className="resume">
                        <p>Tom Clancy's Rainbow Six Siege está inspirado en organizaciones antiterroristas del mundo real e inserta a los jugadores en medio de enfrentamientos letales a corta distancia. Por primera vez en un juego de Tom Clancy's Rainbow Six, los jugadores pueden elegir entre una variedad de Operadores únicos contra el terrorismo y participar en asedios tangibles, un nuevo estilo de asalto en el que los enemigos tienen los medios para transformar sus entornos en fortalezas modernas mientras Rainbow Six los equipos lideran el asalto para violar la posición del enemigo.</p>
                    </div>


                    <div className="score">
                        <div className=" tx1">
                            <p>Calificación</p>
                        </div>

                        <div className=" tx2">
                            <p>4.5</p>
                        </div>

                        <div>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={hs} alt="star"/>
                        </div>
                    </div>


                    <div className="critics">

                        <div className="tx3">
                            <p>Críticas</p>
                        </div>

                        <div className="tx4">
                            <img src={mtc} alt=""/>
                            <p id="meta">Metacritic</p>
                            <p id="cert">    Certificado</p>
                        </div>
                        
                        <div className="punctuation">
                            <p>4.6</p>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={hs} alt="star"/>
                        </div>

                        <div className="content">
                            <p>
                                Rainbow Six Siege is an accessible and deeply satisfying shooter that rewards planning and teamwork over a quick trigger finger. An excellent and innovative breath of fresh air. The more I play, the more I like. I hope this is new role model for shooters to come. Multiplayer is the key word for this game, because you will gain nothing from Siege if you are looking for a single player experience. My time with Siege leaves me feeling like this Rainbow Six revival is a skeleton with not a lot of meat on its bones.
                            </p>
                        </div>

                    </div>

                </div>
            </body>
        )
    }
}

export default Second;
