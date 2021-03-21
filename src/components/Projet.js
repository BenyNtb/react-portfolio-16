import React, { Component } from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import './Projet.css';

export class Projet extends Component {
    render() {
        return (
            <div>
                {/* <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div> */}
                <div className='projet-container'>
                    <Row>
                        <Col className='groupe'>
                            <Image
                            src='images/emporium.png'
                            className='emporium'
                            path='/gallery'
                            />
                            <Image 
                            src='images/site-du-chef.png'
                            className='chef'
                            path='/gallery'
                            />
                            <Image
                            src='images/hoops-on-fire.png'
                            className='hoops'
                            path='/gallery'
                            />
                        </Col>
                    </Row>
                </div>
            <div className='Row projet'>  
                <div className='box'>
                    <div className="glass"></div>
                        <div className="content">
                            <Image 
                            src='images/Chris-Brown.jpg'
                            className='chris'
                            />
                        </div>
                </div>
                <div className='box'>
                    <div className="glass"></div>
                        <div className="content">
                            <Image
                            src='images/Teyana-Taylor.jpg'
                            className='teyana'
                            />
                        </div>
                </div>
                <div className='box'>
                    <div className="glass"></div>
                        <div className="content">
                            <Image
                            src='images/Odell-Beckham.jpg'
                            className='odell'
                            />
                        </div>
                </div>
            </div>    
            </div>
        )
    }
}

export default Projet;