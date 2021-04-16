import MobilePreviewImage from '../resources/mobile-preview.png'
import CleanDesignIcon from '../resources/clean-design-icon.svg'
import SecureDataIcon from '../resources/secure-data-icon.svg'
import RetinaReadyIcon from '../resources/retina-ready-icon.svg'

const MainPage = () => (
  <div className="wrapper">
    <section className="section section-header">
      <h1 className="header-logo">AppCo</h1>
      <div className="row">
        <div className="col promo">
          <h2 className="promo-title">
            <span className="fw-700">Brainstorming</span> for desired perfect Usability
          </h2>
          <p className="promo-description">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
          <a className="btn btn-light" href="/">View Stats</a>
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
        <div className="col about-card">
          <img src={ CleanDesignIcon } alt="Clean Design" />
          <h3 className="card-title">Clean Design</h3>
          <p className="card-description">Increase sales by showing true dynamics of your website.</p>
        </div>
        <div className="col about-card">
          <img src={ SecureDataIcon } alt="Secure Data" />
          <h3 className="card-title">Secure Data</h3>
          <p className="card-description">Build your online store’s trust using Social Proof & Urgency.</p>
        </div>
        <div className="col about-card">
          <img src={ RetinaReadyIcon } alt="Retina Ready" />
          <h3 className="card-title">Retina Ready</h3>
          <p className="card-description">Realize importance of social proof in customer’s purchase decision.</p>
        </div>
      </div>
    </section>
  </div>
)

export default MainPage