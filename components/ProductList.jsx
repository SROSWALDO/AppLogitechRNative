import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import CartAdd from "../assets/CartAdd";

export const colors = {
  blanco: "#ffffff",
  negro: "#000000",
  rosa: "#FFC0CB",
  fuchsia: "#FF00FF",
  plateado: "#C0C0C0",
};

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


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
          <Image className="bg-slate-100" source={{ uri: product.image }} style={{ width: 290, height: 250 }} />
          <Text className="text-xl font-bold r mt-2  " >{product.name}</Text>
          <Text className="w-[250px] text-sm  mt-3 " >{product.description}</Text>
          <View className="flex-row  mt-3">
            {product.variants.map((variant,index) => (
              <View key={index} style={{ backgroundColor:colors[variant.color] }} className="w-6 h-6 rounded-full mx-1 border-black border " ></View>
            ))}
          </View>
          <Text className="font-semibold text-lg mt-3">${product.price}.00</Text>
          <TouchableOpacity className="bg-[#00B8FC] w-[175px] rounded py-3 flex-row justify-center mt-3 items-center " >
          <CartAdd/>
            <Text className="uppercase text-[11px] font-semibold ml-2 " >Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
