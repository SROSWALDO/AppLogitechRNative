import { Image, View } from "react-native";
import Menu from "../assets/menu";
import Cart from "../assets/Cart";



export default function Navbar() {
  return (
    <View className="w-full flex-row h-16 items-center justify-between  text-white absolute top-0 z-50 px-2">
      <Menu/>
      <Image  source={require('../assets/logoG.png')} style={{ width: 100, height:40 }} />
      <Cart/>
    </View>
  );
}
