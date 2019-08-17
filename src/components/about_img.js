import React, { Component } from 'react';


class Collage extends Component {
  constructor(props) {
    super(props);
        
    this.handleScroll = this.handleScroll.bind(this);
  }
   
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(event) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let h = window.innerHeight;
    let imgContainer = document.getElementsByClassName('about-img')[0].offsetHeight;
    let collage = document.getElementById('collage');
    let perc = ((((scrollTop - (h*2)) / (imgContainer * .5)) / 2) * 100) / 2;
    
    if (scrollTop <= (h + imgContainer)) {
      collage.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
    } else if ((scrollTop >= (h + imgContainer)) && (scrollTop <= ((h * 2) + imgContainer))) {
      collage.style.transform = `translate(0%, ${perc}%) translate3d(0px, 0px, 0px)`;
    } else if (scrollTop > ((h * 2) + imgContainer)) {
      collage.style.transform = `translate(0%, 50%) matrix(1, 0, 0, 1, 0, 0)`;
    }
  }
  
  render() {
    return (
      <div className='about-img'>
        <div id='collage'></div>
      </div>  
    );
  }
}

export default (Collage)