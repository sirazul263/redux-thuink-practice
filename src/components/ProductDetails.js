import axios from "axios";
import React, { useEffect } from "react";
import { ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  selectedProducts,
  removeSelectedProducts,
  fetchSingleProduct,
} from "../redux/actions/flightActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  // const singleProduct = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${productId}`)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log(response);
  //   dispatch(selectedProducts(response.data));
  // };
  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchSingleProduct(productId));
    }
    return dispatch(removeSelectedProducts());
  }, [productId]);
  return (
    <Container>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Row>
          <Col md={6}>
            <img src={image} alt="" style={{ height: 500, width: 500 }} />
          </Col>
          <Col md={6}>
            <h1>{title}</h1>
            <h2>$ {price}</h2>
            <h3>{category}</h3>
            <ButtonGroup className="btn btn-success">Add to cart</ButtonGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetails;
