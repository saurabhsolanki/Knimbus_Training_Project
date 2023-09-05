import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ProductCard = ({ id, name, title, brand, price , handleDelete}) => {

  return (
    <div>
      <Card key={id}>
        <Card.Img
          variant="top"
          src="https://media.easemytrip.com/media/Blog/India/Goa/Goa7cvngW.jpg"
        />
        <Card.Body>
          <Card.Title> <strong>Name :-</strong> {name}</Card.Title>
          <Card.Text> <strong>Title :-</strong> {title}</Card.Text>
          <Card.Text> <strong>Brand :-</strong> {brand}</Card.Text>
          <Card.Text> <strong>Price :-</strong> {price}</Card.Text>
          <div className="d-flex justify-content-end gap-1">
            <Link  className="btn btn-primary" to={`/products/${id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
            {/* <UpdateProduct id={id}/> */}
            <button className="btn btn-danger" onClick={()=>handleDelete(id)}><i class="fa-sharp fa-solid fa-trash-can"></i></button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
