import React from 'react'
import Logo from "../../img/logo.png"
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    // add search icon 
    <div className='LogoSearch'>
      <img src ={Logo} alt="" />

      {/* make the search text bar */}
      <div className="Search">
        <input type="text" placeholder='#Explore' />
        {/* added icons */}
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
      
    </div>
  )
}

export default LogoSearch
