import React, { Component } from 'react'
import API from './API'
import Employee from './Employee'
import styled from 'styled-components'


const TableDiv = styled.div`
background-color: white;
text-align: left;
`


class Table extends Component {
    state = {
        employees: [],
        shownEmployees: []
    }

    componentDidMount() {
        API.getRandomPerson()
            .then(response => {
                this.setState({ "employees": response.data.results, "shownEmployees": response.data.results })
                console.log(this.state.employees)
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <TableDiv>
                <table className="table">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Picture</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Country</th>
                    </tr>
                    <tbody>
                        {this.state.employees.map((employee, index) => {
                            return (
                                <Employee
                                    key={index}
                                    employeeKey={index + 1}
                                    image={employee.picture.thumbnail}
                                    firstName={employee.name.first}
                                    lastName={employee.name.last}
                                    email={employee.email}
                                    phone={employee.phone}
                                    location={employee.location.country}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </TableDiv>
        );
    }
}

export default Table