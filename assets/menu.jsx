import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Menu = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    style={{
      fill: "#fff",
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
  </Svg>
)
export default Menu
