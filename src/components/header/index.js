// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// Store
import { observer } from 'mobx-react'
import store from "../../store/index"

//Components
import Button from "../button"

// Assets
import byteLogo from "../../assets/img/byte-icon-without-text.png"
import menuIcon from "../../assets/img/menu-icon.svg"

//Styles
import "./header.css"
import "../../styles/global.css"
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

// START: TEMPLATE = = = = = = = = = = = = = = = = = = = =
const Header = ({ siteTitle }) => {
// START: SCRIPT = = = = = = = = = = = = = = = = = = = =
// Start: States
const [navStyle, setNavStyle] = React.useState("z-10 shadow-none")
// End: States

// Start: Methods
// Navbar Scroll Effect
React.useEffect(() => {
  window.onscroll = () => 
    window.scrollY === 0 ? setNavStyle("bg-transparent z-10 shadow-none") : setNavStyle("z-50 shadow-nav bg-gray-lightest");
})
// End: Methods

// Start: Types 
Header.propTypes = { siteTitle: PropTypes.string }
// End: Types 

// Start: Default Values
Header.defaultProps = { siteTitle: ``, }
// End: Default Values 
// END: SCRIPT = = = = = = = = = = = = = = = = = = = =

// START: TEMPLATE = = = = = = = = = = = = = = = = = = = =
  return (
    <header className={`  w-full  top-0 px-10 py-0 transition-all duration-300 ease-in-out flex items-center justify-between z-50 shadow-nav bg-gray-lightest`}>
      {/* START: BRAND NAV BUTTON */}
      <div className="flex-none">
        <Link to="/">
          <div className="flex items-center py-6">
            <img src={byteLogo} className="mr-4 header-bytelogo" />
            <h1 className="bold">{siteTitle.toLowerCase()}</h1>
          </div>
        </Link>
      </div>
      {/* END: BRAND NAV BUTTON */}

      {/* START: NAV BUTTONS */}
      <nav>
        <ul className="flex items-center">
          {/* START: NAV BUTTON */}
          {store.navbarBtns.map((navbarBtn, key) => {
            return (

              <li className="content-center hidden px-8 py-2 bg-red-300 border-b-8 border-transparent lg:block hover:border-gray-300 md:ml-4">
                <Link className="navAnimation" to={navbarBtn.route}>
                  <p className="mt-2 medium">
                    <a style={{ color: navbarBtn.color }}>{navbarBtn.name}</a>
                  </p>
                </Link>
              </li>

            )
          })}

        {/* START: JOIN US BUTTON */}
          <li><Button className="hidden ml-8 lg:block" link="#" label="Join Us" type="primary" /></li>
        {/* END: JOIN US BUTTON */}

        {/* START: MOBILE MENU BUTTON */}
          <li><button class="block lg:hidden" onClick={()=>store.setIsOpenSideNav(!store.isOpenSidenav)}>
            <img src={menuIcon} />
          </button>  </li>
        {/* END: MOBILE MENU BUTTON */}


          {/* END: NAV BUTTON */}
        </ul>
      </nav>

      {/* END: NAV BUTTONS */}
    </header>
  )
}
// END: TEMPLATE = = = = = = = = = = = = = = = = = = = =
export default observer(Header)
