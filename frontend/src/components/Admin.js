import { Component } from "react";
import { Table, Spinner, Container, Alert } from "react-bootstrap";
import { getAllData } from "../services/inquiry";
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      pk: undefined,
    };
  }
  async componentDidMount() {
    try {
      let response = await getAllData();
      console.log(response);
      this.setState({ data: response.data });
      this.setState({ pk: true });
      console.log(this.state.data);
    } catch (error) {
      console.error(error);
      this.setState({ pk: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.pk ? (
          <div>
            {/* <table>
                                <thead>
                                    <tr>
                                        <td>NO.</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Contact Number </td>
                                        <td>batch</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.batch}</td>

                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table> */}
            <Container className="mt-5">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th>Batch</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.batch}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Container>
          </div>
        ) : (
            <Container>
          <div id="load">
            <br />
            <br />
            <br />
            <Alert className="text-center">
                <br></br>
                <h3>Loading.....</h3>
            <Spinner animation="border" role="status" className="text-danger cente mx-5r">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <br></br>

            </Alert>
            <div id="spin">
            
            </div>
          </div>
          </Container>
        )}
      </div>
    );
  }
}
