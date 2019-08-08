import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Project from "../components/Project"
import("../styles/_works.scss");

class Works extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id='works'>
        <section>
          <Row type="flex" justify="center" align="middle" className='page-header'>
            <Col xs={24} sm={20} md={18}>
              <Row type="flex" justify="space-between" align="bottom">
                <Col xs={{order: 2}} sm={{order: 1}}>
                  <h1>
                    <span>A display of</span>
                    <span>recent work.</span>
                  </h1>
                </Col>
                <Col xs={{order: 1}} sm={{order: 2}} className='right-page-header'>
                  <Row type="flex" justify='space-between' align="bottom" className='work-txt-top'>
                    <Col>P</Col>
                    <Col>R</Col>
                    <Col>O</Col>
                    <Col>J</Col>
                  </Row>
                  <Row type="flex" justify='space-between' align="top" className='work-txt-bottom'>
                    <Col>E</Col>
                    <Col>C</Col>
                    <Col>T</Col>
                    <Col>S</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type="flex" justify='start' align="top" className='project-list'>
            <Col xs={24} sm={8}>
              <Project
                id='disco'
                title='DiscoTV'
                info='SPA for the search and discovery of TV shows.'
                tech='React | Ruby on Rails'
                live_link='https://vast-anchorage-50668.herokuapp.com/'
                repo_link='https://github.com/vanwykjd/disco-tv'
              />
            </Col>
            <Col xs={24} sm={8}>
              <Project
                id='parsuit'
                title='Parsuit' 
                info='Web App for golfers to keep track of matchs and scores in real-time'
                tech='React | Firebase'
                live_link='false'
                repo_link='https://github.com/vanwykjd/parsuit'
              />
            </Col>
            <Col xs={24} sm={8}>
              <Project
                id='future'
                title='Future Works To Come...' 
                info='As I continue to grow as a developer, so will my portfolio of things. Checkout my GitHub profile to see some WIP.'
                tech='Coffee | More Coffee'
                live_link='false'
                repo_link='false'
                alt_link='https://github.com/vanwykjd'
                alt_txt='Go to Profile.'
              />
            </Col>
          </Row>
        </section>
      </div>
    )
  }
}

export default (Works)