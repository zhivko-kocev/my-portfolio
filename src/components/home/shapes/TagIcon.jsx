import * as React from "react"
const TagIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={50}
        height={50}
        className={"s11"}
        viewBox="0 0 512 512"
        {...props}
    >
        <circle
            cx={256}
            cy={256}
            r={256}
            style={{
                fill: "#f33052",
            }}
        />
        <path
            d="M213.12 319.776 99.872 270.544V243.28l113.248-49.008v32.112l-79.008 30.208 79.008 31.328v31.856zM223.6 341.408l40.912-170.832h23.776l-41.36 170.832H223.6zM298.768 319.904V288l79.104-31.104-79.104-30.752V194.48l113.36 49.008v27.04l-113.36 49.376z"
            style={{
                fill: "#fff",
            }}
        />
    </svg>
)
export default TagIcon
