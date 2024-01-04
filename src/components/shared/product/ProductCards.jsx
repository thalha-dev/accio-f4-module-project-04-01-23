import ProductCard from "./ProductCard";

const ProductCards = ({ buttonHandler, buttonName, products }) => {
  return (
    <div className="p-[1.3em] sm:grid sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.length
        ? products.map((product) => (
            <ProductCard
              product={product}
              buttonHandler={buttonHandler}
              buttonName={buttonName}
              key={product.id}
            />
          ))
        : ""}
    </div>
  );
};

export default ProductCards;
