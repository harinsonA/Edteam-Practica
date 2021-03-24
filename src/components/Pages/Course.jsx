
import axios from 'axios'
import React, { Component } from 'react'

class Course extends Component {
    constructor(props){
        super(props)

        this.state = {
            title:"",
            image:"",
            professor:"",
            paramsID: props.match.params.id
        }
    }

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/harinsonA/json_db/cursos/${this.state.paramsID}`)
        .then( response => {
            this.setState({
                title: response.data.title,
                image: response.data.image,
                professor: response.data.professor,
            })
        })
    }


    render() {
        return (
            <div className="ed-grid m-grid-3">
                {
                    this.state.title ?
                        (<>
                            <h1 className="m-cols-3">Curso: {this.state.title}</h1>
                            <img className="m-cols-1" src={this.state.image} alt={this.state.title} />
                            <p className="m-cols-2">Profesor: {this.state.professor}</p>
                        </>)
                        : (<>
                            <h1 className="m-cols-3">Cargando...</h1>
                            {/* <img className="m-cols-1" src="https://i.pinimg.com/originals/6b/25/f1/6b25f14dbe2b5d6470236db671894c67.jpg" alt="Sin foto" />
                            <p className="m-cols-2">Profesor: Sin Profesor</p> */}
                        </>)
                }

            </div>
        )
    }
}

export default Course;