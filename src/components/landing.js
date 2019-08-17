import React, { Component } from 'react';
import { Row, Col } from 'antd';
import("../styles/_landing.scss");


class Landing extends Component {                  
  constructor(props) {
    super(props);
    
    this.state ={
      showGreeting: true,
      display: true,
    };
        
    this.handleScroll = this.handleScroll.bind(this);
  }
   
  componentDidMount() {
    let page = document.getElementById('___gatsby');
    page.classList.add('showIntro');
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll(event) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let introDiv = document.getElementsByClassName('intro')[0];
    let greetDiv = document.getElementsByClassName('greet')[0];

    let page = document.getElementById('___gatsby');
    

    let introDivH = introDiv.offsetHeight;
    let toTop = -(introDivH - scrollTop);
    
    if (scrollTop > 10) {
      page.classList.remove('showIntro');
    } else if (scrollTop <=10 ) {
      page.classList.add('showIntro');
    }

    if (scrollTop <= introDivH) {
      introDiv.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
      greetDiv.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
    } else if ((scrollTop >= introDivH) && (scrollTop <= introDivH * (2))) {
      introDiv.style.transform = `matrix(1, 0, 0, 1, 0, ${(((introDivH - scrollTop) * 7.5) / 10)})`;
      greetDiv.style.transform = `matrix(1, 0, 0, 1, 0, ${(((introDivH - scrollTop) * 5) / 10)})`;
    } 
  }
                                     
  render() {
    const { showGreeting } = this.state;

    return (
      <div id="landing">
        <section className='intro' style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
          <div className='padding'>
            <div className='name'>
              <div id='van'>
                <div></div>
              </div>
              <div id="wyk">
                <div></div>
              </div>
            </div>
          </div>
          <div className='bg-color'></div>
        </section>

        <section className='greet' style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
          <div className='padding'>
            <p>
              <div style={{display: 'block', textAlign: 'start', position: 'relative'}}>
                <span id='hello'>
                  Hello, I'm Josh Van Wyk.
                </span> 
              </div>
              <div style={{display: 'block', textAlign: 'start', position: 'relative'}}>
                <span id='jvw'>
                  I'm a full-stack developer
                </span>
              </div>
              <div style={{display: 'block', textAlign: 'start', position: 'relative'}}>
                <span id='fsd'>
                  from Columbia, South Carolina.
                </span>
              </div>
              <div style={{display: 'block', textAlign: 'start', position: 'relative'}}>
                <span id='csc'>
                  Take a minute to look around.
                </span>
              </div>
            </p>
          </div>
        </section>
      </div>  
    )
  }
}

export default (Landing)
