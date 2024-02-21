import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CSS from './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className={CSS['container-fluid']}>
        <Header />
        <h1>About Us</h1>
        <p >
          <Link to={'/'} className={CSS['home-link']}><span>Home</span></Link>
          <i className={`${CSS['arrow']} fa-solid fa-arrow-right`}></i>
          <Link to={'/about'} className={CSS['about-link']}><span>About Us</span></Link>
        </p>
      </div>
      <div className='container'>
        <div className={CSS['aboutus-container']}>
          <div className={CSS['aboutus-img']}>
            <img className={CSS['img']} src={'https://img.freepik.com/free-vector/online-app-tourism-traveler-with-mobile-phone-passport-booking-buying-plane-ticket_74855-10966.jpg?w=1380&t=st=1708456928~exp=1708457528~hmac=66f72252625e80c903f61fbaeac8e43accf8e3efc960854c3b91f013854ac2b2'} alt='img' width={'500px'} />
          </div>
          <div className={CSS['aboutus-details']}>
            <p>
              In 2023, our journey began with a clear vision: to revolutionize the travel
              industry. We aimed to simplify the process for travelers by presenting all
              flight options in one user-friendly platform, offering a refreshing alternative
              to the cluttered and bewildering websites that often characterize travel booking.
            </p>
            <p>
              Today, we stand as a global leader in the travel sector, with over 100
              million users worldwide relying on our app and website each month. Our commitment
              to transparency and impartiality sets us apart, as we tirelessly scour billions
              of prices for flights, hotels, and car rentals to deliver the best deals available.
            </p>
            <p>
              Our mission remains unwavering: to empower travelers to plan and book their
              journeys with confidence and ease. Whether it's harnessing technology to
              streamline complexities or forging partnerships with reputable providers
              for transparent solutions, we are dedicated to ensuring everyone discovers
              the perfect travel options tailored to their needs.
            </p>
          </div>
        </div>
      </div>
      <div className={CSS['container-vision']}>
        <div className={`${CSS['container-vision-about']} container`}>
          <h1>Our vision is to effortlessly guide every traveler on their journey of exploration, ensuring unforgettable experiences for generations to come</h1>
        </div>
      </div>

      <div className='container'>
        <div className={CSS['aboutus-container']}>
          <div className={CSS['aboutus-img']}>
            <img className={CSS['img']} src={'https://img.freepik.com/premium-vector/man-emigrate-concept_118813-3998.jpg?w=996'} alt='img' width={'500px'} />
          </div>
          <div className={CSS['aboutus-details']}>
            <p>
              Travel is all about freedom. So it makes sense that planning and booking your trip should be simple, not a chore.
            </p>
            <p>We know you're looking for the best prices and maximum flexibility to choose what's right for you.</p>
            <p>That’s why we're always hard at work making sure our app and website offer a super straightforward and speedy experience.</p>
            <p>
              We do the hard work so our travellers don’t have to. We use our data, insights and tech innovation to make the
              complex simple, so you can get back to the more important stuff - stress-free planning, booking and travelling.
            </p>
            <p>
              As travellers ourselves, we always lead with honesty and transparency - and we hold our partners to the same
              high standards. That means no hidden fees, no secret charges, no added cost to you, so we always remain unbiased.
            </p>
            <p>We believe that travel should have a positive impact. That’s why we’re committed to helping shape a more
              responsible future for travel in collaboration with our partners.
            </p>
            <p>From communicating the environmental impact
              of flights and sharing unbiased information so you can make an informed choice, to making our site as accessible
              as possible and our business as inclusive as can be, our thinking isn’t just for today and tomorrow, it’s for generations to come.</p>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default About