import * as React from "react"
const LineIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={50}
    height={50}
    className={"s6"}
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
      d="M125.12 117.12h194.8v16h-194.8zM192.16 174.96h194.8v16h-194.8zM125.12 248h194.8v16h-194.8zM192.16 305.76h194.8v16h-194.8zM125.12 378.88h194.8v16h-194.8z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
)
export default LineIcon
