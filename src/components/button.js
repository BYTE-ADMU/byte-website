import * as React from "react"
import { Link } from "gatsby"

const primary = `w-max p-2 lg:px-4 lg:py-2 rounded-lg bg-red-primary 
                font-sans font-bold text-base text-gray-lightest
                transition duration-300 ease-in-out 
                hover:bg-red-secondary hover:drop-shadow-hover
                active:bg-red-primary`

const secondary = `w-max p-2 lg:px-4 lg:py-2 rounded-lg bg-transparent border border-red-primary 
                font-sans font-bold text-base text-red-primary
                transition duration-300 ease-in-out 
                hover:text-red-secondary hover:border-red-secondary hover:drop-shadow-hover
                active:bg-red-primary active:text-gray-lightest`

const tertiary = `w-max bg-transparent border-transparent 
                font-sans font-bold text-base text-red-primary
                transition duration-300 ease-in-out 
                hover:text-red-secondary`

function getStyle(type, color) {
    if (type === "primary") {
        return `bg-${color}-primary hover:bg-${color}-secondary active:bg-${color}-primary`;
    } else if (type === "secondary") {
        return `text-${color}-primary border-${color}-primary hover:text-${color}-secondary hover:border-${color}-secondary active:bg-${color}-primary active:text-gray-lightest`
    } else {
        return `text-${color}-primary hover:text-${color}-secondary`;
    }
}

const Button = ({ 
    link, 
    label,
    type,
    onClick,
    className,
    color
}) => (
    <>
        {
            link && (link[0] === "/" || link[0] === "#")
            ?
                <Link to={link}>
                    <button type="button" className={
                        type === "primary" 
                        ? 
                            ( color ? `${primary} ${className} ${getStyle(type, color)}` : `${primary} ${className}`) 
                        : 
                        type === "secondary" 
                        ? 
                            ( color ? `${secondary} ${className} ${getStyle(type, color)}` : `${secondary} ${className}`) 
                        : 
                            ( color ? `${tertiary} ${className} ${getStyle(type, color)}` : `${tertiary} ${className}`)
                    }>
                        {label}
                    </button>
                </Link>
            :
                link
                ?
                    <a href={link} target="_blank" rel="noreferrer">
                        <button type="button" className={
                            type === "primary" 
                            ? 
                                ( color ? `${primary} ${className} ${getStyle(type, color)}` : `${primary} ${className}`) 
                            : 
                            type === "secondary" 
                            ? 
                                ( color ? `${secondary} ${className} ${getStyle(type, color)}` : `${secondary} ${className}`) 
                            : 
                                ( color ? `${tertiary} ${className} ${getStyle(type, color)}` : `${tertiary} ${className}`)
                        }>
                            {label}
                        </button>
                    </a>
                :
                    <button type="button" className={
                        type === "primary" 
                        ? 
                            ( color ? `${primary} ${className} ${getStyle(type, color)}` : `${primary} ${className}`) 
                        : 
                        type === "secondary" 
                        ? 
                            ( color ? `${secondary} ${className} ${getStyle(type, color)}` : `${secondary} ${className}`) 
                        : 
                            ( color ? `${tertiary} ${className} ${getStyle(type, color)}` : `${tertiary} ${className}`)
                    } onClick={onClick}>
                        {label}
                    </button>
        }
    </>
)

export default Button;