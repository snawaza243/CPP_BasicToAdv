import React from 'react'
import './RegForm.css'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
function RegForm() {
    return (
        <>
            <div id='container'>
                <div id='container-box'>
                    <h1 className='register'>Registration Form</h1>
                    <Form classNameName='form'>

                        {/* name */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <FormGroup>
                                    <Input type="text" name='name' id='FirstName' placeholder='First Name'></Input>
                                </FormGroup>
                            </div>
                            <div className="col-md-6 mb-4">
                                <FormGroup>
                                    <Input type="text" name='name' id='LastName' placeholder='Last Name'></Input>
                                </FormGroup>
                            </div>
                        </div>

                        {/* email and phone */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <FormGroup>
                                    <Input type="email" name='email' id='email' placeholder='Email'></Input>
                                </FormGroup>
                            </div>
                            <div className="col-md-6 mb-4">
                                <FormGroup>
                                    <Input type="phone" name='phone' id='phone' placeholder='Phone Number'></Input>
                                </FormGroup>
                            </div>
                        </div>

                        {/* username and password */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <FormGroup>
                                    <Input type="username" name='username' id='username' placeholder='User Name'></Input>
                                </FormGroup>
                            </div>
                            <div className="col-md-6 mb-4">
                                <FormGroup>
                                    <Input type="password" name='password' id='password' placeholder='Password'></Input>
                                </FormGroup>
                            </div>
                        </div>

                        {/* gender checkbox */}
                        <div className="row">
                            <div className="col-md-6 mb-6 genderBox">
                                <FormGroup>
                                    <h6 className="mb-2 pb-1">Gender: </h6>
                                    <div className="form-check form-check-inline">
                                        <Input className="form-check-input" type="radio" name="genderRadio"
                                            id="femaleGender"
                                            value="option1" checked />
                                        <Label className="form-check-label" for="femaleGender">
                                            <i class="fa fa-female" aria-hidden="true"></i>
                                        </Label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Input className="form-check-input" type="radio" name="genderRadio"
                                            id="maleGender"
                                            value="option2" />
                                        <Label className="form-check-label" for="maleGender">
                                            <i class="fa fa-male" aria-hidden="true"></i>
                                        </Label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Input className="form-check-input" type="radio" name="genderRadio"
                                            id="otherGender"
                                            value="option3" />
                                        <Label className="form-check-label" for="otherGender">
                                            <i class="fa fa-transgender" aria-hidden="true"></i>
                                        </Label>
                                    </div>
                                </FormGroup>
                            </div>
                        </div>

                        {/* role dropdown */}
                        <div className="row">
                            <Label className="form-label select-label">Register as</Label>
                            <select className="select form-control-lg">
                                <option value="1" disabled>Choose Role</option>
                                <option value="2">Admin</option>
                                <option value="3">Student</option>
                                <option value="4">Teacher</option>
                            </select>
                        </div>
                        <Button className="button ">Register</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default RegForm;