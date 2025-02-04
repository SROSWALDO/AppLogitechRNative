import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Sidebar() {
  return (
    <View className="shadow w-full h-[80px] flex justify-around flex-row  items-center absolute bottom-0 z-50 bg-white ">
      <Text className="text-black text-xl">
        <Link href="/" >Home</Link>
      </Text>
      <Text className="text-black text-xl">
        <Link href="/about" >Categories</Link>
      </Text>
    </View>
  );
}
