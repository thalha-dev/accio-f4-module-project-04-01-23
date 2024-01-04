import { numberToUsd } from "../../../utils/numberToUsd";

const ProductCard = ({ product, buttonHandler, buttonName }) => {
  return (
    <div className="border-2 mb-[1em]">
      <div className="">
        <img
          src={product.images[0]}
          className="object-contain w-[100%] h-[200px]"
          alt={product.title}
        />
      </div>
      <div className="p-[0.5em]">
        <p className="text-sm min-h-[2.5rem]">Title: {product.title}</p>
        <p className="text-sm pb-[.5em]">Price: {numberToUsd(product.price)}</p>
        <button
          className="bg-black py-[0.7em] px-[1em] text-center text-white w-[100%]"
          onClick={buttonHandler}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
