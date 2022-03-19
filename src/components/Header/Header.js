import React from 'react'
import './Header.css'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderMiddle from './HeaderMiddle/HeaderMiddle'

function Header() {
  return (
    <div>
        <HeaderTop/>
        <HeaderMiddle/>
    </div>
  )
}

export default Header