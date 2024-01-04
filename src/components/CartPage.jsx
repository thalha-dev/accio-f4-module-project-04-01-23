import { useDispatch, useSelector } from "react-redux";
import {
  cartCB,
  checkOut,
  removeFromCart,
} from "../state/slice/products/productSlice";

import ProductCards from "./shared/product/ProductCards";
import { numberToUsd } from "../utils/numberToUsd";
import { useEffect, useMemo, useState } from "react";

const CartPage = () => {
  const cartProducts = useSelector(cartCB);
  const dispatch = useDispatch();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  useEffect(() => {
    return () => {
      setCheckoutSuccess(false);
    };
  }, []);

  const buttonHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    dispatch(checkOut());
  };

  const totalValue = useMemo(() => {
    return cartProducts.reduce((sum, o) => {
      return sum + o.price;
    }, 0);
  }, [cartProducts.length]);

  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold">My Cart</h1>
      {cartProducts.length ? (
        <div className="lg:flex lg:justify-around">
          <ProductCards
            buttonHandler={buttonHandler}
            buttonName="Remove From Cart"
            products={cartProducts}
          />
          <div className="max-w-[20rem] min-w-[20rem] mx-auto">
            <div className="bg-black text-white p-[1em] m-[1.3em] mb-[0]">
              <h3 className="text-center py-[2em]">Checkout List</h3>
              {cartProducts.length
                ? cartProducts.map((product) => (
                    <div className="text-xs leading-5 flex gap-[1em] justify-between items-center">
                      <p className="truncate">1. {product.title}</p>
                      <p className="text-ellipse">
                        {numberToUsd(product.price)}
                      </p>
                    </div>
                  ))
                : ""}
            </div>
            <div className="bg-black text-white p-[1em] m-[1.3em] my-[1px]">
              <div className="text-sm leading-5 flex gap-[1em] justify-between items-center">
                <p className="truncate">Total</p>
                <p className="text-ellipse">{numberToUsd(totalValue)}</p>
              </div>
            </div>
            <div className="bg-black text-white p-[1em] m-[1.3em] mt-[0px]">
              <button
                onClick={handleCheckout}
                className="w-[96%] m-auto bg-white text-black py-[0.5em]"
              >
                Click to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : checkoutSuccess ? (
        <h1 className="border-2 border-black font-extrabold mt-[2em] w-[90%] max-w-[200px] mx-auto text-center text-black bg-[#f5f431] py-[.8em] px-[1em]">
          Purchase Success
        </h1>
      ) : (
        <h1 className="font-extrabold mt-[2em] w-[90%] max-w-[200px] mx-auto text-center text-white bg-black py-[.8em] px-[1em]">
          Cart is Empty
        </h1>
      )}
    </div>
  );
};

export default CartPage;
