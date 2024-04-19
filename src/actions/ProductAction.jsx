import axios from "axios"
import { getproduct } from "../reducer/ProductReducer";

export const asyncgetproducts = () => async (dispatch,) => {
  try{
    const response = await axios.get("https://fakestoreapi.com/products")
    dispatch(getproduct(response.data))
  }catch(error){
    console.log(error);
  }
}