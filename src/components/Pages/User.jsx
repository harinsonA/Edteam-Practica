import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: "",
            username: "",
            email: "",
            address: "",
            phone: "",
            website: "",
            paramsID: props.match.params.id

        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.paramsID}`)
        .then( response => {
            const { name, username, address, email, phone, website } = response.data
            this.setState({
                name: name,
                username: username,
                address: `${address.street} ${address.suite}, ${address.city}`,
                phone: phone,
                website: website,
                email: email
            })
        } )
    }

    render() {

        return (
            <div className="ed-grid m-grid-3">
                {
                    this.state.name ?
                        (<>
                            <h1 className="m-cols-3">{ this.state.name }</h1>
                            <p className="m-cols-2">Username: {this.state.username}</p>
                            <p className="m-cols-2">Email: {this.state.email}</p>
                            <p className="m-cols-2">Telefono: {this.state.phone}</p>
                            <p className="m-cols-2">Dirección: {this.state.address}</p>
                            <p className="m-cols-2">Website: {this.state.website}</p>
                        </>)
                        : (<>
                            <h1 className="m-cols-3">Cargando...</h1>
                        </>)
                }

            </div>
        )
    }
}

export default User;