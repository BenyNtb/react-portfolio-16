import React, { useEffect } from 'react'
import { Button, Image } from 'react-bootstrap';
// import { Linking, Text } from 'react-native-a';
import Flip from 'react-reveal/Flip';
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../css/Projet.css'

const Projet = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
        return (
            <div>
                <div className="titre1"> My project</div>
                <div className='projet'>
                    {/* <Row> */}
                        <div className='groupe'>
                            <div>
                                <div data-aos="fade-right" data-aos-offset='300' data-aos-easing='ease-in-sine' className='pictures'>    
                                    <Image
                                    src='images/emporium.png'
                                    path='/gallery'
                                    />
                                </div>
                                    {/* <a className="link" target="_blank" href=" https://benyntb.github.io/cs_emporium_js_16/">See Project</a> */}
                                <Button className='overlay'> Emporium</Button>
                            </div>
                            <div>
                                <div data-aos="fade-left" data-aos-offset='300' data-aos-easing='ease-in-sine' className='pictures'>
                                    <Image 
                                    src='images/site-du-chef.png'
                                    path='/gallery'
                                    />
                                </div>
                                    {/* <a className="link" target="_blank" href="https://benyntb.github.io/coding_16_site_chef/">See Project</a> */}
                                <Button className='overlay'> Taste</Button>
                            </div>
                            <div>
                                <div data-aos='fade-right' data-aos-offset='300' data-aos-easing='ease-in-sine' className='pictures'>
                                        <Image
                                        src='images/hoops-on-fire.png'
                                        path='/gallery'
                                        />
                                </div>
                                <p className='hoops-text overlay'>Hoops on fire is currently down maintenance. Come back later !</p>
                            </div>
                            <div>
                                <div data-aos='fade-left' data-aos-offset='300' data-aos-easing='ease-in-sine' className='pictures'>
                                        <Image
                                        src='images/PhotoSen.png'
                                        path='/gallery'
                                        />
                                </div>
                                <Button className='overlay'>Photosen</Button>
                            </div>
                        </div>
                    {/* </Row> */}
                </div>
                <div data-aos='fade-up' data-aos-anchor-placement='top-center' className="quote">
                        <h3>"Learning to draw is really a matter of learning to see - to see correctly - and that means a good deal more than merely looking with the eye."</h3>
                </div>
            <div className='Row projet'>
                <div className='box'>
                    <div className="glass"></div>
                        <div data-aos='zoom-out-right' className="content">
                            <Image 
                            src='images/Chris-Brown.jpg'
                            className='chris'
                            />
                        </div>
                </div>
                <div className='box'>
                    <div className="glass"></div>
                        <div data-aos="zoom-out-up" className="content">
                                <Image
                                src='images/Teyana-Taylor.jpg'
                                className='teyana'
                                />

                        </div>
                </div>
                <div className='box'>
                    <div className="glass"></div>
                        <div data-aos='zoom-out-left' className="content">
                                <Image
                                src='images/Odell-Beckham.jpg'
                                className='odell'
                                />
                        </div>
                </div>
            </div>    
            </div>
        );
    };


export default Projet;