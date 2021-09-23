import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductComponent = ({ products }) => {
  const { id, title, image, price, category } = products;
  return (
    <Col md={4} className="mb-5">
      <Card style={{ width: "18rem" }}>
        <Link to={`/product/${id}`}>
          {" "}
          <Card.Img variant="top" src={image} style={{ height: 400 }} />{" "}
        </Link>
        <Card.Body>
          <Card.Title style={{ height: 140 }}>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{price}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default ProductComponent;
