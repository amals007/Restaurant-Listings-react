import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { Row, Col, ListGroup, Image} from 'react-bootstrap'
function RestaurantData() {
  const [data, setData] = useState([]);
  const params = useParams()
  async function fetchData() {
    await fetch("/restaurants.json")
      .then((data) => data.json())
      .then((res) => setData(res.restaurants));
  }
  useEffect(() => {
    fetchData();
  }, []);

const restaurantData = data.find(item=> item.id == params.id)
 
  return(

    <>{ restaurantData ? (
      <Row className="my-3">
        <Col md={3}>
          <Image className="img" src={restaurantData.photograph} alt={restaurantData.name} fluid/>
        </Col>
      <Col md={4}>
        <ListGroup.Item>

        <h2>{restaurantData.name}</h2>
        <p>{restaurantData.neighborhood}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Cuisine Type : {restaurantData.cuisine_type}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p> Addess : {restaurantData.address}</p>
        </ListGroup.Item>

      </Col>
      <Col md={4}>
        <ListGroup.Item>
          <h4>Operating hours :</h4>
          <p>Monday : {restaurantData.operating_hours.Monday}</p>
          <p>Tuesday : {restaurantData.operating_hours.Tuesday}</p>
          <p>Wednesday : {restaurantData.operating_hours.Wednesday}</p>
          <p>Thursday : {restaurantData.operating_hours.Thursday}</p>
          <p>Friday : {restaurantData.operating_hours.Friday}</p>
          <p>Saturday : {restaurantData.operating_hours.Saturday}</p>
          <p>Sunday : {restaurantData.operating_hours.Sunday}</p>
        </ListGroup.Item>

      
      
      </Col>


      </Row>
    ):('null')}
    
    </>


  )
  
  
}

export default RestaurantData;
