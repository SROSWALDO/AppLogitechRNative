import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const Cart = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    style={{
      fill: "#fff",
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z" />
    <Circle cx={10.5} cy={19.5} r={1.5} />
    <Circle cx={16.5} cy={19.5} r={1.5} />
  </Svg>
);
export default Cart;
