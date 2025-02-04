import { Provider } from "react-redux";
import { Stack } from "expo-router";
import "../global.css";
import { store } from "../store/store";
import { Text } from "react-native";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <Provider store={store}>
    <Navbar/>
      <Stack  screenOptions={{ headerShown: false }} />
      
    </Provider>
  );
}