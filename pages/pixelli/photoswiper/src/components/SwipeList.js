import React, { Component } from 'react';
import SwipeItem from './SwipeItem';

export default class SwipeList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 5,
      items: {
        [0]: 'http://lorempixel.com/1000/1000/',
        [1]: 'http://lorempixel.com/1000/1000/',
        [2]: 'http://lorempixel.com/1000/1000/',
        [3]: 'http://lorempixel.com/1000/1000/',
        [4]: 'http://lorempixel.com/1000/1000/'
      }
    };
  }

  handleScroll = (scrollEvent) => {
    console.log("Scrolled");
  }
  
  addImage() {
    console.log("added image");
    this.setState({
      counter: this.state.counter + 1,
      items: {...this.state.items, [this.state.counter]: 'http://lorempixel.com/1000/1000/'}
    });
    console.log(this.state.items);
  }
  
  removeItem(keyOfItemToRemove) {
    var nextItems = Object.keys(this.state.items).reduce((previous, current) => {
      if (current !== keyOfItemToRemove) {
        previous[current] = this.state.items[current];
      }
      return previous;
    }, {});
    
    this.setState({items: nextItems});
  }
  
  render() {
    return (
      <div className="swipe-list" onScroll={e => this.handleScroll(e)}>
        {Object.keys(this.state.items).map(itemKey =>
          <SwipeItem key={`swipeItem-${itemKey}`} onRemoval={() => this.removeItem(itemKey)} image={this.state.items[itemKey]} />
        )}
      </div>
    );
  }
}