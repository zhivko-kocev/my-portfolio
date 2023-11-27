import * as React from "react"
const HtmlIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={50}
        height={50}
        className={"s4"}
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
            d="M145.84 204.144V307.84h-19.68v-44.832H77.536v44.832h-19.68V204.144h19.68v42.32h48.624v-42.32h19.68zM205.408 221.776v86.08h-19.68v-86.08h-29.936v-17.632h80.624v17.632h-31.008zM367.616 204.144V307.84h-19.664v-56.528c0-4.496.128-9.632.368-15.344l.368-7.744.384-7.664h-.592l-2.352 7.216-2.288 7.216c-2.128 6.48-3.776 11.264-4.944 14.352l-22.8 58.496h-17.92l-23.024-58.048c-1.264-3.184-2.944-7.968-5.008-14.352l-2.336-7.216-2.352-7.136h-.608l.368 7.52.384 7.616c.304 5.872.448 10.912.448 15.104v56.528h-19.68V204.16h32.064l18.544 48.016c1.264 3.344 2.944 8.128 5.008 14.352l2.288 7.216 2.336 7.136h.688l2.208-7.136 2.288-7.136c1.872-6.032 3.504-10.8 4.864-14.288l18.24-48.176h32.72zM405.52 204.144v86.08h48.624v17.632h-68.32V204.16h19.696v-.016z"
            style={{
                fill: "#fff",
            }}
        />
    </svg>
)
export default HtmlIcon
