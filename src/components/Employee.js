import React from 'react'
import styled from 'styled-components'

const TableDiv = styled.div`
background-color: white;
`

const Employee = ({
    id,
    picture,
    firstName,
    lastName,
    location,
    email,
    phone
}) => {
    return (
        <TableDiv>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Picture</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{id}</td>
                    <td>{picture}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{location}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Picture</td>
                    <td>Matt</td>
                    <td>Hayden</td>
                    <td>Arlington Heights</td>
                    <td>matthayden09@gmail.com</td>
                    <td>847-254-2985</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Picture</td>
                    <td>Matt</td>
                    <td>Hayden</td>
                    <td>Arlington Heights</td>
                    <td>matthayden09@gmail.com</td>
                    <td>847-254-2985</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Picture</td>
                    <td>Matt</td>
                    <td>Hayden</td>
                    <td>Arlington Heights</td>
                    <td>matthayden09@gmail.com</td>
                    <td>847-254-2985</td>
                </tr>
            </tbody>
        </table>
        </TableDiv>
        )
}

export default Employee