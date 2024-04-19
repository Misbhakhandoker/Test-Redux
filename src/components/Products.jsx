import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../actions/ProductAction";
import Nav from "./Nav";

const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetproducts());
    console.log("hello");
  }, []);
  return (
    <div className="w-full text-white bg-zinc-900">
      <Nav />
      {products.map((product,index)=>(
        <div className="p-5" key={index}> {product.title}</div>
      ))}
    </div>
  );
};

export default Products;
