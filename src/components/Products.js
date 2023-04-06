import styled from "styled-components";
import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  /*Fetch product data from API */
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          category
            ? `http://localhost:8000/api/v1/products?category=${category}`
            : `http://localhost:8000/api/v1/products`,
          {
            method: "GET",
            headers: {
              mode: "no-cors",
              Accept: "application/json",
              "Content-Type": "application/json",
            },

            // body: JSON.stringify(),
          }
        );

        const { data } = await res.json();
        setProducts(data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  /* Filter products */
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  /* Sort products */
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
