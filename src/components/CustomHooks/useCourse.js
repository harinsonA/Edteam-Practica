import axios from 'axios'
import { useState, useEffect } from 'react'

const useCourse = (id) => {

    const [course, setCourse] = useState({})

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/harinsonA/json_db/cursos/${id}`)
            .then(response => setCourse(response.data))
    }, [])

    return course
}

export default useCourse;