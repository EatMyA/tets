import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={44}
      height={84}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 15h40.222l1.111 13.555h-1.555c-.222-2.666-.667-4.666-1.334-6-.666-1.333-1.777-2.444-2.888-3.11-1.334-.667-3.111-.89-5.778-.89H11.556l16.222 20.89-18.667 22h20.444c3.778 0 6.445-.667 8.445-1.778s3.333-3.556 4.444-7.334l1.556.445L41.778 69H0v-1.333l20.667-24.223L0 17v-2z"
        fill="#EB2D7C"
      />
      <Path
        d="M14.32 75h1.22l-.705 5h-1.22l.705-5zm.72-.745a.554.554 0 01-.43-.175.55.55 0 01-.12-.45.719.719 0 01.245-.445c.14-.12.3-.18.48-.18a.533.533 0 01.54.625.713.713 0 01-.25.45.697.697 0 01-.465.175zm3.853 4.43l.17-1.22h5l-.17 1.22h-5zm.305-2.15l.17-1.22h5l-.17 1.22h-5zM27.791 80l.815-5.78h-.88l.5-1.22h1.77l-.985 7h-1.22zM18.65 11l.985-7h1.32l2.28 4.795L23.91 4h1.22l-.985 7H22.83l-2.285-4.795L19.87 11h-1.22z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
