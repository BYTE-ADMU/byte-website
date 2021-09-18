// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

//Components
import Button from "../button"

// Assets
import byteLogo from "../../assets/img/byte-icon-without-text.png"

//Styles
import "./header.css"
import "../../styles/global.css"
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

// START: TEMPLATE = = = = = = = = = = = = = = = = = = = =
const Header = ({ siteTitle, page }) => {
  const [navStyle, setNavStyle] = React.useState(page !== "BYTE Community" ? "z-10 shadow-none bg-transparent" : "z-50 shadow-nav bg-gray-lightest")

  // HANDLE SCROLL FUNCTION: NAVBAR TRANSPARENT AND NO DROP SHADOW IF ON TOP OF WINDOW
  React.useEffect(() => {
    window.onscroll = () => 
      window.scrollY === 0 && page !== "BYTE Community" ? setNavStyle("z-10 shadow-none bg-transparent") : setNavStyle("z-50 shadow-nav bg-gray-lightest");
  })

  return (
    <header className={`fixed top-0 w-full px-10 py-0 transition-all duration-300 ease-in-out md:flex md:items-center md:justify-between ${navStyle}`}>
      {/* START: BRAND NAV BUTTON */}
      <div className="flex-none">
        <Link to="/">
          <div className="flex items-center py-6 ">
            <img src={byteLogo} className="mr-4 header-bytelogo" />
            <h1 className="bold">{siteTitle.toLowerCase()}</h1>
          </div>
        </Link>
      </div>
      {/* END: BRAND NAV BUTTON */}

      {/* START: NAV BUTTONS */}
      <nav>
        <ul className="list-reset md:flex md:items-center">
          {/* START: NAV BUTTON */}
          {navbarBtns.map((navbarBtn, key) => {
            return (

              <li className="block px-8 py-2 bg-red-300 content-center border-b-8 border-transparent hover:border-gray-300 md:ml-4">
                <Link className="navAnimation" activeClassName="navAnimation active" to={navbarBtn.route}>
                  <p className="medium mt-2">
                    <a style={{ color: navbarBtn.color }}>{navbarBtn.name}</a>
                  </p>
                </Link>
              </li>

            )
          })}

          <Button className="ml-8" link="#" label="Join Us" type="primary" />
          {/* END: NAV BUTTON */}
        </ul>
      </nav>

      {/* END: NAV BUTTONS */}
    </header>
  )
}
// END: TEMPLATE = = = = = = = = = = = = = = = = = = = =

// START: SCRIPT = = = = = = = = = = = = = = = = = = = =
const navbarBtns = [
  {
    id: 0,
    name: "About",
    route: "/about",
    color: "#FFB700"
  },
  {
    id: 1,
    name: "Projects",
    route: "/projects",
    color: "#7A2FF2"
  },
  {
    id: 2,
    name: "Community",
    route: "/community",
    color: "#57CEFE"
  },
  {
    id: 3,
    name: "Partners",
    route: "/partners",
    color: "#33D69F"
  }
]

// Start: Types 
Header.propTypes = { siteTitle: PropTypes.string }
// End: Types 

// Start: Default Values
Header.defaultProps = { siteTitle: ``, }
// End: Default Values 
// END: SCRIPT = = = = = = = = = = = = = = = = = = = =
export default Header
