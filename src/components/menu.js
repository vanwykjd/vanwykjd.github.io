import React, { Component } from 'react';
import { Link, graphql } from 'gatsby'


class Menu extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      showMenu: false,
      menuHover: true,
    };
        
  }
  
  handleSelect(event) {
    let gatsby = document.getElementById('___gatsby');
    let introDiv = document.getElementsByClassName('intro')[0];
    let greetDiv = document.getElementsByClassName('greet')[0];
    let about = document.getElementById('about');
    let works = document.getElementById('works');
    let contact = document.getElementById('contact');
    
    
    gatsby.classList.toggle('showMenu');
    if (event.target.id === 'to-top') {
      window.scrollTo(0,0);
    }
    if (event.target.id === 'to-about') {
      about.scrollIntoView();
    }
    if (event.target.id === 'to-works') {
      works.scrollIntoView();
    }
    if (event.target.id === 'to-contact') {
      contact.scrollIntoView();
    }
  }

                                     
  render() {
    const { showMenu } = this.state;

    return (
      <div id='menu'>
        <div className='menu-container'>
          <ul className='menu-nav'>
            <li className='nav-item' onClick={this.handleSelect}>
              <div id='to-top'>
                Home
              </div>
            </li>
            <li className='nav-item' onClick={this.handleSelect}>
              <div id='to-about'>
                About
              </div>
            </li>
            <li className='nav-item' onClick={this.handleSelect}>
              <div id='to-works' >
                Works
              </div>
            </li>
            <li className='nav-item' onClick={this.handleSelect}>
              <div id='to-contact'>
                Contact
              </div>
            </li>
          </ul>
      
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
        </div>
  
      </div>
    );
  }
}

export default (Menu)