import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      litterSpottedClass: "",
    };
  }

  spotLitter = () =>{
    if (this.props.type === "litter"){
      this.setState({ litterSpottedClass: "spotted-litter" });
    } else {
      this.setState({ litterSpottedClass: "spotted-nature" });
    }
    this.props.pointsCallback(this.props.index)
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;
    const icon = ItemIcons[this.props.type]

    return (
      <div className={`game-item ${this.state.litterSpottedClass}`}
      style={itemStyle}
      onClick={ this.spotLitter }>
      <img src={icon} alt="Item" className="icon-item">
      </img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
