import React from 'react';
import './About.sass';
import Typical from 'react-typical'

function About() {
    return(
        <div>
            <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                    <div id='title'>
                        {/* <span>
                            Coming Soon ..
                        </span> */}
                        <Typical
                            steps={['Coming Soon ...', 500,]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>
        </div>   
    );
}

export default About;