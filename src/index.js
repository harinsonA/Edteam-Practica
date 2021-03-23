import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById("root")
//const element = React.createElement(componente, propiedades, hijos)
//const elemento = React.createElement("h1", {"className": "saludos-clases"}, "Hola Mundo")

ReactDOM.render(<App />, root);
