import React from 'react'
import {FaDatabase} from 'react-icons/fa'
import './TestimonialsStyles.css'

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <div className='container'>
                <div className='outline'>
                    <div className='content'>
                        <i><FaDatabase/> Syed's Collection</i>
                        <p className='body'>
                        A determined Computer Graduate student with a solid foundation in computer science
and software engineering. I believe I am particularly skilled at creating and executing
software applications, conducting research and effectively collaborating in diverse teams.
My technical skills and problem-solving abilities have aided in the achievement of project
goals
                        </p>
                        <div className='name'>
                            <p >Syed Mahathir Md. Lenin</p>
                            <p>CEO, Syed's Collection</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials