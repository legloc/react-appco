import MobilePreviewImage from '../resources/mobile-preview.png'

const MainPage = () => (
  <div className="wrapper">
    <section className="section section-header">
      <h1 className="header-logo">AppCo</h1>
      <div className="row">
        <div className="col promo">
          <h2 className="promo-title">
            Brainstorming for desired perfect Usability
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
  </div>
)

export default MainPage