import React from 'react'
import UserCard from '../Molecules/UserCard';
import withLoader from '../HOC/withLoader'


const UsersGrid = ({ users }) => (
    <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-4">
            {
                users.map(({ id, name, username, email }) => (
                    <UserCard id={id} key={id} name={name} username={username} email={email} />)
                )
            }
        </div>
    </div>
)
export default withLoader("users")(UsersGrid);