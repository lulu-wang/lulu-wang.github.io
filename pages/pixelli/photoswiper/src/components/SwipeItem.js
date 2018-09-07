import React, { Component } from 'react'
import PropTypes from 'prop-types'

const fullWidth = 1000;
const fullHeight = 1000;
const errorMargin = 20;

export default class SwipeItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      top: 0,
      slideStartY: 0,
      velocity: 0,
      timeOfLastDragEvent: 0,
      touchStartY: 0,
      width: fullWidth
    };
  }

  
  handleRemoveSelf = () => {
    this.setState({width: 0});
    window.setTimeout(() => this.props.onRemoval(), 250);
  }
  
  handleStart = (clientY) => {
    this.setState({
      slideStartY: clientY,
      prevTouchY: clientY,
      velocity: 0,
      timeOfLastDragEvent: Date.now(),
      touchStartY: clientY,
    });
  }
  
  handleMove = (clientY) => {
    const deltaTime = (Date.now() - this.state.timeOfLastDragEvent) / 1000.0;
    const velocity = (clientY - this.state.prevTouchY) / deltaTime;
    let deltaY = clientY - this.state.slideStartY;
    deltaY = Math.abs(deltaY) < errorMargin ? 0 : deltaY;
    if (deltaY < -fullHeight) {
      this.handleUpvoteSelf();
    } else if (deltaY > fullHeight) {
      this.handleDownvoteSelf();
    }
    this.setState({
      top: deltaY,
      velocity: velocity,
      timeOfLastDragEvent: Date.now(),
      prevTouchY: clientY
    });
  }
  
  handleEnd = () => {
    //follow velocity
  }
  
  handleTouchStart = (touchStartEvent) => {
    touchStartEvent.preventDefault();
    this.handleStart(touchStartEvent.targetTouches[0].clientY);
  }
  
  handleTouchMove = (touchMoveEvent) => {
    this.handleMove(touchMoveEvent.targetTouches[0].clientY);
  }
  
  handleTouchEnd = () => {
    this.handleEnd();
  }

  handleWheel = (wheelEvent) => {
    this.handleMove()
  }
  
  render() {
    return (
      <div
        className="swipe-item"
        style={{width: this.state.width + 'px', transition: 'height 250ms ease-in-out'}}
        onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
        onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => this.handleTouchEnd()}
        onWheel={e => this.handleWheel(e)}
      >
        <div className="swipe-item-content" style={{transform: 'translateY(' + this.state.top + 'px)'}}>
          <img src={this.props.image} alt={"swipable image"}/>
        </div>
      </div>
    );
  }
}