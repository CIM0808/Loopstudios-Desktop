import guy from '../assets/images/desktop/image-interactive.jpg'
import Headers from './Headers'

const Sect2 = () => {

    const [sect2Text] = [
        {
            text: `Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind with their brands.`,
        }
    ]

    

    return (
        <section className='sect2 px-5 pb-md-5'>

            <div className="container mb-5">

                <div className="sect2-bg">

                    <div className="sect2-img mt-5 pt-5">

                        <img src={guy} alt="/#" />

                    </div>

                    <div className="sect2-text text-justify">

                        <Headers 
                        header1={true}
                        hClassName='py-3 sect2-header'
                        // hStyle='letterSpacing: `5px`'
                        hText1='The leader in'
                        hText2='interactive vr'/>

                        <p style={{margin: 0, color: 'hsl(0, 0%, 55%)'}}>
                            {sect2Text.text}
                        </p>

                    </div>

                </div>

            </div>
            
        </section>
    )
}

export default Sect2
