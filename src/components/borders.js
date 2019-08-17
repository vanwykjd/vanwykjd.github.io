import React, { Component } from 'react';
import("../styles/_borders.scss");

class Borders extends Component {                        
  render() {
    return (
      <div className="borders">
        <div className="top-border"></div>
        <div className="bottom-border"></div>
        <div className="left-border"></div>
        <div className="right-border"></div>
      </div>
    );
  }
}

export default (Borders)