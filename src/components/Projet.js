import React, { useEffect, useState } from 'react'
import { Button, Image } from 'react-bootstrap';
// import { Linking, Text } from 'react-native-a';
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../css/Projet.css'

const Projet = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    const [isHovered, setHover] = useState (false);
        return (
            <div>
                <div data-aos="fade-zoom-in" className="titre1"> My project</div>
                <div className='projet'>
                    {/* <Row> */}
                        <div className='groupe'>
                            
                                <div data-aos="fade-right" data-aos-offset='300' data-aos-easing='ease-in-sine' className='imageContainer' className='pictures'>    
                                    <Image
                                    src='images/emporium.png'
                                    path='/gallery'
                                    className='overlay1'/>
                                    <div data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1000"
                                    data-aos-offset="0">
                                        <a className="link" target="_blank" href=" https://benyntb.github.io/cs_emporium_js_16/">See Project</a>
                                    </div>
                                    
                            </div>
                            
                                <div data-aos="fade-left" data-aos-offset='300' data-aos-easing='ease-in-sine' className='imageContainer'className='pictures'>
                                    <Image 
                                    src='images/site-du-chef.png'
                                    path='/gallery'
                                    />
                                    <div data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="1000"
                                    data-aos-offset="0">
                                        <a className="link" target="_blank" href="https://benyntb.github.io/coding_16_site_chef/">See Project</a>
                                    </div>
                                    
                                    </div>
                            <div>

                                <div data-aos='fade-right' data-aos-offset='300' data-aos-easing='ease-in-sine'  className='pictures'>
                                        <Image
                                        src='images/hoops-on-fire.png'
                                        path='/gallery'
                                        />
                                        <div data-aos="fade-zoom-in"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay="1000"
                                        data-aos-offset="0">
                                            <p className='link'>Hoops on fire is currently down maintenance. Come back later !</p>
                                        </div>
                                </div>
                            </div>

                            <div>
                                <div data-aos='fade-left' data-aos-offset='300' data-aos-easing='ease-in-sine' className='imageContainer' className='pictures'>
                                        <Image
                                        src='images/PhotoSen.png'
                                        path='/gallery'className='overlay4'/>
                                        <div data-aos="fade-zoom-in"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay="1000"
                                        data-aos-offset="0">
                                            <a className="link" target="_blank" href="https://benyntb.github.io/Photosen/">See Project</a>
                                        </div> 
                                </div>
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