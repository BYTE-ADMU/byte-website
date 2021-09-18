// START: IMPORTS = = = = = = = = = = = = = = = = = = = =
// Dependencies
import * as React from "react"
import { Link } from "gatsby"

// Store
import { observer } from "mobx-react"
import store from "../../store/index"

//Components
import Button from "../button"

//Assets
import CloseMenuIcon from "../../assets/img/close-menu-icon.svg"
import SidebarIllustration from "../../assets/img/sidebar-illustration.svg"

//Styles
import "./header.css"
import "../../styles/global.css"
// END: IMPORTS = = = = = = = = = = = = = = = = = = = =

// START: TEMPLATE = = = = = = = = = = = = = = = = = = = =
const sidebar = () => {
    const Sidebar = () => (
        <nav
            className="fixed top-0 z-50 h-full px-2 shadow-lg rounded-3xl bg-gray-lightest"
            style={{ width: "250px", right: "0" }}
        >

            {/* START: NAV BUTTONS */}
            <ul className="items-center">
                <li className="flex flex-row-reverse w-full mt-5 mb-14">
                    <button
                        className=""
                        style={{  width: "60px", height: "60px" }}
                        onClick={() => store.setIsOpenSideNav(false)}
                    >
                        <img src={CloseMenuIcon} />
                    </button>
                </li>
                {/* START: NAV BUTTON */}
                {store.navbarBtns.map((navbarBtn, key) => {
                    return (
                        <li className="content-center w-full px-8 py-5 hover:bg-gray-lighter">
                            <Link className="navAnimation" to={navbarBtn.route}>
                                <h2 className="mt-2 text-center medium">
                                    {navbarBtn.name}
                                </h2>
                            </Link>
                        </li>
                    )
                })}

                {/* START: JOIN US BUTTON */}
                <li className="flex items-center justify-center w-full py-5">
                    <Button
                        link="#"
                        label="Join Us"
                        type="primary"
                    />
                </li>
                {/* END: JOIN US BUTTON */}

                <li className="flex items-center justify-center w-full py-20">
                    <img src={SidebarIllustration} style={{width:"150px", height:"150px"}}/>
                </li>

                {/* END: NAV BUTTON */}
            </ul>

            {/* END: NAV BUTTONS */}

        </nav>
    )

    return <div className="relative block">{store.isOpenSidenav && <Sidebar />}</div>
}
// END: TEMPLATE = = = = = = = = = = = = = = = = = = = =
export default observer(sidebar)
