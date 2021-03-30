import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
    border-radius: 50%;
    width: 100%;
`

const Avatar = ({ avatar_url, login }) => {
    return <Img src={avatar_url} alt={login} />
}

export default Avatar