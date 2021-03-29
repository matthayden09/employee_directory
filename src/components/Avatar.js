import React from 'react'

const Avatar = ({ avatar_url, login }) => {
    return <img src={avatar_url} alt={login} />
}

export default Avatar