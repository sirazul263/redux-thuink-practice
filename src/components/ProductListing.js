import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/flightActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  //   const fetchProducts = async () => {
  //     const response = await axios
  //       .get("https://fakestoreapi.com/products")
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //     dispatch(setProducts(response.data));
  //   };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  return (
    <Container>
      <Row>
        {products.map((prod) => (
          <ProductComponent products={prod} key={prod.id}></ProductComponent>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListing;
