import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function RestaurantCard({ item }) {
  return (
    <Link to={`/details/${item.id}`}>
     
        <div className="container">
          
            <Card className="my-3 rounded cards" />
            <Card.Img variant="top" className="p-4" src={item.photograph} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.neighborhood}</Card.Text>
              <Card.Text>
                <p>cuisine type:{item.cuisine_type}</p>
              </Card.Text>
            </Card.Body>
        </div>
       
     
    </Link>
  );
}

export default RestaurantCard;
