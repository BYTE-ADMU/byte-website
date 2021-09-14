import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const primary = "w-max px-4 py-2 rounded-lg bg-red-primary font-sans font-bold text-base text-gray-lightest"
const secondary = "w-max px-4 py-2 rounded-lg bg-transparent border border-black border-transparent font-sans font-bold text-base text-gray-600"

const Button = ({ 
    link, 
    label,
    type,
    onClick,
    className
}) => (
    <>
        {
            link
            ?
                <Link to={link}>
                    <button type="button" className={type == "primary" ? `${primary} ${className}` : `${secondary} ${className}`}>
                        {label}
                    </button>
                </Link>
            :
                <button type="button" className={type == "primary" ? `${primary} ${className}` : `${secondary} ${className}`} onClick={onClick}>
                    {label}
                </button>
        }
    </>
)

export default Button;