import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={65}
      height={88}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M59.747.1a.657.657 0 00-.551-.066L59.2.031 52 2.329a.598.598 0 00-.29.197.502.502 0 00-.11.31v7.489a2.73 2.73 0 00-1.2-.275 2.472 2.472 0 00-1.652.541c-.45.37-.718.882-.748 1.428v.005c.029.547.298 1.062.748 1.432.45.37 1.046.565 1.657.542H50.4a2.471 2.471 0 001.652-.541c.45-.369.718-.882.748-1.428V4.51l6-1.88v5.234a2.74 2.74 0 00-1.2-.274 2.47 2.47 0 00-1.652.541c-.45.369-.718.882-.748 1.428v.005c.028.547.297 1.062.748 1.432.45.37 1.046.565 1.657.542H57.6l.068.001c.525 0 1.035-.157 1.448-.447.414-.29.708-.694.836-1.151l.003-.015A.482.482 0 0060 9.728V.54a.494.494 0 00-.067-.247.56.56 0 00-.185-.191L59.746.1h.001z"
        fill="#F9C0D7"
      />
      <Circle
        cx={27.633}
        cy={42.743}
        r={30}
        transform="rotate(-15 27.633 42.743)"
        fill="#F9C0D7"
      />
      <Path
        d="M34.822 23.032a20.979 20.979 0 016.29 3.632M20.448 62.453a20.978 20.978 0 01-6.291-3.632"
        stroke="#EB2D7C"
        strokeWidth={4}
      />
      <Circle
        cx={27.636}
        cy={42.742}
        r={13.404}
        transform="rotate(-15 27.636 42.742)"
        fill="#EB2D7C"
      />
      <Circle
        cx={27.636}
        cy={42.741}
        r={3.83}
        transform="rotate(-15 27.636 42.741)"
        fill="#F9C0D7"
      />
      <Path
        d="M47.438 85.188c0 1.035-1.05 1.874-2.344 1.874-1.294 0-2.344-.839-2.344-1.874 0-1.036 1.05-1.876 2.344-1.876 1.294 0 2.343.84 2.343 1.876z"
        fill="#F9C0D7"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.438 75.813v9.374H46.5v-9.374h.938z"
        fill="#F9C0D7"
      />
      <Path
        d="M46.5 75.644a.937.937 0 01.754-.919l2.812-.562a.938.938 0 011.121.919v1.668l-4.687.938v-2.044z"
        fill="#F9C0D7"
      />
    </Svg>
  )
}

export default SvgComponent
