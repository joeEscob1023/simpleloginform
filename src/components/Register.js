import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {Link} from 'react-router-dom';

//onClick wont change loggedIn to true (look in app.js to see the state and methods)
//onSubmit on the button wont load the profile page when clicked, but will change loggedIn to to true
//idk wtf to do :(

 class Register extends Component {


  render() {
    return (
      <div>
        <h1 className="mb-5">Please Sign Up or Login</h1>
        
        <Form className="w-50 mx-auto" onSubmit={(e) => this.props.onSubmit(e)}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" required placeholder="Enter Your name" onChange={this.props.onChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" required placeholder="please enter email" onChange={this.props.onChange} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="password" required placeholder="password " onChange={this.props.onChange}/>
          </FormGroup>
          <Link to="/Profile">
            <Button  className="btn" color="dark" dark="true" block>Submit</Button>
          </Link>
        </Form>
      </div>
    )
  }
}

export default Register;
