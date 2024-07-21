import './index.css'
import { Component } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';

class Home extends Component {
    
    render() {
        const ImageScroller = () => (
            <div class="marquee">
                <div class="marquee__group">
                    <img src="/tieupCompanies/AICFB.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/bookmychef.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/BVC.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/galalite.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/honey.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/intercont.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/jetking.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/MHS.png" alt="AICFB" className='tieupCompaniesImages MHS' />
                    <img src="/tieupCompanies/mum.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/Richkardz.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/SA.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/Sde.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/SKS.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/tea-culture-world.png" alt="AICFB" className='tieupCompaniesImages' />
                </div>
                <div aria-hidden="true" class="marquee__group">
                    <img src="/tieupCompanies/AICFB.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/bookmychef.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/BVC.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/galalite.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/honey.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/intercont.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/jetking.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/MHS.png" alt="AICFB" className='tieupCompaniesImages MHS' />
                    <img src="/tieupCompanies/mum.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/Richkardz.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/SA.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/Sde.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/SKS.png" alt="AICFB" className='tieupCompaniesImages' />
                    <img src="/tieupCompanies/tea-culture-world.png" alt="AICFB" className='tieupCompaniesImages' />
                </div>
            </div>
        )
        const OurClientsScroller = () => (
            <div className="marque">
                <div className="marque__group">
                    {[
                        { src: '/clientImages/AnkitMehra.png', alt: 'Ankita Mehra', className: 'ankita'},
                        { src: '/clientImages/debashi.png', alt: 'Dr. Debeshi Bhattacharjee', className: 'debashi'},
                        { src: '/clientImages/kiran.png', alt: 'Dr. Kiran Rukadikar',className: 'kiran'},
                        { src: '/clientImages/madhu.png', alt: 'Dr. Madhu Chopra',className:'madhu'},
                        { src: '/clientImages/shikha.png', alt: 'Shikha Khanna' , className: ''},
                        { src: '/clientImages/shuti.png', alt: 'Dr. Stuti Khare Shukla',className:'stuti' },
                        { src: '/clientImages/Tina.png', alt: 'Ms Tina Vinod', className: 'tina'},
                        { src: '/clientImages/Trishna.png', alt: 'Dr. Trishna Gupte',className: 'trishna'},
                        { src: '/clientImages/Twinkle.png', alt: 'Twinkle Jain', className: 'Twinkle'},
                    ].map(client => (
                        <div className="clientImageWrapper" key={client.alt}>
                            <img src={client.src} alt={client.alt} className="clientImages" />
                            <span className={`clientName ${client.className || ''}`}>{client.alt}</span>
                        </div>
                    ))}
                </div>
        
                <div aria-hidden="true" className="marque__group">
                    {[
                        { src: '/clientImages/AnkitMehra.png', alt: 'Ankita Mehra', className: 'ankita'},
                        { src: '/clientImages/debashi.png', alt: 'Dr. Debeshi Bhattacharjee', className: 'debashi'},
                        { src: '/clientImages/kiran.png', alt: 'Dr. Kiran Rukadikar',className: 'kiran'},
                        { src: '/clientImages/madhu.png', alt: 'Dr. Madhu Chopra',className:'madhu'},
                        { src: '/clientImages/shikha.png', alt: 'Shikha Khanna' , className: ''},
                        { src: '/clientImages/shuti.png', alt: 'Dr. Stuti Khare Shukla',className:'stuti' },
                        { src: '/clientImages/Tina.png', alt: 'Ms Tina Vinod', className: 'tina'},
                        { src: '/clientImages/Trishna.png', alt: 'Dr. Trishna Gupte',className: 'trishna'},
                        { src: '/clientImages/Twinkle.png', alt: 'Twinkle Jain', className: 'Twinkle'},
                    ].map(client => (
                        <div className="clientImageWrapper" key={client.alt}>
                            <img src={client.src} alt={client.alt} className="clientImages" />
                            <span className={`clientName ${client.className || ''}`}>{client.alt}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
        const MailComponent = () => {
        const emailAddress = 'letsconnect@mediathings.in';
        const mailtoLink = `mailto:${emailAddress}`;
        return (
          <a href={mailtoLink} className='email-href'>letsconnect@mediathings.in</a>
        );
    };
        
        
        
        

        const services = [
            {service: 'Digital Marketing', serviceDescript: 'Enhance your online presence with our comprehensive digital marketing services. We specialize in SEO, social media strategies, and targeted advertising to drive traffic and boost conversions.', img: '/services/share-icon.svg'},
            {service: 'Press Release', serviceDescript: 'Ensure your news reaches the right audience with our press release dissemination service. We distribute your announcements to top media outlets, journalists, and industry influencers for maximum impact.', img: '/services/newspaper.svg'},
            {service: 'Press Conference', serviceDescript: 'Organize impactful press conferences with our expert assistance. From venue selection to media invitations and on-site management, we ensure your message is delivered effectively to the press.', img: '/services/podcast.svg'},
            {service: 'Product Launch', serviceDescript: 'Make your product launch unforgettable with our end-to-end event planning and promotion services. We handle everything from pre-launch buzz to post-launch analysis, ensuring a successful debut.', img: '/services/rocket.svg'},
            {service: 'Influencer Management', serviceDescript: "Maximize your brand's reach with our influencer management services. We identify and collaborate with key influencers in your industry to create authentic and impactful campaigns..", img: '/services/handshake.svg'},
            {service: 'Wikipedia Page', serviceDescript: "Enhance your online credibility with a professionally crafted Wikipedia page. Our team of experienced writers ensures your page meets Wikipedia's guidelines and reflects your brand accurately.", img: '/services/globe.svg'},
            {service: 'Media Training', serviceDescript: 'Prepare your spokespeople for media interactions with our comprehensive media training. We offer practical techniques and personalized coaching to help them communicate effectively and confidently.', img: '/services/person-chalkboard.svg'},   
            {service: 'Media Tracking', serviceDescript: 'Stay informed with our media tracking services. We monitor and analyze media coverage of your brand, providing insights and reports to help you understand and respond to public perception.', img: '/services/magnifying-glass.svg'},
            {service: 'Advertorial', serviceDescript: 'Blend advertising with storytelling through our engaging advertorials. We create compelling content that subtly promotes your brand while providing valuable information to readers.', img: '/services/bullhorn.svg'},
           
        ]
        return (
            <>
              <div className='specialEffect'>
                <Navbar />
                <div className='heroClass'>
                    <div className='icons'>
                        <a href="https://www.instagram.com/mediathings_pr?igsh=MXJ4M25wbHRyMGphdA==" target='_blank' className='icon instagram'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                        <br/>
                        <a href="https://www.linkedin.com/in/anshu-ahuja-2a6a5935/" target='_blank' className='icon linkedin'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </div>
                    <div className='text' >
                        <h1 className='textHeading'>
                        We are dedicated to quality, creativity, and results-driven strategies. Our team of experts work closely with you to understand your goals and deliver customised solutions that achieve your communication objectives with precision and impact.
                        </h1>
                        <h1 className='textHeading'>
                        Discover our comprehensive array of services designed to elevate your brand’s visibility and drive audience engagement.
                            
                        </h1>
                        {/* <h1 className='textHeading'>Our Motto: Energy, Respect, Passion, Integration</h1> */}
                    </div>
                    {/* <p className='email'>mediathings.pr@gmail.com</p> */}
                </div>
              </div>
              <div id="services" className='services' >
                <h1 className='heading'>What we offer</h1>
                <div className='cardsContainer'>
                    {services.map(eachService => (
                            <div className='card'>
                                <img src={eachService.img} alt="" className='serviceImage' />
                                <h3>{eachService.service}</h3>
                                <p>{eachService.serviceDescript}</p>
                            </div>
                    ))}
                </div>
              </div>
              <h1 className='heading' id='about'>About Us</h1>
              <div className='whatWeOffer'>
              
                   <div> <img src="/360_F_579485026_Fb2LO9GgmNKkOi18LjoBVAk1wUtZG2DE.jpg" alt="about us" className='aboutImg' /></div>

                    <div className='aboutText'>

                        
                        <p className='aboutDescript'>
                        MediaThings is a pioneering media services company committed to redefining how businesses communicate with their audiences.
                         Combining innovative strategies with a client-focused approach, MediaThings offers a comprehensive suite of services designed to 
                         enhance brand visibility and audience engagement in today's dynamic media landscape. <br/><br/> 

                        A team of seasoned media professionals with extensive industry experience, work together at MediaThings with a vision 
                        to deliver integrated media solutions. The company has become a trusted partner for businesses in various sectors like healthcare, entertainment, defence, logistics, FMCG etc, and seeking expert guidance in digital marketing, public relations, and media management. MediaThings excels through its dedication to quality, creativity, and results-driven strategies, ensuring every client achieves their communication objectives with precision and impact.<br/><br/> 

With a dedication to quality, creativity, and results-driven strategies, MediaThings ensures that every client achieves their communication objectives with precision and impact. Whether you are looking to boost your digital presence, manage public relations, or track media impact, MediaThings is your trusted partner in navigating the complex media landscape.
                        </p>
                    </div>
              </div>
              
              <h1 className='heading'>Our Clients</h1>
              <div className='body'>
                {ImageScroller()}
              </div>
              <div className='body'>
                {OurClientsScroller()}
              </div>
              <h1 id='hiring' className='heading'>Hiring</h1>
              <div>
            {/* Other sections here */}
            <section id="hiring" className='hiring'>
                <div className='centered-div'>
                    <h3 className='center-align' >Join Our Team at MediaThings</h3>
                    <p className='aboutDescript'>
                        With a wide range of services at MediaThings, you’ll have the opportunity to work on diverse and challenging projects that will enhance your skills and experience. If you are looking to be part of a dynamic and creative team, we invite you to explore the exciting career opportunities at MediaThings.
                        Email your CV to us at {MailComponent()}
                    </p>
                </div>
            </section>
            {/* Other sections here */}
        </div>
              
            <h1  id='contactUs' className='heading'>Contact Us</h1>
            <div className='structure'>
                <div className='cardc'>
                    <p className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                    </p>
                    <h3>Email Address</h3>
                    {MailComponent()}
                </div>
                
                <div className='cardc'>
                    <p className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                    </p>
                    <h3>Phone number</h3>
                    <a href="tel:+919987423546"  className="no-underline-link"><p>+91 9987423546</p></a>
                </div>
                <div className='cardc'>
                    <p className='logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                    </p>
                    <h3>Office Location</h3>
                    <Link   className="no-underline-link" target='_blank' to="https://www.google.com/maps?q=5V44+QJ4+Conwood+Paragon,+Opp+Indian+Oil+Petrol+Pump,+Near,+Cama+Industrial+Estate,+Goregaon,+Mumbai,+Maharashtra+400063&ftid=0x3be7b792c5915d07:0x7d3846fa3a474b14&entry=gps&lucs=,47071704,47069508,94212614,47084304&g_ep=CAISDTYuMTA1LjIuNDYzMzAYACCenQoqJCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxMjYxNCw0NzA4NDMwNEICSU4%3D&g_st=iw">

                        <p className='loc'>Conwood Paragon, 612, 6th Floor,<br></br> Near Cama Industrial Estate,<br></br> Opp Indian Oil Petrol Pump, <br></br>Goregaon (East), Mumbai - 400063</p>
                    </Link>
                </div>
            </div>
            <div className='mapContainer'>
                <Link target='_blank' to="https://www.google.com/maps?q=5V44+QJ4+Conwood+Paragon,+Opp+Indian+Oil+Petrol+Pump,+Near,+Cama+Industrial+Estate,+Goregaon,+Mumbai,+Maharashtra+400063&ftid=0x3be7b792c5915d07:0x7d3846fa3a474b14&entry=gps&lucs=,47071704,47069508,94212614,47084304&g_ep=CAISDTYuMTA1LjIuNDYzMzAYACCenQoqJCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxMjYxNCw0NzA4NDMwNEICSU4%3D&g_st=iw">
                    <img src="/mapImage.png" alt="mapImage" className='mapImage' />
                </Link>
            </div>                    
              <Footer />
            </>
        )
    }
}

export default Home