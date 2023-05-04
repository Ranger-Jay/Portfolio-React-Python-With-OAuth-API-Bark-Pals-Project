import React from "react";
import { Navbar, Nav, Dropdown, Modal } from "react-bootstrap";

function NavbarPage() {
  const [showCommentModal, setShowCommentModal] = React.useState(false);
  const handleCommentModalClose = () => setShowCommentModal(false);
  const handleCommentModalShow = () => setShowCommentModal(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My Bark Pals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/Signup">Join the Community</Dropdown.Item>
                <Dropdown.Item href="/Login">Log in</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Actions
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleCommentModalShow}>
                  Leave a comment
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">View messages</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Send message</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={showCommentModal} onHide={handleCommentModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea className="form-control" id="comment" rows="3" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleCommentModalClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarPage;
