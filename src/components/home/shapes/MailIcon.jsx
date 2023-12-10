import * as React from "react"
const MailIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={50}
        height={50}
        className={"s7"}
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
            d="M400.272 356.08H112.048v-205.6h288.24v205.6h-.016zm-272.224-16h256.24v-173.6h-256.24v173.6z"
            style={{
                fill: "#fff",
            }}
        />
        <path
            d="m256.176 279.824-140.352-87.12 8.432-13.6 131.888 81.872 131.888-82.512 8.496 13.568z"
            style={{
                fill: "#fff",
            }}
        />
        <path
            d="M342.548 225.448h16v137.196h-16z"
            style={{
                fill: "#fff",
            }}
            transform="scale(-1) rotate(-38.157 -850.211 1013.582)"
        />
        <path
            d="m126.032 352.944-12.608-9.888 84.784-107.888 12.592 9.872z"
            style={{
                fill: "#fff",
            }}
        />
    </svg>
)
export default MailIcon
