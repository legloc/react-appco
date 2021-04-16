import { Link } from 'react-router-dom'

const Breadcrumb = ({ links }) => (
  <ul className="breadcrumb">
    { links.map(link => (
      <li key={ link.url } className="breadcrumb-item">
        <Link className="breadcrumb-link" to={ link.url }>{ link.title }</Link>
      </li>
    )) }
  </ul>
)

export default Breadcrumb