import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={17}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0_572:5062)" fill="#EB2D7C">
        <Path d="M12.139 9.2H4.852v1.555h7.287V9.201zM10.194 13.288H4.852v1.555h5.342v-1.555z" />
        <Path d="M5.583 1.046h-.962a1.73 1.73 0 00-1.207.532c-.319.33-.497.775-.497 1.238v.244H1.704a1.73 1.73 0 00-1.217.543c-.32.337-.494.789-.487 1.256v15.342c-.007.468.167.92.487 1.256.319.338.757.533 1.217.543h13.592a1.73 1.73 0 001.218-.543c.32-.337.494-.788.486-1.256V4.859a1.785 1.785 0 00-.486-1.256 1.73 1.73 0 00-1.218-.543h-1.203v-.244c0-.463-.178-.907-.496-1.238a1.73 1.73 0 00-1.208-.532H11.33l-.067-.059A4.186 4.186 0 008.5 0a4.138 4.138 0 00-2.753.978l-.067.068h-.097zm8.28 3.725l.067-.127h1.607v15.801H1.463V4.615h1.618l.067.127c.144.27.357.495.616.654.259.158.555.243.857.246h7.768c.302-.003.598-.088.857-.246a1.71 1.71 0 00.616-.654v.03zm-7.885-2.2h.327l.222-.264c.26-.257.57-.456.909-.586.34-.13.702-.186 1.064-.166a2.591 2.591 0 011.974.752l.221.264h1.925v1.516H4.37V2.571h1.608z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_572:5062">
          <Path fill="#fff" d="M0 0h17v22H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent