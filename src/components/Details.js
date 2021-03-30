import React from 'react'

const Details = ({
    login,
    public_repos,
    public_gists,
    location
}) => {
    return (
        <div>
            <h2>{login}</h2>
            <ul>
                <li>Repos: {public_repos}</li>
                <li>Gists: {public_gists}</li>
                <li>Location: {location}</li>
            </ul>
        </div>
        )
}

export default Details