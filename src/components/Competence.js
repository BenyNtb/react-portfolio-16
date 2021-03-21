import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import './Competence.css'


export class Competence extends Component {
    render () {
        return (
            <div>
                <div className='box'>
                    <div className="glass"></div>
                        <div className="content">
                            <h1>Chris Brown</h1>
                            <Image 
                            src='images/Chris-Brown.jpg'
                            className='chris'
                            />
                        </div>
                </div>
                <div className='box'>
                    <div className="glass"></div>
                        <div className="content">
                            <h1>Teyana Taylor</h1>
                            <Image
                            src='images/Teyana-Taylor.jpg'
                            className='teyana'
                            />
                        </div>
                </div>
                <div className='box'>
                    <div className="glass"></div>
                        <div className="content">
                            <h1>Odell Beckham</h1>
                            <Image
                            src='images/Odell-Beckham.jpg'
                            className='odell'
                            />
                        </div>
                </div>
            </div>
        )
    }
}

export default Competence;