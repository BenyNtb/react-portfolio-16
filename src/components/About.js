import React from 'react';
import Footer from './Footer'
// import './About.sass';
// import './About.css'
import Typical from 'react-typical'

function About(props) {
    return(
        <>
            <About titre="Beny" />
            <div id='title'>
                <h1>Hi, My name is <span id='Beny'>{props.titre} </span> , I'm 24.</h1>
                <h1>I live in Brussels</h1>
                <div className='effect'>
                    <p>
                        I'm a {''} 
                    <Typical
                        steps={[
                        'developer💻', 1000,
                        'digital illustrator💅🏾', 1000,
                    ]}
                        loop={Infinity}
                        wrapper="b"
                        className='typical'
                    />
                    </p>
                </div>       
        </div> 
        </>

    );
}

export default About;