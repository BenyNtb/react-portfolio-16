import React, { Component } from 'react';
// import Footer from './Footer'
import ParticleEffectButton from 'react-particle-effect-button'
import PropTypes from 'prop-types'
import '../css/Home.css'
import Typical from 'react-typical';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    static propTypes = {
        background: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        buttonStyles: PropTypes.object.isRequired,
        buttonOptions: PropTypes.object.isRequired
    }

    state = {
        hidden: false,
        animating: false
    }

    render(){
        const {
            background,
            text,
            buttonStyles,
            buttonOptions
        } = this.props

        const {
            hidden,
            animating
        } = this.state
    return(
        <>
            
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" id='title'>
                <div className='container big-name'>
                    <div className="glitch" data-text='BENY'>BENY</div>
                    <div className="glow">BENY</div>
                    
                </div>
                
                <div data-aos="zoom-in-up" className='effect'>
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
            <div className='buttons-div-container'
            style= {{ background }}
            >
                {/* {hidden && !animating && (
                    <button
                    className='animation-reset-button'
                    onClick={this._onToggle}
                    >
                        Reset
                    </button>
                )} */}

                <Link to ='/skills'>
                <ParticleEffectButton
                hidden={this.state.hidden}
                onComplete={this._onAnimationComplete}
                {...buttonOptions}
                color="#FFFFFF"
                >
                    <button
                    className='particle-effect-button'
                    style={{...buttonStyles}}
                    onClick={this._onToggle}
                    data-aos='flip-down'
                    data-aos-easing="ease-in-back"
                    data-aos-delay="1000"
                    >
                    
                        ENTER HERE
                    </button>
                </ParticleEffectButton>
                </Link>

            </div> 
        </>
    );
    }
    _onToggle = () => {
        if (this.state.animating) return

        this.setState({
            hidden: !this.state.hidden,
            animating: true
        })
    }
    _onAnimationComplete = () => {
        this.setState({
            animating: false
        })
    }

    
}

