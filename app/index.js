import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        className=" relative pt-20"
        
      >
        <View style={{ width: "100%", height: 450, top: 0, left: 0 }} pointerEvents="none">
          <Image
            source={require("../assets/banner.jpg")}
            style={{
              width: 600,
              height: "100%",
              position: "absolute",
            }}
          />

          <LinearGradient
            colors={["transparent", "black"]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 250,
            }}
          />
        </View>

        <View className="items-center justify-center text-white px-4">
          <Text className="text-white font-bold text-base mb-2">
            PRESENTAMOS
          </Text>
          <Text
            style={{ fontWeight: "800" }}
            className="text-white font-bold text-2xl"
          >
            ASTRO A50 X
          </Text>
          <Text className="text-white text-center text-base mt-2">
            AUDIFONOS INALAMBRICOS LIGHTSPEED PARA JUEGOS CON PLAYSYNC
          </Text>
          <TouchableOpacity className="bg-[#00B8FC] mt-10 p-4 px-12 rounded">
            <Text className="font-semibold text-white">EXPLORA A50 X</Text>
          </TouchableOpacity>

          <View className="bg-[#00B8FC] mt-10 py-3 px-4 rounded">
            <Text className="underline text-center font-semibold text-white">
              <Text style={{ fontWeight: "900" }}>DOUBLE THE POWER :</Text>{" "}
              Compra uno, obtén el segundo con un 30% de descuento
            </Text>
          </View>
        </View>

        <View className="w-full flex justify-center items-center bg-black mt-5 mb-5">
          <ProductList />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
