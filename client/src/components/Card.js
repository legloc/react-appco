const Card = ({ title, description, icon }) => (
  <div className="col card">
    <img src={ icon } alt={ title } />
    <h3 className="card-title">{ title }</h3>
    <p className="card-description">{ description }</p>
  </div>
)

export default Card