import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'

function Header() {
  return (
    <div className="header">
      <h1> this is the header</h1>
      <div className="header_left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt=""/>

          <div className="header_search">
            {/* SearchIcon */}
            <SearchIcon/>
            <input type="text"/>
            

          </div>

      </div>

      <div className="header_right">

      </div>

      


   </div>
  )
}

export default Header
