import './index.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const About = () => {
    const imageNames = ['bombaytimes', 'cosmopolitan', 'healthshots', 'healthsite', 'Mid-Day', 'pinkvilla', 'thestatesman', 'vouge']
    return (
        <>
            <div className='specialEffect'>
            <Navbar />
                <div className='empty-div'>
                    <h1 className='serviceHeading1'>About Us</h1>
                    <p className='aboutDescript1'>"We are your reliable medium for impactful communication"</p>
                </div>
            </div>
            <div className='whatWeOffer'>
    <div className='aboutContent'>
        <img src="/blurred-abstract-background-interior-view-looking-out-toward-empty-office-lobby-entrance-doors-glass-curtain-wall-with-frame_1339-6364.jpg" alt='image' className='aboutImage' />
        <div className='aboutText'>
            {/* <h1>Little Story About Us</h1> */}
            {/* <h3 className='aboutHeading'>Little Story About Us</h3> */}
            <p className='aboutDescriptheader'>
                <span className='specialword'>MediaThings</span> is a pioneering media services company committed to redefining how businesses communicate with their audiences. Combining innovative strategies with a client-focused approach, MediaThings offers a comprehensive suite of services designed to enhance brand visibility and audience engagement in today's dynamic media landscape. <br/><br/> 
            </p>
            <p className='aboutDescript'>
                A team of seasoned media professionals with extensive industry experience, work together at MediaThings with a vision to deliver integrated media solutions. The company has become a trusted partner for businesses in various sectors like healthcare, entertainment, defence, logistics, FMCG etc, and seeking expert guidance in digital marketing, public relations, and media management. MediaThings excels through its dedication to quality, creativity, and results-driven strategies, ensuring every client achieves their communication objectives with precision and impact.<br/><br/> 

                With a dedication to quality, creativity, and results-driven strategies, MediaThings ensures that every client achieves their communication objectives with precision and impact. Whether you are looking to boost your digital presence, manage public relations, or track media impact, MediaThings is your trusted partner in navigating the complex media landscape.
                <br/><br/> 
            </p>
        </div>
    </div>
</div>

            <div className='getFeaturedOn'>
                <h1 className='heading'>So Many Brands Trust Us</h1>
                    <div className='featuredImages'>
                        {
                            imageNames.map(eachImage => (
                                <img src={process.env.PUBLIC_URL + `/getFeaturedImages/${eachImage}.png.webp`} alt="eachImage" className='featured-image' />
                            ))
                        }
                    </div>
            </div>
            <div className='redirection about-redirection'>
                <div className='redirectionAboutStructure'>
                    <h1>LET'S MEET</h1>
                    <p className='redirection-descript'>Book a free 15-minute session where we will discuss your project, your issues and how to solve them.</p>
                    <Link to='/contactUs' className='redirectionButton'>
                        <button type='button' className='button'>Let's Start a Project</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About