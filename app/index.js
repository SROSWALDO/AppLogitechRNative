import { Link } from "expo-router";
import { View, Text } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions";

export default function Home() {

  const dispatch = useDispatch()

  const products = useSelector(state => state.app.products)

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <View className="bg-black h-screen relative pt-20">
      <Link href="/about" className="text-blue-500">
        Ir al about
      </Link>
      <Text className="text-white text-2xl font-bold">
        ¡Hola desde NativeWind!
      </Text>
    </View>
  );
}
