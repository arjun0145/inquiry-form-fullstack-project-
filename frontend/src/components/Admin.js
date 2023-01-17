
import { Component, useEffect, useState } from "react";
import { Table, Spinner, Container, Alert, Button, Col, Form, Row } from "react-bootstrap";
import { deleteData, getAllData, savedata, updatedata } from "../services/inquiry";

function Admin() {

  const [pk, setPk] = useState(true)
  const [data, setData] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  const [currentdata, setcurrentdata] = useState(false)
  const [user, setuser] = useState("");



  async function getData() {
    let x = await getAllData()
    setData(x.data)
  }

  async function deletedata(id) {
    await deleteData(id)
    getData()


  }




  useEffect(() => {

    try {
      getData()
    } catch (error) {
      console.error(error);
      setPk(false)
    }

  }, [])


  function updateData(data) {
    setIsEdit(true)
    setcurrentdata(data)

  }


  function handleChange(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }



  async function handleSubmit(e) {
    e.preventDefault();


    try {

      await updatedata(currentdata._id, user)
      getData()


    } catch (error) {




    }


  }

  function Viewusers() {
    setIsEdit(false)
  }
  return (
    <>
      {pk ?


        (
          <Container className="mt-5">

            {isEdit ?
              <Container>
                <Alert>Edit here </Alert>
                <Container>

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
                            placeholder={currentdata.name}

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
                            placeholder={currentdata.email}

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
                            placeholder={currentdata.phone}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>

                      <Col lg="6">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>
                            <b>batch</b>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="batch"
                            placeholder={currentdata.batch}
                            onChange={handleChange}
                          />
                        </Form.Group>
                        {/* <Form.Group className="mb-3 mt-4  " controlId="formBasicPassword">
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
                </Form.Group> */}

                      </Col>
                    </Row>







                    <div className="text-center my-4">

                      <Button

                        variant="primary"
                        type="submit"
                        align="center"
                        className="center mx-5"
                      >
                        update details
                      </Button>
                      <Button
                        onClick={Viewusers}
                        variant="primary"
                        type="submit"
                        align="center"
                        className="center mx-5 "
                      >
                        View Users
                      </Button>
                    </div>

                  </Form>





                </Container>

              </Container>
              :
              <Table striped bordered hover >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Batch</th>
                    <th>manupulate</th>

                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td >{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.batch}</td>
                        <td> <Button
                          variant="primary"
                          onClick={() => { updateData(item) }}
                          className=" btn-sm mx-4"
                        >Edit details </Button>
                          <Button
                            variant="danger"
                            onClick={() => { deletedata(item._id) }}
                            className=" btn-sm mx-2"
                          >delete</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            }
          </Container>


        ) :
        (
          <Container>
            <div id="load">
              <br />
              <br />
              <br />
              <Alert className="text-center">
                <br></br>
                <h3>Loading.....</h3>
                <Spinner
                  animation="border"
                  role="status"
                  className="text-danger cente mx-5r"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                <br></br>
              </Alert>
              <div id="spin"></div>
            </div>
          </Container>
        )
      }






    </>
  )
}


export default Admin;



