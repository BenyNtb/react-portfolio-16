import React, { Component } from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import './Projet.sass';

export class Projet extends Component {
    render() {
        return (
            <div>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
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
                <div className="art">
                    <Image 
                    src='images/Chris-Brown.jpg'
                    className='chris'
                    />
                    <Image
                    src='images/Teyana-Taylor.jpg'
                    className='teyana'
                    />
                    <Image
                    src='images/Odell-Beckham.jpg'
                    className='odell'
                    />
                </div>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio voluptates assumenda neque aut officiis laborum autem culpa vero minima asperiores repellendus eos repudiandae eum tempora nesciunt, porro sapiente recusandae quibusdam!</p>
                </div>
            </div>
        )
    }
}

export default Projet;