import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0_572:5075)" fill="#F2F0F5">
        <Path d="M11 0a11 11 0 100 22 11 11 0 000-22zm6.273 18.091a9.476 9.476 0 01-12.546 0l-.122-.112v-.154c.184-.675.92-1.156 1.964-1.463a15.489 15.489 0 014.38-.501 15.49 15.49 0 014.38.5c1.023.308 1.78.789 1.974 1.464v.154l-.03.112zm1.31-1.412l-.216-.276a4.768 4.768 0 00-2.69-1.566A17.919 17.919 0 0011 14.326a17.919 17.919 0 00-4.676.511 4.8 4.8 0 00-2.691 1.566l-.215.276-.195-.286a9.465 9.465 0 1115.564 0l-.205.286z" />
        <Path d="M14.839 9.158a3.846 3.846 0 00-3.837-4.042 3.683 3.683 0 00-3.838 3.837 5.474 5.474 0 001.126 3.705 3.468 3.468 0 002.712 1.156 3.53 3.53 0 002.701-1.116 5.117 5.117 0 001.136-3.54zm-2.17 2.354a2.046 2.046 0 01-1.667.726 1.966 1.966 0 01-1.679-.726A4.216 4.216 0 018.7 8.953c-.02-.61.196-1.203.604-1.657a2.303 2.303 0 011.699-.645 2.18 2.18 0 011.678.767 2.6 2.6 0 01.624 1.77 3.725 3.725 0 01-.635 2.323z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_572:5075">
          <Path fill="#fff" d="M0 0h22v22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
