import axios from "axios";

const URL = "http://10.0.2.2:5000";

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/products`);
    dispatch({ type: "GET_PRODUCTS", payload: response.data });
  } catch (error) {
    console.error(error.message || "Error al obtener los productos");
  }
};
