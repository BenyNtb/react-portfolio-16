import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
// import { Linking, Text } from 'react-native-a';
import './Projet.css';

export class Projet extends Component {
    render() {
        return (
            <div>
                <div className='projet-container'>
                    {/* <Row> */}
                        <div className='groupe'>
                            <div className='emporium'>    
                                <Image
                                src='images/emporium.png'
                                path='/gallery'
                                />
                                {/* <Text style={{color: 'blue'}}
                                onPress={() => Linking.openURL('http://google.com')}>
                                Emporium
                                </Text> */}
                            </div>
                            <div className='chef'>
                                <Image 
                                src='images/site-du-chef.png'
                                path='/gallery'
                                />
                            </div>
                            <div className='hoops'>
                            <Image
                            src='images/hoops-on-fire.png'
                            path='/gallery'
                            />
                            </div>
                            <div className='photosen'>
                            <Image
                            src='images/PhotoSen.png'
                            path='/gallery'
                            />
                            </div>
                        </div>
                    {/* </Row> */}
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