import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7734b178bf7049feb6541894ec1baa4f`;
    
    const response = await fetch(url);
    const noticias = await response.json();
    this.setState({
      noticias: noticias.articles
    })
  }

  render(){

    return (
      <Fragment>
        <Header
          titulo='Noticias React API'
        />
        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
