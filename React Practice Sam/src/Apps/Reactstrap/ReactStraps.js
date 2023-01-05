import React from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default class ReactStraps extends React.Component {
    render() {
        return (
            <>
                <div className="main-div">
                    <div className="child-div">
                        <Form>
                            <FormGroup>
                                <Label for="first-name">First Name</Label>
                                <Input id="first-name"
                                    name="first-name"
                                    placeholder="Enter First Name" />
                                <Label for="last-name">Last Name</Label>
                                <Input
                                    id="last-name"
                                    name="last-name"
                                    placeholder="Enter Last Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="dob">
                                    Date of Birth
                                </Label>
                                <Input
                                    id="dob"
                                    name="dob"
                                    placeholder="Date of Birth"
                                    type="date"
                                />
                                <Label>
                                    Gender
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Mail"
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="username">
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    name="username"
                                    placeholder="Chooser Username"
                                    type="character"
                                />
                                <Label for="password">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    type="password"
                                />
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}


// return (
//     <>
//     <div className="form-h">
//         <Modal >
//             <ModalHeader>
//                 Modal title
//             </ModalHeader>
//             <ModalBody>
//                 Modal body
//             </ModalBody>
//         </Modal>

//     </div>
//     <div>
//         <h2>Login page</h2>
//         <Button color="danger" >Click</Button>
//     </div>
//     </>