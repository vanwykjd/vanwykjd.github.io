import React, { Component } from 'react';
import { Row, Col } from 'antd';
import("../styles/_traits.scss");

class AboutTraits extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      active: null,
    };
    
    this.setActive = this.setActive.bind(this);
  }
  
  setActive(event) {
    this.setState({ active: event.target.id });
  }
  
  render() {
    const { active } = this.state;

    return (

        <div id='traits'>
          
            <Row className="traits" type="flex" justify="space-around" align="middle">
              
              <Col xs={24} sm={12} className='trait'>
      
                <div className='trait-container top-trait'>
                  <span className={`${(active ==='create') ? 'icon active' : 'icon'}`} id='create' active={`${(active ==='create') ? true : false }`}  onMouseEnter={this.setActive} onClick={this.setActive}>
                    <figure id='create' onClick={this.setActive}>
                    </figure>
                  </span>
                  { (active === 'create') ? <h3 style={{color: '#FFF'}}>Brainstorm<br/>Enthusiast</h3>  : <h3>Creative<br/>Concepts</h3>  }
                  <h4 style={{ visibility: `${(active ==='create') ? 'visible' : 'hidden'}`}}>3-Time Escape Room MVP</h4>
                </div>
              </Col>



              <Col xs={24} sm={12} className='trait'>
                <div className='trait-container top-trait'>
                 <span className={`${(active ==='detail') ? 'icon active' : 'icon'}`} id='detail' active={`${(active ==='detail') ? true : false }`} onMouseEnter={this.setActive} onClick={this.setActive}>
                  <figure id='detail' onClick={this.setActive}>
                  </figure>
                </span>
                { (active === 'detail') ? <h3 style={{color: '#FFF'}}>Deets<br/>Detector</h3>  : <h3>Detail<br/>Oriented</h3>  }
                <h4 style={{ visibility: `${(active ==='detail') ? 'visible' : 'hidden'}`}}>Master of <i>I Spy</i> books</h4>
                </div>
              </Col>



              <Col xs={24} sm={12} className='trait'>
                <div className='trait-container bottom-trait'>
                  <span className={`${(active ==='read') ? 'icon active' : 'icon'}`} id='read' active={`${(active ==='read') ? true : false }`} onMouseEnter={this.setActive} onClick={this.setActive}>
                  <figure id='read' onClick={this.setActive}>
                  </figure>
                </span>
                { (active === 'read') ? <h3 style={{color: '#FFF'}}>Coherent<br/>Coder</h3>  : <h3>Readable<br/>Code</h3>  }
                <h4 style={{ visibility: `${(active ==='read') ? 'visible' : 'hidden'}`}}>To help you help me</h4>
                </div>
              </Col>


              <Col xs={24} sm={12} className='trait'>
                <div className='trait-container bottom-trait'>
                  <span className={`${(active ==='market') ? 'icon active' : 'icon'}`} id='market' active={`${(active ==='market') ? true : false }`} onMouseEnter={this.setActive} onClick={this.setActive}>
                  <figure id='market' onClick={this.setActive}>
                  </figure>
                </span>
                { (active === 'market') ? <h3 style={{color: '#FFF'}}>Bachelor <br/> of Marketing</h3>  : <h3>Marketing<br/>Mindset</h3>  }
                 <h4 style={{ visibility: `${(active ==='market') ? 'visible' : 'hidden'}`}}>married to the process</h4>
                </div>
              </Col>
            </Row>
   


        </div>
    );
  }
}

export default (AboutTraits)