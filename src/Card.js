import './Card.css';

import Post from './Post';
import perfil from './perfil.jpg';

function Card(props){
    return (
        <div className="Card">
            <div className='CardHeader'>
                <img className="avatar" src={perfil}></img>
            </div>
            <div className='datePerfil'>
                <h1>{props.person}</h1>
                <p>Data: {props.date}</p>
                <p>{props.description}</p>
            </div>
            <Post
    titulo = "Olá"
    urlImagemurlImagem = "oi"
    texto = "Manda a ver Manda a ver  Manda a ver Manda a ver Manda a ver Manda a ver Manda a ver Manda a ver" />
  
        </div>
    );
}

export default Card;