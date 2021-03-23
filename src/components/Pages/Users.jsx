import React, { Component } from 'react';
import UserCard from '../Molecules/UserCard';
import axios from 'axios'

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users', { method: 'get' })
    //         .then( response => response.json() )
    //         .then( data => {
    //             this.setState({
    //                 users: data
    //             })
    //         } )
    // }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            this.setState({
                users: response.data
            })
        } )
    }

    render() {

        const { users } = this.state

        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-4">
                    {
                        users.map(({ id, name, username, email }) => (
                            <UserCard
                                id={id}
                                key={id}
                                name={name}
                                username={username}
                                email={email}
                            />)
                        )
                    }
                </div>
            </div>
        )
    }

}

export default Users;