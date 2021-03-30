import React, { Component } from 'react'
import API from './API'
import Employee from './Employee'

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
            <table className="table">

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
        );
    }
}

export default Table