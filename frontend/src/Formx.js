import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Alert, Container } from "react-bootstrap";
import { savedata } from "./services/inquiry";
import Success from "./components/Success";

function Formx() {
  const [user, setuser] = useState("");
  const [issave, setIssave] = useState(false)
  const [isFalse, setisFalse] = useState(false)


  function handleChange(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }



  async function handleSubmit(e) {
    e.preventDefault();


    try {

      let response = await savedata(user)
      console.log(response);
      if (response.status === 200) {
        setIssave(true);
        setTimeout(() => {
          setIssave(false)
        }, 5000)
      }

    } catch (error) {


      setisFalse(true)

      setTimeout(() => {

        setisFalse(false)

      }, 3000)


    }


  }

  return (
    <div>
      <div className="form">



        {!issave ?

          <div className="box">
            <Container>
              <marquee direction="right" className="bg-light text-danger">
                <b> NEW BATCH OF JAVA GOING TO START FROM 01-01-2023 </b>
              </marquee>
              <Form className="mh-100" onSubmit={handleSubmit}>

                <Row>
                  <Col lg="6">
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
                  </Col>

                  <Col lg="6">
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

                  </Col>
                </Row>

                <Row>
                  <Col lg="6" className="">
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
                  </Col>

                  <Col lg="6">
                  <Form.Group className="mb-3 mt-4  " controlId="formBasicPassword">
                  <Form.Label> Sellect Domain</Form.Label>
                  <select
                    name="batch"
                    id="domain"
                    className="text-center bg-light text-primary center mx-4"
                    onChange={handleChange}
                  >
                    <option className="option b">java</option>
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

                  </Col>
                </Row>




              


                <div className="text-center">

                  <Button
                    variant="primary"
                    type="submit"
                    align="center"
                    className="center mx-5"
                  >
                    Submit
                  </Button>
                </div>

              </Form>


              {isFalse ?
                <Alert className="mt-3 text-center" variant="danger ">
                  <b> Something Went Wrong </b> </Alert> : null}


            </Container>
          </div>
          :
          <>

            <Success></Success>
            <Container>

              <Alert variant="warning" className="text-center mt-3">
                <b>      Your Inquiry sent  SuccessFully </b>
                <p> withing 24 hours our counsler will respond regarding your inquiry</p>            </Alert>
            </Container>

          </>


        }


      </div>
    </div>
  );
}

export default Formx;
