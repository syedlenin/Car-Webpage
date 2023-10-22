import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './ContactStyles.css'

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='col-1'>
                    <div className='content'>
                        <div><h1>Get in touch</h1>
                            <p>Headquarters is in Bangladesh</p>
                        </div>
                        <div className='address'>
                            <p>Mohammadpur, Dhaka</p>
                            <p>Tajmahal Road</p>
                        </div>
                        <div className='icons'>
                            <FaPhone style={{marginRight: '1rem'}} />
                            <p> (+880) 012123-45675</p>
                        </div>
                        <div className='icons'>
                            <FaEnvelope style={{marginRight: '1rem'}} />
                            <p>support@example.com</p>
                        </div>
                        <div className='careers'>
                            <p>Looking for careers? <span>View all jop openings.</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <form action=''>
                        <input type='text' placeholder='Full name' />
                        <input type='email' placeholder='Email' />
                        <input type='phone' placeholder='Phone' />
                        <textarea name='Message' placeholder='Message' cols='30' rows='10'></textarea>
                        <div className='checkbox'>
                            <input type='checkbox' />
                            <p>By checking this box, you agree to the <span>Privacy Policy</span> and
                             <span>Cookie Policy</span>.</p>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact