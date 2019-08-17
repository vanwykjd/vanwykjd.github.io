import React, { Component } from 'react';
import { Link, graphql } from 'gatsby'
import("../styles/_menu.scss");


class Menu extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      showMenu: false,
      menuHover: true,
      hovered: false,
      active: 'to-top',
    };
    
    this.handleSelect = this.handleSelect.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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
      this.setState({ active: 'to-top' });
      window.scrollTo(0,0);
    }
    if (event.target.id === 'to-about') {
      console.log(event.target.id);
      this.setState({ active: 'to-about' });
      about.scrollIntoView();
    }
    if (event.target.id === 'to-works') {
      this.setState({ active: 'to-works' });
      works.scrollIntoView();
    }
    if (event.target.id === 'to-contact') {
      this.setState({ active: 'to-contact' });
      contact.scrollIntoView();
    }
  }
  
  handleMouseOver(event) {
    console.log(event.target.id);
    this.setState({ hovered: event.target.id})
  }
  
  handleMouseLeave() {
    this.setState({ hovered: false });
  }

                                     
  render() {
    const { showMenu, hovered, active } = this.state;

    return (
      <div id='menu'>
        <div className='menu-container'>
          <ul className='menu-nav'>
            <li className='nav-item'>
              <a className={ (active === 'to-top') ? 'to-top active' : 'to-top'} onClick={this.handleSelect}>
                <span className='msk'>
                  <span  id='to-top'>Home</span>
                </span>
              </a>
            </li>
            <li className='nav-item'>
              <a className={ (active === 'to-about') ? 'to-about active' : 'to-about'} onClick={this.handleSelect}>
                <span className='msk'>
                  <span id='to-about'>About</span>
                </span>
              </a>
            </li>
            <li className='nav-item'>
               <a className={ (active === 'to-works') ? 'to-works active' : 'to-works'} onClick={this.handleSelect}>
                <span className='msk'>
                  <span id='to-works'>Work</span>
                </span>
              </a>
            </li>
            <li className='nav-item'>
              <a className={ (active === 'to-contact') ? 'to-contact active' : 'to-contact'}  onClick={this.handleSelect}>
                <span className='msk'>
                  <span id='to-contact'>Contact</span>
                </span>
              </a>
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