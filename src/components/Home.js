import React from 'react';
// import Footer from './Footer'

import '../css/Home.css'
import Typical from 'react-typical';

function Home() {
    return(
        <>
            {/* <About titre="Beny" /> */}
            <div id='title'>
                <div className='container big-name'>
                    <div className="glitch" data-text='BENY'>BENY</div>
                    <div className="glow">BENY</div>
                    {/* <div className="scanlines"></div> */}
                </div>
                {/* <h1>Hi, My name is <span id='Beny'></span> , I'm 24.</h1>
                <h1>I live in Brussels</h1> */}
                <div className='effect'>
                    <p>
                        I'm a {''}
                    <Typical
                        steps={[
                        'full stack developer💻', 1000,
                        'digital illustrator🎨', 1000,
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

export default Home;