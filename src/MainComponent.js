import React, { Component } from 'react';
import {
  Jumbotron,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
  Col
} from 'reactstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsActive: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalIsActive: !this.state.modalIsActive
    });
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-4">Welcome to my App!</h1>
            <p className="lead">Click the blue Log In button to log in.</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col className="text-center">
              <Button color="primary" onClick={this.toggleModal}>
                Log In
              </Button>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.modalIsActive} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal} />
          <ModalBody>
            <Container>
              <Form onSubmit={this.toggleModal}>
                <FormGroup row>
                  <Label for="emailLogIn">Email</Label>
                  <Input
                    type="text"
                    placeholder="Enter your account's email."
                    id="emailLogIn"
                  />
                </FormGroup>
                <FormGroup row>
                  <Label for="password">Account Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter your account's password."
                    id="password"
                  />
                </FormGroup>
                <Button block color="primary" onClick={this.toggleModal}>
                  Log In
                </Button>
              </Form>
            </Container>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Main;
