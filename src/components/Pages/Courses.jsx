import React, { Component } from 'react'
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'

class Courses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/harinsonA/json_db/cursos`)
            .then(response => {
                this.setState({
                    courses: response.data
                })
            })
    }

    render() {

        const { courses } = this.state

        return  <CourseGrid courses={courses} />
    }
}

export default Courses;