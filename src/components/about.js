import React, { Component } from 'react';
import Traits from "./Traits"
import { Row, Col } from 'antd';
import("../styles/_about.scss");


class About extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      active: null,
    };
    
    this.handleMenuHover = this.handleMenuHover.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.setHeight = this.setHeight.bind(this);
    
  }
  
  componentDidMount() {
    this.setHeight();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.setHeight);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.setHeight);
  }

  
  setHeight() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    
    let borderH = document.getElementsByClassName('top-border')[0].offsetHeight;
    let slantTop = document.getElementById('slant-top');
    let slantBottom = document.getElementById('slant-bottom');
    let content = document.getElementById('about-content');
    let works = document.getElementById('works')
    
    let angle = Math.atan(borderH / (w - borderH));
    let a = angle * (180 / Math.PI );
    let offset = Math.tan(angle) * w;
    
    slantTop.style.transform = `skewY(${a}deg) translateZ(0)`;
    slantBottom.style.transform = `skewY(-${a}deg) translateZ(0)`;
    
    slantTop.style.top = (-Math.ceil(offset) / 2) + 'px';
    slantBottom.style.bottom = (-Math.ceil(offset) / 2) + 'px';

    slantTop.style.height = Math.ceil(offset) + 'px';
    slantBottom.style.height = Math.ceil(offset) + 'px';

    let right = document.getElementById('about-right');
    let traits = document.getElementById('traits_section');
    right.style.height = traits.offsetHeight  + 'px';
    works.style.paddingTop = Math.ceil(offset) + 'px';
  }
   
  
  handleMenuHover(event) {
    this.setState({ active: event.target.id });
  }
  
  handleScroll(event) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let h = window.innerHeight;
    let w = window.innerWidth;

    if (w > 767) {
      let container = document.getElementById('about-right');
     
      let traits = document.getElementById('traits_section');
      let position = traits.getBoundingClientRect();
      let start = position.top - h;
      
      let other = ((position.top - h) - scrollTop); 
      let percRaw =  (Math.floor((((scrollTop + other) / (h + position.height)) / 4) * 10000)) / 10000;
      let perc = 12.5 + percRaw * 100;

       if (start > 0) {
         traits.style.transform = `translate(0%, 12.5%) matrix(1, 0, 0, 1, 0, 0)`;
       } else if (start <= 0 &&  (((scrollTop + other) + (h + position.height))) > 0) {
         traits.style.transform = `translate(0%, ${perc}%) translate3d(0px, 0px, 0px)`;
       } else if (( (scrollTop + other) + (h + position.height) ) <= 0 ) {
         traits.style.transform = `translate(0%, -12.5%) matrix(1, 0, 0, 1, 0, 0)`;
       }
    }
  }
  
  
  render() {
    const { active } = this.state;

    return (

        <div id='about'>
            <section id='slant-top'></section>
            <section id='about-content'>
              <Row type="flex" justify="center" align="middle" className='page-header'>
                 <Col xs={24} sm={20} md={18}>
                  <Row type="flex" justify="start" align="middle">
                    <Col>
                      <Row type="flex" justify='space-between' align="bottom" className='about-txt-top'>
                        <Col>A</Col>
                        <Col>B</Col>
                      </Row>
                      <Row type="flex" justify='space-between' align="top" className='about-txt-bottom'>
                        <Col>O</Col>
                        <Col>U</Col>
                        <Col>T</Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row type="flex" justify='center' align="top" id='page-bottom'>
                <Col sm={24} lg={12} >
                 <Row type="flex" justify="center" align="top" id='about-left'>
                  <Col xs={24} sm={20} md={18} lg={12}>
                    <h2>A full-stack
                    <br/>developer
                    <br/><span>with a front-end
                    <br/>passion...</span>
                    </h2>
                    <p>
                     ...for creating elegant UI/UX designs. I enjoy breaking down the "whats", "whys" and
                      "hows", and analyzing how life can be made 
                      simpler. When I'm not behind my computer, I'm 
                      either on a golf course, near a body of water,
                      emotionally invested in a South Carolina sporting
                      event, or trying to think of a solution for every
                      inconvenience I've ever experienced in my life.
                    </p>
                    </Col>
                  </Row>
                </Col>
                <Col sm={24} lg={12} id='about-right'>
                  <Traits />
                </Col>
              </Row>
            </section>
            <section id='slant-bottom'></section>
        </div>

    );
  }
}

export default (About)