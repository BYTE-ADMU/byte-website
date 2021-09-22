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
        if (color === "red") {
            return `bg-red-primary hover:bg-red-primary active:bg-red-primary`;
        } else if (color === "blue") {
            return `bg-blue-primary hover:bg-blue-primary active:bg-blue-primary`;
        } else if (color === "purple") {
            return `bg-purple-primary hover:bg-purple-primary active:bg-purple-primary`;
        } else if (color === "green") {
            return `bg-green-primary hover:bg-green-primary active:bg-green-primary`;
        } else if (color === "yellow") {
            return `bg-yellow-primary hover:bg-yellow-primary active:bg-yellow-primary`;
        } else {
            return `bg-orange-primary hover:bg-orange-primary active:bg-orange-primary`;
        }
    } else if (type === "secondary") {
        if (color === "red") {
            return `text-red-primary border-red-primary hover:text-red-primary hover:border-red-primary active:bg-red-primary active:text-gray-lightest`
        } else if (color === "blue") {
            return `text-blue-primary border-blue-primary hover:text-blue-primary hover:border-blue-primary active:bg-blue-primary active:text-gray-lightest`;
        } else if (color === "purple") {
            return `text-purple-primary border-purple-primary hover:text-purple-primary hover:border-purple-primary active:bg-purple-primary active:text-gray-lightest`;
        } else if (color === "green") {
            return `text-green-primary border-green-primary hover:text-green-primary hover:border-green-primary active:bg-green-primary active:text-gray-lightest`;
        } else if (color === "yellow") {
            return `text-yellow-primary border-yellow-primary hover:text-yellow-primary hover:border-yellow-primary active:bg-yellow-primary active:text-gray-lightest`;
        } else {
            return `text-orange-primary border-orange-primary hover:text-orange-primary hover:border-orange-primary active:bg-orange-primary active:text-gray-lightest`;
        }
    } else {
        if (color === "red") {
            return `text-red-primary hover:text-red-primary`;
        } else if (color === "blue") {
            return `text-blue-primary hover:text-blue-primary`;
        } else if (color === "purple") {
            return `text-purple-primary hover:text-purple-primary`;
        } else if (color === "green") {
            return `text-green-primary hover:text-green-primary`;
        } else if (color === "yellow") {
            return `text-yellow-primary hover:text-yellow-primary`;
        } else {
            return `text-orange-primary hover:text-orange-primary`;
        }
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