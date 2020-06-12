import React from "react";

import './estilos/main.css';
import ReactDOM from 'react-dom';

import Second from '../componentes/Second';

import u from './imagenes/main/1.jpg';
import d from './imagenes/main/2.jpg';
import t from './imagenes/main/3.jpg';
import c from './imagenes/main/4.jpg';
import ci from './imagenes/main/5.jpg';
import a from './imagenes/main/a.jfif';
import a1 from './imagenes/main/a1.jpg';
import a2 from './imagenes/main/a2.jfif';
import a3 from './imagenes/main/a3.jpg';
import a4 from './imagenes/main/a4.jpg';
import a5 from './imagenes/main/a5.jpg';
import a6 from './imagenes/main/a6.jfif';
import a7 from './imagenes/main/a7.jpg';
import b from './imagenes/main/b.jfif';
import c2 from './imagenes/main/c.jfif';
import d2 from './imagenes/main/d.jfif';
import e from './imagenes/main/e.jfif';
import f from './imagenes/main/f.jfif';
import g from './imagenes/main/g.jfif';
import logo from './imagenes/main/logo.png';
import menu from './imagenes/main/menu.png';
import search from './imagenes/main/search.png';



class Mainsc extends React.Component{

    sec(e){
        ReactDOM.render(<Second />, document.getElementById('root'));
    };

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


                <div className="container" style={{"width":"1000px", "height":"2000px"}}>
                    <div className="slidershow middle">
                        <p id="noticias">Juegos más populares</p>
                        <div className="slides">
                            <input type="radio" name="r" id="r1" checked/>
                            <input type="radio" name="r" id="r2"/>
                            <input type="radio" name="r" id="r3"/>
                            <input type="radio" name="r" id="r4"/>
                            <input type="radio" name="r" id="r5"/>
                            <div className="slide s1">
                                <img src={u} alt="" onClick={this.sec}/>
                            </div>
                            <div className="slide">
                                <img src={d} alt="" onClick={this.sec}/>
                            </div>
                            <div className="slide">
                                <img src={t} alt="" onClick={this.sec}/>
                            </div>
                            <div className="slide">
                                <img src={c} alt="" onClick={this.sec}/>
                            </div>
                            <div className="slide">
                                <img src={ci} alt="" onClick={this.sec}/>
                            </div>
                        </div>
                
                        <div className="navigation">
                            <label for="r1" className="bar"></label>
                            <label for="r2" className="bar"></label>
                            <label for="r3" className="bar"></label>
                            <label for="r4" className="bar"></label>
                            <label for="r5" className="bar"></label>
                        </div>
                    </div>

                    <div className="box1">
                        <p>Sugerencias - Más votados</p>
                        <div className="items"> 
                            <div className="item"> 
                                <div id="im">
                                    <img src={a} alt=""/>
                                </div>
                                <div id="text">
                                    <p>Dragon Ball Z</p>
                                </div>
                            </div>

                            <div className="item"> 
                                <div id="im">
                                    <img src={b} alt=""/>
                                </div>
                                <div id="text">
                                    <p>Dragon's Dogma: Dark Arisen</p>
                                </div>
                            </div>

                            <div className="item"> 
                                <div id="im">
                                    <img src={c2} alt=""/>
                                </div>
                                <div id="text">
                                    <p>Resident Evil 6</p>
                                </div>
                            </div>

                            <div className="item"> 
                                <div id="im">
                                    <img src={d2} alt=""/>
                                </div>
                                <div id="text">
                                    <p>Hitman: Trilogy</p>
                                </div>
                            </div>

                            <div className="item"> 
                                <div id="im">
                                    <img src={e} alt=""/>
                                </div>
                                <div id="text">
                                    <p>Tomb Rider</p>
                                </div>
                            </div>

                            <div className="item"> 
                                <div id="im">
                                    <img src={f} alt=""/>
                                </div>
                                <div id="text">
                                    <p>Dead Space 3</p>
                                </div>
                            </div>

                            <div className="item"> 
                                <div id="im">
                                    <img src={g} alt=""/>
                                </div>
                                <div id="text">
                                    <p>Remember Me</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box2">
                        <p>Reseña nuevos juegos</p>
                        <div className="items"> 
                            <div className="items"> 
                                <div className="item"> 
                                    <div id="im">
                                        <img src={a1} alt=""/>
                                    </div>
                                    <div id="text">
                                        <p>Far Cry 3</p>
                                    </div>
                                </div>
                
                                <div className="item"> 
                                    <div id="im">
                                        <img src={a2} alt=""/>
                                    </div>
                                    <div id="text">
                                        <p>Watch Dogs 2</p>
                                    </div>
                                </div>
                
                                <div className="item"> 
                                    <div id="im">
                                        <img src={a3} alt=""/>
                                    </div>
                                    <div id="text">
                                        <p>Tomb Raider</p>
                                    </div>
                                </div>
                
                                <div className="item"> 
                                    <div id="im">
                                        <img src={a4} alt=""/>
                                    </div>
                                    <div id="text">
                                        <p>Resident Evil 2</p>
                                    </div>
                                </div>
                
                                <div className="item"> 
                                    <div id="im">
                                        <img src={a5} alt=""/>
                                    </div>
                                    <div id="text">
                                        <p>Dishonored 2</p>
                                    </div>
                                </div>
                
                                <div className="item"> 
                                    <div id="im">
                                        <img src={a6} alt=""/>
                                    </div>
                                    <div id="text">
                                        <p>Dead Island: Riptide</p>
                                    </div>
                                </div>
                
                                <div className="item"> 
                                    <div id="im">
                                        <img src={a7} alt=""/>
                                    </div>
                                    <div id="text">
                                        <p>Mass Efect</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default Mainsc;