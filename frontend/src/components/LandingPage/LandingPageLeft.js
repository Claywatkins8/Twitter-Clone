import React from "react";
import { Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserFriends,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const LandingPageLeft = () => {
  return (
    <Col className="LandingPageLeft" xs={12} md={6}>
      <Container className="LandingLeftContainer">
        <h4>
          <FontAwesomeIcon icon={faSearch} />
          Follow your interests
        </h4>
        <h4>
          <FontAwesomeIcon icon={faUserFriends} />
          Hear what people are talking about.
        </h4>
        <h4>
          <FontAwesomeIcon icon={faComment} />
          Join the conversation.
        </h4>
      </Container>
    </Col>
  );
};

export default LandingPageLeft;
