import { Link } from 'react-router-dom'
import Card from '../components/Card'
import MobilePreviewImage from '../resources/mobile-preview.png'
import CleanDesignIcon from '../resources/clean-design-icon.svg'
import SecureDataIcon from '../resources/secure-data-icon.svg'
import RetinaReadyIcon from '../resources/retina-ready-icon.svg'

const cards = [{
  title: 'Clean Design',
  description: 'Increase sales by showing true dynamics of your website.',
  icon: CleanDesignIcon
}, {
  title: 'Secure Data',
  description: 'Build your online store’s trust using Social Proof & Urgency.',
  icon: SecureDataIcon
}, {
  title: 'Retina Ready',
  description: 'Realize importance of social proof in customer’s purchase decision.',
  icon: RetinaReadyIcon
}]

const MainPage = () => (
  <div>
    <section className="section section-header">
      <h1 className="header-logo">AppCo</h1>
      <div className="row">
        <div className="col promo">
          <h2 className="promo-title">
            <span className="fw-700">Brainstorming</span> for desired perfect Usability
          </h2>
          <p className="promo-description">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
          <Link className="btn" to="/stats">View Stats</Link>
        </div>
        <div className="col">
          <div className="header-mobile-wrapper">
            <img className="header-mobile-preview" src={ MobilePreviewImage } alt="Mobile Preview" />
          </div>
        </div>
      </div>
    </section>

    <section className="section section-about">
      <h2 className="about-title">
        Why <span className="fw-700">small business owners</span> 
        <br />
        <span className="fw-700">love</span> AppCo?
      </h2>
      <p className="about-description">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
      <div className="row">
        
        { cards.map(card => (
          <Card key={ card.title } title={ card.title } description={ card.description } icon={ card.icon } />
        )) }
        
      </div>
    </section>

    <section className="section section-footer ta-center">
      <div className="footer-form">
        <input className="form-control" type="email" placeholder="Enter your email" />
        <button className="btn btn-primary">Subscribe</button>
      </div>
      <div className="row">
        <div className="col ta-left">
          <span className="fs-2">AppCo</span>
        </div>
        <div className="col ta-center">
          <span className="fs-1">All rights reserved by ThemeTags</span>
        </div>
        <div className="col ta-right">
          <span className="fs-1">Copyrights © 2019.</span>
        </div>
      </div>
    </section>
  </div>
)

export default MainPage