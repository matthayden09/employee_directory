import React from 'react'
import styled from 'styled-components'

const GridDiv = styled.div `
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 30px;
@media(max-width: 767px){
    display: block;
}
`


const Grid = ({ children }) => {
    return (
    <GridDiv>{children}</GridDiv>
    )
}

export default Grid