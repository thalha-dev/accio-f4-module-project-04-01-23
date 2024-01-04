import { useDispatch, useSelector } from "react-redux";
import {
  productsCB,
  productsStatusCB,
} from "../state/slice/products/productSlice";
import ProductCards from "./shared/product/ProductCards";
import { useEffect } from "react";
import { getAllProducts } from "../state/slice/products/asyncThunks/getAllProducts";

const HomePage = () => {
  const products = useSelector(productsCB);
  const productsStatus = useSelector(productsStatusCB);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsStatus !== "success") {
      dispatch(getAllProducts());
    }
  }, [productsStatus]);

  const buttonHandler = () => {
    console.log("button click");
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold">Home</h1>
      <ProductCards
        buttonHandler={buttonHandler}
        buttonName="Add to Cart"
        products={products}
      />
    </div>
  );
};

export default HomePage;
