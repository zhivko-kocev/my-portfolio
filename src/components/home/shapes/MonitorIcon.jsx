import * as React from "react"
const MonitorIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={50}
        height={50}
        className={"s8"}
        viewBox="0 0 512 512"
        {...props}
    >
        <path
            d="M21.664 68.64h468.64v286H21.664z"
            style={{
                fill: "#f33052",
            }}
        />
        <path d="M480 77.632V346.96H32V77.632h448m8-32H24c-13.2 0-24 10.8-24 24V354.96c0 13.2 10.8 24 24 24h464c13.2 0 24-10.8 24-24V69.632c0-13.2-10.8-24-24-24z" />
        <path
            d="M216 378.976h80v71.328h-80z"
            style={{
                fill: "#494949",
            }}
        />
        <path d="M142.992 434.368h225.92v32h-225.92zM216 378.976h66.752L216 408.72z" />
        <g
            style={{
                opacity: 0.35,
            }}
        >
            <path
                d="M32 77.632h136L32 160.64z"
                style={{
                    fill: "#fff",
                }}
            />
        </g>
        <path
            d="M170 118.256h128v16H170zM214 156.256h128v16H214zM170 204.256h128v16H170zM214 242.208h128v16H214zM170 290.208h128v16H170z"
            style={{
                fill: "#fff",
            }}
        />
    </svg>
)
export default MonitorIcon
