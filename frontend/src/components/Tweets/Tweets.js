import React from "react";
import { Card, Col, Container, Row, NavDropdown } from "react-bootstrap";
import { faUserCircle, faRetweet } from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tweetModel from "../../models/tweet";
import "./Tweets.css";

function Tweets(props) {
  function handleDelete(event) {
    event.preventDefault();
    tweetModel.delete(props.id).then((data) => {
      console.log(data, "Tweet Deleted ");
    });
  }

  function handleClick(event) {
    event.preventDefault();
    handleDelete();
  }

  return (
    <Card>
      <Container className="containerTweet">
        <Row>
          <Col md={3} className="miscCardImage">
            <FontAwesomeIcon
              className="image-icon"
              icon={faUserCircle}
              size="4x"
            />
          </Col>
          <Col md={9}>
            <Card.Body>
              <Row>
                <Col md={4} className="miscCard">
                  <Card.Title className="username">Elon Musk</Card.Title>
                </Col>
                <Col md={4} className="miscCard">
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    {props.author.username}
                  </Card.Subtitle>
                </Col>
                <Col md={2} className="miscCard">
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    7m
                  </Card.Subtitle>
                </Col>
                <Col md={2} className="miscCard">
                  {/* took out classname tweet-title  */}
                  <Card.Subtitle className="mb-2 text-muted elips">
                    <NavDropdown title="..." id="nav-dropdown">
                      <NavDropdown.Item eventKey="4.1" onClick={handleClick}>
                        Delete
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="4.3">
                        Something else here
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="4.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Card.Subtitle>
                </Col>
                <Col md={12}>
                  <Card.Text className="text-left">
                    {props.description}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>

            <Row>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faComment}
                    size="1x"
                  />
                  {/* TODO Comment counter */}
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    {/* {props.comments.length} */}
                  </Card.Subtitle>
                </Card.Link>
              </Col>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faRetweet}
                    size="1x"
                  />
                  {/* TODO Retweet Counter */}
                  <Card.Subtitle className="tweet-title mb-2 text-muted">
                    3
                  </Card.Subtitle>
                </Card.Link>
              </Col>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faHeart}
                    size="1x"
                  />
                </Card.Link>
              </Col>
              <Col>
                <Card.Link className="text-muted" href="#">
                  <FontAwesomeIcon
                    className="image-icon"
                    icon={faShareSquare}
                    size="1x"
                  />
                </Card.Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default Tweets;
