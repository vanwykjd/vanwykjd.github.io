import React, { Component } from 'react';
import { Row, Col, Form, Input, Icon, Button } from 'antd';
import("../styles/_contact.scss");

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  

  
  render() {
    const { TextArea } = Input;
    return (
      <div id='contact'>
        <section>
          <Row type="flex" justify="center" align="middle" className='page-header'>
            <Col xs={24} sm={20} md={18}>
              <Row type="flex" justify="start" align="middle">
                <Col>
                  <Row type="flex" justify='space-between' align="bottom" className='contact-txt-top'>
                    <Col>C</Col>
                    <Col>O</Col>
                    <Col>N</Col>
                  </Row>
                  <Row type="flex" justify='space-between' align="top" className='contact-txt-bottom'>
                    <Col>T</Col>
                    <Col>A</Col>
                    <Col>C</Col>
                    <Col>T</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type="flex" justify="center" align="start" id='contact-bottom'>
            <Col xs={24} sm={20} md={18}>
              <Row type="flex" justify="space-between" align="top">
                <Col xs={{order: 1}} lg={{order: 2}}>
                  <h2>Feel free to reach out
                  <br/><span>if you have any questions.</span>
                  </h2>
                </Col>
                <Col xs={{order: 2, span: 24}}  lg={{ order: 1, span: 12}}>
                  <Form method="POST" data-netlify="true" name="Contact Form" >
                     <input type="hidden" name="form-name" value="Contact Form" />
                     <Form.Item>
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Name"
                        name="name"
                      />
                     </Form.Item>
                     <Form.Item>
                      <Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Enter email"
                        name="email"
                      />
                     </Form.Item>
                     <Form.Item>
                        <TextArea rows={6} 
                         placeholder="Your Message"
                         name="message"
                        />
                     </Form.Item>
                     <Form.Item>
                        <Button type="primary" htmlType="submit" size='large'>
                          Send
                          <i className='anticon anticon-right'>
                            <figure></figure>
                          </i>
                        </Button>
                     </Form.Item>
                  </Form>
                </Col>
                  </Row>
                </Col>
              </Row>
        </section>
      </div>
    )
  }
}

export default (Contact)