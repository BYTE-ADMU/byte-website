// START: IMPORTS
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import byteLogo from "../../assets/img/byte-icon-without-text.png"
import './header.css'
import '../../styles/global.css'
// END: IMPORTS

// START: TEMPLATE
const Header = ({ siteTitle }) => (

  <header class="md:flex md:items-center md:justify-between px-4 shadow-lg">

    {/* Logo text or image  */}
    < div class="flex items-center justify-between py-4 bg-red-400" >
      <h1 class="flex">
        {/* <img src={byteLogo} class="header-bytelogo" /> */}
        <a class="no-underline text-grey-darkest hover:text-black" href="#">
          byte
        </a>
      </h1>


    </ div >
    {/* END Logo text or image  */}


    {/* Global navigation  */}
    {/* <nav>
      <ul class="list-reset md:flex md:items-center">
        <li class="md:ml-4">
          <a class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
            Products
          </a>
        </li>
        <li class="md:ml-4">
          <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
            About
          </a>
        </li>
        <li class="md:ml-4">
          <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav> */}
    {/* END Global navigation  */}

  </header>

)
// END: TEMPLATE

// START: TYPES
Header.propTypes = {
  siteTitle: PropTypes.string,
}
// END: TYPES

// START: DEFAULT VALUES
Header.defaultProps = {
  siteTitle: ``,
}
// END: DEFAULT VALUES

export default Header
