import { useState } from 'react'
import ChevronDownIcon from './ChevronDownIcon'
import ChevronUpIcon from './ChevronUpIcon'

const Dropdown = ({ title, list, onChange }) => {
  const [dropdownTitle, setDropdownTitle] = useState(title)
  const [isOpen, setOpen] = useState(false)

  const handleListItemClick = listItemTitle => {
    setDropdownTitle(listItemTitle)
    setOpen(!isOpen)
    onChange(listItemTitle)
  }

  return (
    <div className="dropdown-wrapper">
      <div className={ `dropdown-header ${ isOpen && 'active' }` } onClick={ () => setOpen(!isOpen) }>
        <span className="dropdown-header-title">{ dropdownTitle }</span>
        { isOpen ? <ChevronUpIcon /> : <ChevronDownIcon /> }
      </div>
      <div className={ `dropdown-list ${ isOpen && 'open' }` }>
        { list.map(item => (
          <button key={ item } className="dropdown-list-item" onClick={ () => handleListItemClick(item) }>{ item }</button>
        )) }
      </div>
    </div>
  )
}

export default Dropdown