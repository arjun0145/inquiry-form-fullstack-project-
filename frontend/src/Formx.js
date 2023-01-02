import React from "react";
import { useState } from "react";
import axios from "axios";
// import './Form.css'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";

function Formx() {
  const [user, setuser] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState();
  const [email, setemail] = useState("");
  const [domain, setdomain] = useState("");

  function setoption() {
    console.log("alok is don ");
    let x = document.getElementById("domain").value;
    if (x !== undefined) {
      setdomain(x);
    }
  }

  function addName(e) {
    const name = e.target.value;
    setname(name);
  }

  function addPhone(e) {
    const phone = e.target.value;
    setphone(phone);
  }

  function addEmail(e) {
    const email = e.target.value;
    setemail(email);
  }

  function handleChange(e) {
    setuser({ ...user, [e.target.name]: e.target.value });

    console.log(user);
  }
  // {
  //   name: name,
  //   email: email,
  //   phone: phone,
  //   batch: domain,
  // }
  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:9600/save", user).then(
      (response) => {
        console.log(response);
        let res = response.status;
        if (res !== 200) {
          alert("data not saved");
        } else {
          alert("data saved");
        }
      },
      (error) => {
        console.log(error);
        alert("data not saved");
      }
    );
  }

  return (
    <div>
      <div className="form">
        <div className="img"></div>

        <div className="box">
          <Container>
            <marquee direction="right" className="bg-light text-danger">
              <b> NEW BATCH OF JAVA GOING TO START FROM 01-01-2023 </b>
            </marquee>
            <Form className="mh-100" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  {" "}
                  <b>Name </b>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Your Name  "
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <b>Email address</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <b>Phone</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Domain</Form.Label>
                <select
                  name="batch"
                  id="domain"
                  className="text-center bg-info text-light center"
                  onChange={handleChange}
                >
                  <option className="option">java</option>
                  <option selected className="option">
                    mern
                  </option>
                  <option className="option">python</option>
                  <option className="option">php</option>
                  <option className="option">dotnet c#</option>
                  <option className="option">c and c++</option>
                  <option className="option">web designing</option>
                </select>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                align="center"
                className="center mx-5"
              >
                Submit
              </Button>
            </Form>
          </Container>
          {/* <h3 id="heading">Inquiry Form </h3>
          <br />

          <h3 className="text">Enter your full name </h3>

          <input
            className="inp"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={addName}
          />

          <h3 className="text">Enter Phone number </h3>

          <input
            className="inp"
            id="phone"
            type="text"
            name="phone"
            value={phone}
            onChange={addPhone}
          />

          <h3 className="text">Enter Email </h3>

          <input
            className="inp"
            id="mail"
            type="text"
            name="email"
            value={email}
            onChange={addEmail}
          />
          <br />
          <br />
          <label for="domain" className="text">
            Choose domain :
          </label>

          <select name="domain" id="domain" onClick={setoption}>
            <option className="option" value="java">
              java
            </option>
            <option className="option" value="mern">
              mern
            </option>
            <option className="option" value="python">
              python
            </option>
            <option className="option" value="php">
              php
            </option>
            <option className="option" value="dotnet">
              dotnet c#
            </option>
            <option className="option" value="c++">
              c and c++
            </option>
            <option className="option" value="web-designing">
              web designing
            </option>
          </select>
          <br />
          <br />
          <button className="btnx" id="mainismain" onClick={Saveuser}>
            Submit
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Formx;
