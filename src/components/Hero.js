import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import './HeroStyles.css'
import {Carousel} from 'react-bootstrap'



const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-3'>
                        <div className='HeroSlider'>
                            <Carousel>
                    <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='carColor'>Ferrari</h3>
                            <p ></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                            <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/10566898/pexels-photo-10566898.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className='carColor2'> Audi R8</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1570280406792-bf58b7c59247?auto=format&fit=crop&q=80&w=2062&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className='carColor3'>lamborghini</h3>
                            <p ></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/5229602/pexels-photo-5229602.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className='carColor4'>Customized Car</h3>
                            
                            <p ></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> </div> 
                   
                        
                       
                    </div>
                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>
                                <p className='sign-in-txt'>Sign in with</p>
                                <div className='social-login'>
                                    <i><FaFacebook size={20} /></i>
                                    <i><FaTwitter size={20} /></i>
                                    <i><FaGithub size={20} /></i>
                                </div>
                                <div className='divider'>
                                    <p><span>Or</span></p>
                                </div>
                                <form action=''>
                                    <input type='text' placeholder='Name' />
                                    <input type='email' placeholder='Email' />
                                    <input type='password' placeholder='Password' />
                                    <button>Create your account</button>
                                </form>
                            </div>
                            <div className='form-footer'>
                                <p>By signing up, you agree to our
                                    <span className='primary-color'> Terms, Data Policy</span> and
                                    <span className='primary-color'> Cookies Policy</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                        
                </div>
            </div>

        </div>
    )
}

export default Hero
/*

*/