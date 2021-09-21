// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//Components
import Button from "../button"
import Hamburger from 'hamburger-react'

// Assets
import byteLogo from "../../assets/img/byte-icon-with-text.png"

//Styles
import "./header.css"
import "../../styles/global.css"
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

// START: TEMPLATE = = = = = = = = = = = = = = = = = = = =
const Header = ({ page }) => {
  const [navStyle, setNavStyle] = React.useState((page !== "BYTE Community" && page !== "BYTE Partners") ? "sm:z-10 z-50 shadow-none bg-transparent" : "z-50 shadow-nav bg-gray-lightest")

  const [click, setClick] = React.useState(false)

  // HANDLE SCROLL FUNCTION: NAVBAR TRANSPARENT AND NO DROP SHADOW IF ON TOP OF WINDOW
  React.useEffect(() => {
    window.onscroll = () =>
      window.scrollY === 0 && (page !== "BYTE Community" && page !== "BYTE Partners")
        ? setNavStyle("sm:z-10 z-50 shadow-none bg-transparent")
        : setNavStyle("z-50 shadow-nav bg-gray-lightest")
  })

  return (
    <header
      className={`fixed top-0 w-full px-10 py-0 transition-all duration-300 ease-in-out sm:flex sm:items-center justify-between ${navStyle}`}
    >
      {/* START: BRAND NAV BUTTON */}
      <div className="flex-none">
        <Link to="/">
          <div className="flex items-center py-6 ">
            <img src={byteLogo} className="mr-4 header-bytelogo" alt="BYTE Logo" />
            {/* <h1 className="bold">{siteTitle.toLowerCase()}</h1> */}
          </div>
        </Link>
      </div>
      {/* END: BRAND NAV BUTTON */}

      {/* START: NAV BUTTONS */}
      <nav>
        <div className="block absolute top-4 right-8 pointer md:hidden">
          <Hamburger toggled={click} toggle={setClick} />
        </div>
        <ul className= {`list-reset sm:flex sm:items-center nav-menu ${click && click ? "active" : ""}`}>
          {/* START: NAV BUTTON */}
          {navbarBtns.map((navbarBtn, key) => {
            return (
              <li className="block lg:px-8 px-4 py-2 bg-red-300 content-center border-b-8 border-transparent hover:border-gray-300 sm:ml-4">
                <Link
                  className="navAnimation"
                  activeClassName="navAnimation active"
                  to={navbarBtn.route}
                  onClick={() => setClick(false)}
                >
                  <p>
                    <span className="w-auto medium mt-2" style={{ color: navbarBtn.color }}>{navbarBtn.name}</span>
                  </p>
                </Link>
              </li>
            )
          })}

          <Button className="md:ml-8 m-4" link="#" label="Join Us" type="primary" />

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
    color: "#FFB700",
  },
  {
    id: 1,
    name: "Projects",
    route: "/projects",
    color: "#7A2FF2",
  },
  {
    id: 2,
    name: "Community",
    route: "/community",
    color: "#57CEFE",
  },
  {
    id: 3,
    name: "Partners",
    route: "/partners",
    color: "#33D69F",
  },
]

// Start: Types
Header.propTypes = { siteTitle: PropTypes.string }
// End: Types

// Start: Default Values
Header.defaultProps = { siteTitle: `` }
// End: Default Values
// END: SCRIPT = = = = = = = = = = = = = = = = = = = =
export default Header
