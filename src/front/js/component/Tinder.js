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
      <div className="notes">
        <textarea className="notepad" placeholder="How Was your Playdate" />
      </div>
      <Carousel variant="dark">
        <Carousel.Item>
          <TinderCard className="tinder">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.texastrustlaw.com/wp-content/uploads/Woman-and-Dog-683x1024.jpg"
              />
              <Card.Body>
                <Card.Title>Personal Info</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </TinderCard>
        </Carousel.Item>

        <Carousel.Item>
          <TinderCard className="tinder">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/2017/Dec+12/Man+Sitting+With+His+Dog-Carousel.jpg"
                height={400}
                width={1024}
              />
              <Card.Body>
                <Card.Title>Personal Info</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </TinderCard>
        </Carousel.Item>

        <Carousel.Item>
          <TinderCard className="tinder">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.ctfassets.net/sfnkq8lmu5d7/7IUUoho68Cz3kepd3sjZ2T/26f6e6b8fba271af0160c8b7fa115be3/The_Wildest_Editorial_Oxytocin-Chemistry_Between_People_and_Dogs_Is_Real_Hero.jpg"
                height={450}
              />
              <Card.Body>
                <Card.Title>Personal Info</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </TinderCard>
        </Carousel.Item>
      </Carousel>{" "}
      <div className="pics">
        <img
          src="https://images.template.net/112822/2023-photo-calendar-template-npd43.jpg"
          width={250}
          style={{ marginBottom: "4rem" }}
        />
        <img
          src="https://cdn2.cincinnatimagazine.com/wp-content/uploads/sites/5/2020/05/MAY20_Pets-Map_web.jpg"
          width={475}
        />
      </div>
    </div>
  );
}
