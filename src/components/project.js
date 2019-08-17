import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Project extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hovered: false,
      offset: null,
    };
    
    this.handleHover = this.handleHover.bind(this);
    this.handleOffset = this.handleOffset.bind(this);
  }
  
  componentDidMount() {
    this.handleOffset();
  }

  handleOffset() {
    let div = document.getElementById(this.props.id);
    let offset = div.offsetHeight / 2;
    this.setState({ offset: offset });
  }
  
  handleHover() {
    this.setState({ hovered: !this.state.hovered });
  }
   
  render() {
    const { hovered } = this.state;
    const id = this.props.id;
    const title = this.props.title;
    const info = this.props.info;
    const tech = this.props.tech;
    const repo_link = this.props.repo_link;
    const live_link = this.props.live_link;
    const alt_link = this.props.alt_link;
    const alt_txt = this.props.alt_txt;
    
    return (
      <div className='project' >
        <span id={id} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <div className='project-color-bg'></div>
          <div className='project-cover' title={id} style={{ transform: `${ (hovered) ? `matrix(1, 0, 0, 1, 0, -${this.state.offset})` : 'matrix(1, 0, 0, 1, 0, 0)'}`}}>
            <div className='proj-title'>
              <h2>{title}</h2>
            </div>
            <div className='proj-info'>
              <h3>{info}</h3>
              <p>{tech}</p>
              <Row type="flex" justify='space-between' align="bottom" className='project-links'>
              { (repo_link !== 'false') && 
                <Col id='repo'>
                  <a href={repo_link} target="_blank">
                    Go to Repo.
                  </a>
                </Col>
              }
              { (live_link !== 'false') && 
                <Col id='live'>
                  <a href={live_link} target="_blank">
                    View Live.
                  </a>
                </Col>
              }
              { (alt_link !== 'false') && 
                <Col id='alt'>
                  <a href={alt_link} target="_blank">
                    {alt_txt}
                  </a>
                </Col>
              }
              </Row>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default (Project);