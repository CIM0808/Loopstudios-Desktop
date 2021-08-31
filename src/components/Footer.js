import { useState } from 'react'
import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import instagram from '../assets/images/icon-instagram.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import Spans from './Spans'


const Footer = () => {

    const[footerlinks] = useState([
        {
            id: 9,
            link: 'About'
        },

        {
            id: 10,
            link: 'Careers'
        },

        {
            id: 11,
            link: 'Events'
        },

        {
            id: 12,
            link: 'Products'
        },

        {
            id: 13,
            link: 'Support'
        },
    ]);

    return (
        <footer className='py-5 px-5 mb-4'>

            <div className="container">

                <div className="d-flex flex-md-column flex-lg-row text-md-center justify-content-between">

                    <div className='mb-md-4'>
                        <img src={logo} alt="/#"/>
                    </div>

                    <div className='mb-md-4'>
                        <img src={facebook} alt="/#" className='mx-2'/>
                        <img src={twitter} alt="/#" className='mx-2'/>
                        <img src={pinterest} alt="/#" className='mx-2'/>
                        <img src={instagram} alt="/#" className='mx-2'/>
                    </div>

                </div>

                <div className="d-flex flex-md-column flex-lg-row text-md-center justify-content-between pt-4">

                    <div className='mb-md-4'>
                        <Spans 
                        spans={footerlinks}/>
                    </div>

                    <div className='mb-md-4'>
                        <p style={{color: 'hsl(0, 0%, 55%)', wordSpacing: '2px'}}>&copy; 2021 Loopstudios. All rights reserved.</p>
                    </div>

                </div>

            </div>
            
        </footer>
    )
}

export default Footer
