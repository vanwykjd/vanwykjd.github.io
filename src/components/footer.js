import React, { Component } from 'react';
import { Link, graphql } from 'gatsby'
import { Row, Col } from 'antd';


class Footer extends Component {
  constructor(props) {
    super(props);
  }                                   
  render() {
    return (
      <footer>
        <Row type="flex" justify="center" align="bottom" style={{ background: '#222', color: '#fff'}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Row>
      </footer>
    );
  }
}


export default (Footer)