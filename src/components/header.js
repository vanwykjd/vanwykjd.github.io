
import React, { Component } from 'react';
import { Link, graphql } from 'gatsby'
import { Row, Col } from 'antd';
import("../styles/_header.scss");


class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      open: false,
      hovered: false,
    };
    
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
        
  }
  
  componentDidMount() {
    let gatsby = document.getElementById('___gatsby');
    gatsby.classList.add('loaded');
  }
  
  componentWillUnmount() {

  }
  
  handleMouseOver() {
    let gatsby = document.getElementById('___gatsby');
     gatsby.classList.add('menuHover');
     console.log('hover over');
  }
  
  handleMouseLeave() {
    let gatsby = document.getElementById('___gatsby');
    if (gatsby.classList.contains('menuHover')) {
      gatsby.classList.remove('menuHover');
    }
    console.log('mouse leave');
  }
  
  handleMenuClick() {
    let gatsby = document.getElementById('___gatsby');
    gatsby.classList.toggle('showMenu');
    if (gatsby.classList.contains('menuHover')) {
      gatsby.classList.remove('menuHover');
    }
 
    console.log('click');
  }
  


                                     
  render() {
    return (
      <header>
        <div className='nav-brand'>
          <a href="/">
            {this.props.siteTitle}
          </a>
        </div>

        <div className='nav-toggle' onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} onClick={this.handleMenuClick} href="/">
          <i className='menu-icon'>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </i>
          <span className="menu-txt">
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>U</span>
          </span>
        </div>
        <ul className='social-list'>
          <li>
            <a href='https://www.linkedin.com/in/joshdvanwyk/' target="_blank" id='l-in'>
              <i className='menu-icon'>
                <figure></figure>
              </i>
            </a>
          </li>
          <li>
            <a href='https://github.com/vanwykjd' target="_blank" id='g-hub'>
              <i className='menu-icon'>
                <figure></figure>
              </i>
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/josh.wyk' target="_blank" id='fb'>
              <i className='menu-icon'>
                <figure></figure>
              </i>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}


export default (Header)
