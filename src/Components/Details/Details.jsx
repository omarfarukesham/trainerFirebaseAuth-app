import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import "./Detials.css";

const Details = ({details}) => {
  const { training_name, image, Duration, price, Description,author } = details;



  //Modal code handler here
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-md-6 col-lg-4 my-2 prod--design shadow">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{training_name}</Card.Title>
          <Card.Title>Trainer: {author}</Card.Title>

          <Card.Text>Payment: ${price}</Card.Text>
          <Card.Text> Time: {Duration}</Card.Text>
          <Card.Text>{Description.slice(0, 100) + "..."}</Card.Text>
          <div className=" ">
            <Button  className="btn btn-outline-warning w-100 m-1" variant=" ">
              Book Now
            </Button>
            <Button  onClick={handleShow} className="btn btn-outline-primary w-100 m-1" variant=" ">
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>


      {/* Modal code here  */}
      <div className="modal--design">
        <Modal
          className="mx-auto text-center"
          show={show}
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Service Name: {training_name}</Modal.Title>
          </Modal.Header>
          <img className="w-100" src={image} alt=" product images" />
          <h2>Trainer:{author}</h2>
          <p>Price: ${price}</p>
          <p>Duration: {Duration}</p>
          <p>Details: {Description}</p>

          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>


    </div>
  );
};

export default Details;
