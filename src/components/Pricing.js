import React from 'react'

import './PricingStyles.css'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='container'>
                <div className='top-content'>
                    <div>
                        <h2>Everything you need to know about Cars just Suscribe for <span>$99 !!!</span></h2>
                        <p>Includes every car we offer plus Discount on full payment </p>
                    </div>
                    <div className='btn-div'>
                        <button>Get started today</button>
                    </div>
                </div>
                <div className='bottom-content'>
                    <div className='card'>
                        <p><span>Everything you need</span></p>
                        <h3>All-in-one platform</h3>
                        <p>Syed's Collection is a forerunner in the automotive industry dedicated to innovation, sustainability and technology. We provide a diverse choice of automobiles ranging from electric cars to SUVs and we prioritize customer needs. Our production method promotes quality and safety by utilizing the most recent technical and material developments. They are also committed to environmentally responsible methods, such as electric vehicle options and eco-friendly manufacturing procedures. Syed's Collection seeks to present customers with an experience that serves as an expression of their ideals and objectives.</p>
                    </div>
                    <div className='card'>
                        <div>
                            <p className='p1' >Brands of cars we have</p>
                        </div>
                        <div>
                            <p className='p2'>Ferrari</p>
                        </div>
                        <div>
                            <p className='p2' >Audi R8</p>
                        </div>
                        <div>
                            <p className='p2'>lamborghini</p>
                        </div>
                        <div>
                            <p className='p2'>Customized Cars</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Pricing