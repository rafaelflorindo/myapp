import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*import Card from './Card';
import Post from './Post';*/

import Menu from './Menu';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*

   <Post
    titulo = "Olá"
    urlImagemurlImagem = "oi"
    texto = "Manda a ver Manda a ver  Manda a ver Manda a ver Manda a ver Manda a ver Manda a ver Manda a ver" />
    
    <Card
    avatar="perfil.jpg"
    person = "Rafael"
    date = "10/10/2024"
    description = "Desenvolvedor back end " />
    <Card
    avatar="logo.svg"
    person = "Rafael"
    date = "10/10/2024"
    description = "Desenvolvedor back end " />

*/


reportWebVitals();
