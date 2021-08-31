import Button from "./Button"
import Headers from "./Headers"
import { useState } from 'react'
import earth from '../assets/images/desktop/image-deep-earth.jpg'
import arcade from '../assets/images/desktop/image-night-arcade.jpg'
import soccer from '../assets/images/desktop/image-soccer-team.jpg'
import grid from '../assets/images/desktop/image-grid.jpg'
import above from '../assets/images/desktop/image-from-above.jpg'
import pocket from '../assets/images/desktop/image-pocket-borealis.jpg'
import curiosity from '../assets/images/desktop/image-curiosity.jpg'
import fisheye from '../assets/images/desktop/image-fisheye.jpg'
import Creations from "./Creations"



const Sect3 = () => {

    const [creations] = useState([
        {
            id: 1,
            img: earth,
            htext1: 'Deep',
            hText2: 'Earth'
        },

        {
            id: 2,
            img: arcade,
            htext1: 'Night',
            hText2: 'Arcade'
        },

        {
            id: 3,
            img: soccer,
            htext1: 'Soccer',
            hText2: 'Team VR'
        },

        {
            id: 4,
            img: grid,
            htext1: 'The',
            hText2: 'Grid'
        },

        {
            id: 5,
            img: above,
            htext1: 'From Up',
            hText2: 'Above VR'
        },

        {
            id: 6,
            img: pocket,
            htext1: 'Pocket',
            hText2: 'Borealis'
        },

        {
            id: 7,
            img: curiosity,
            htext1: 'The',
            hText2: 'Curiosity'
        },

        {
            id: 8,
            img: fisheye,
            htext1: 'Make it',
            hText2: 'Fisheye'
        },
    ]);

    return (
        <section className='sect3 px-5 pt-3 mb-5'>

            <div className="container pt-5">

                <div className="d-flex justify-content-between mb-5 pb-3">

                    <div className="sect3-h1">

                        <Headers 
                        header1={true}
                        hClassName='ms-auto sect3-header'
                        hText1='Our Creations'/>

                    </div>

                    <div className="sect3-btn">
                        
                        <Button 
                        btnClass='btn py-2 px-5'
                        btnText='SEE ALL'/>  
                        
                    </div>    

                </div>

                <div className="row">

                    <Creations 
                    creations={creations}/>

                </div>

            </div>
            
        </section>
    )
}

export default Sect3
