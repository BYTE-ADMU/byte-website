import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = ({ 
    link, 
    label, 
}) => (
    <Link to={link}>
        <div className="w-max px-4 py-2 rounded-lg bg-gray-600 font-sans font-bold text-base text-white">
            {label}
        </div>
    </Link>
)

export default Button;