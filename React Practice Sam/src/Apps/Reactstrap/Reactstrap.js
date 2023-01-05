import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { Dropdown,DropdownItem,DropdownMenu,DropdownToggle } from "reactstrap"


function ReactStrap (direction, ...args){
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggle = ()=> setDropdownOpen((prevState)=>!prevState)
    return (
        <>
        <div className="main-div">
            <div className="child-div">
                <Form>
                    <FormGroup>
                        <Label for="first-name">First Name</Label>
                        <Input id="first-name"
                        name="first-name"
                        placeholder="Enter First Name"/>
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

                        {/* <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                            <DropdownToggle caret>Gender</DropdownToggle>
                            <DropdownMenu {...args}>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem>Some Action</DropdownItem>
                            <DropdownItem text>Dropdown Item Text</DropdownItem>
                            <DropdownItem disabled>Action (disabled)</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Foo Action</DropdownItem>
                            <DropdownItem>Bar Action</DropdownItem>
                            <DropdownItem>Quo Action</DropdownItem>
                            </DropdownMenu>
                        </Dropdown> */}


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

export default ReactStrap;