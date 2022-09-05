import React, { Component } from "react";

import Navbar from "./components/navbar";
import Card from "./components/card";

import dark from './images/dark.jpg';
import milk from './images/milk.jpg';
import white from './images/white.jpg';
import almond from './images/almond.jpg';
import chili from './images/chili.jpg';
import coffee from './images/coffee.jpg';


class App extends Component {
  state = {
    cards: [
      {id: 0, nome:"Dark Chocolate", descrizione:"Strong, classy and sophisticated.", immagine: dark, quantità: 0 },
      {id: 1, nome:"Milk Chocolate", descrizione:"Flexible, romantic and intelligent.", immagine: milk, quantità: 0 },
      {id: 2, nome:"White Chocolate", descrizione:"Gentle, placid, compassionate.", immagine: white, quantità: 0 },
      {id: 3, nome:"Almond Chocolate", descrizione:"Assertive, dominant, changeable.", immagine: almond, quantità: 0 },
      {id: 4, nome:"Chili Chocolate", descrizione:"Enterprising, risk-taker and shrewd.", immagine: chili, quantità: 0 },
      {id: 5, nome:"Coffee Chocolate", descrizione:"Philosophical, deep, powerful.", immagine: coffee, quantità: 0 },
    ]
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card };
    cards[id].quantità++;
    this.setState({ cards });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Chocolate talks about You</h1>
          <hr />
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                onDelete = {this.handleDelete}
                onIncrement={this.handleIncrement}
                card={card} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default App;
