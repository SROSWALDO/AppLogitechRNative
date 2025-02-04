import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; // Asegúrate de importar LinearGradient
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions";

export default function Home() {

  const dispatch = useDispatch()

  const products = useSelector(state => state.app.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <View className="bg-black h-screen relative pt-20">
      {/* Contenedor para la imagen y el degradado */}
      <View style={{ width: "100%", height: 450, position: "absolute", top: 0, left: 0 }}>
        <Image
          source={require('../assets/banner.jpg')}
          style={{
            width: 600,  
            height: "100%", 
            position: "absolute", 
          }}
        />

        <LinearGradient
          colors={['transparent', 'black']} 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 250, 
          }}
        />
      </View>

      <View className="mt-[420px] items-center justify-center text-white" >
        <Text className="text-white font-bold text-base mb-2 ">PRESENTAMOS</Text>
        <Text style={{ fontWeight: '800' }} className="text-white font-bold text-2xl " >ASTRO A50 X</Text>
        <Text className="text-white w-[250px] text-center text-base mt-2 " >AUDIFONOS INALAMBRICOS LIGHTSPEED PARA JUEGOS CON PLAYSYNC</Text>
        <TouchableOpacity className="bg-[#00B8FC] mt-10 text-lg p-2 py-5 px-12 rounded" >
        <Text className="font-semibold" >EXPLORA A50 X</Text>
      </TouchableOpacity>

      <View className="bg-[#00B8FC] mt-16 py-3 px-3" >
        <Text className="underline text-center font-semibold"><Text style={{ fontWeight: "900" }} >DOUBLE THE POWER :</Text> Compra uno, obtén el segundo con un 30% de descuento</Text>
      </View>
      </View>

    </View>
  );
}
