import React, { useState } from "react";
import { Link } from "react-router-dom";
import TinderCard from "react-tinder-card";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Carousel } from "react-bootstrap";
// ...
export function Tinder() {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <div className="carouselwrapper">
      <Carousel variant="dark">
        <Carousel.Item>
          <TinderCard className="tinder">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.texastrustlaw.com/wp-content/uploads/Woman-and-Dog-683x1024.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </TinderCard>
        </Carousel.Item>

        <Carousel.Item>
          <TinderCard className="tinder">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.texastrustlaw.com/wp-content/uploads/Woman-and-Dog-683x1024.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </TinderCard>
        </Carousel.Item>

        <Carousel.Item>
          <TinderCard className="tinder">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.texastrustlaw.com/wp-content/uploads/Woman-and-Dog-683x1024.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </TinderCard>
        </Carousel.Item>
      </Carousel>{" "}
    </div>
  );
}
