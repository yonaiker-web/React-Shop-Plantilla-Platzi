import React from "react";
import ProductItem from "../components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/ProductList.scss";

const api = "https://fakestoreapi.com/products?limit=200";

const ProductList = () => {
  const products = useGetProducts(api);
  console.log(products);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={products.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
