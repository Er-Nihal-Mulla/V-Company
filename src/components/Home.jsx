import React from "react";
import Common from "./Common";
import web from "../images/w10.png";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
  
        backdrop="static"
     
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{"background-color": "#526770", "color" : "#fff"}}>
        <Modal.Title id="contained-modal-title-vcenter" >
          Subscribe for upcoming tutorial's
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Read & then check agree</h4>
        <p>
         We will provide you only material courses like code files, projects for understanding purpose only.
        </p>
        <input type="text" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="success" onClick={props.handleClose}>
            Save Changes
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Common
        name="Explore your potential with TechProps"
        imgsrc={web}
        visit="/courses"
        btname="Get Started"
      ></Common>


      <Button type="button" style={{"background-color": "yellow", "color":"#526770", "margin-left":"62%", "margin-right":"auto", "display":"block", "margin-top":"1%"}} variant="default" onClick={() => setModalShow(true)}>
        Subscribe for more tutorial's
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Home;
