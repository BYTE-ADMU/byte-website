// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//Components
import Button from "../button"

// Assets
import byteLogo from "../../assets/img/byte-icon-without-text.png"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

//Styles
import "./header.css"
import "../../styles/global.css"
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

// START: TEMPLATE = = = = = = = = = = = = = = = = = = = =
const Header = ({ siteTitle, page }) => {
  const [navStyle, setNavStyle] = React.useState(page !== "BYTE Community" ? "z-10 shadow-none bg-transparent" : "z-50 shadow-nav bg-gray-lightest")

  const [click, setClick] = React.useState(false)
  const [button, setButton] = React.useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  // HANDLE SCROLL FUNCTION: NAVBAR TRANSPARENT AND NO DROP SHADOW IF ON TOP OF WINDOW
  React.useEffect(() => {
    showButton()
    window.onscroll = () =>
      window.scrollY === 0 && page !== "BYTE Community"
        ? setNavStyle("bg-transparent z-10 shadow-none")
        : setNavStyle("z-50 shadow-nav bg-gray-lightest")
  })

  window.addEventListener("resize", showButton)

  return (
    <header
      className={`fixed top-0 w-full px-10 py-0 transition-all duration-300 ease-in-out md:flex md:items-center md:justify-between ${navStyle}`}
    >
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
        <div
          className="block absolute top-8 right-10 pointer md:hidden"
          onClick={handleClick}
        >
          {click ? (
            <FontAwesomeIcon icon={faBars} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          )}
        </div>
        <ul className= {click ? "list-reset md:flex md:items-center nav-menu" : "list-reset md:flex md:items-center nav-menu active"}>
          {/* START: NAV BUTTON */}
          {navbarBtns.map((navbarBtn, key) => {
            return (
              <li className="block px-8 py-2 bg-red-300 content-center border-b-8 border-transparent hover:border-gray-300 md:ml-4">
                <Link
                  className="navAnimation"
                  activeClassName="navAnimation active"
                  to={navbarBtn.route}
                  onClick={closeMobileMenu}
                >
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
