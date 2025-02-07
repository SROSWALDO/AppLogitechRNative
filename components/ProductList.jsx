import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions";
import { Image, View, Text } from "react-native";
import { useEffect } from "react";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log("Productos:", products); // Verifica si los productos llegan

  if (!products || products.length === 0) {
    return (
      <View className="flex items-center justify-center p-5">
        <Text className="text-white">Cargando productos...</Text>
      </View>
    );
  }

  return (
    <View className="w-full items-center">
      {products.map((product) => (
        <View key={product.id} className="bg-white mt-5 p-3 rounded-lg">
          <Image source={{ uri: product.image }} style={{ width: 270, height: 250 }} />
          <Text className="text-xl font-bold text-center mt-2  " >{product.name}</Text>
         
        </View>
      ))}
    </View>
  );
}
