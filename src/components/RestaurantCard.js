import React from 'react'
import { Card } from "react-bootstrap";
function RestaurantCard({item}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.photograph} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
       {item.neighborhood}
      </Card.Text>
      <Card.Text>
       <p>cuisine type:{item.cuisine_type}</p>
      </Card.Text>
  
    </Card.Body>
  </Card>
  )
}

export default RestaurantCard