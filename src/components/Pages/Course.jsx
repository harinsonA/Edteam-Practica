import React, { useState, useEffect } from 'react'
import useCourse from '../CustomHooks/useCourse'

const Course = ({ match }) => {

    
    const [comment, setComment] = useState("Sin comentarios")
    const course = useCourse(match.params.id)

    const myComment = event =>{
        setComment(event.target.value)
    }

    return (
        <div className="ed-grid m-grid-3">
            {
                course ?
                    (<div className="ed-grid">
                        <div className="l-block">
                            <h1 className="m-cols-3">Curso: {course.title}</h1>
                            <img className="m-cols-1" src={course.image} alt={course.title} />
                            <p className="m-cols-2">Profesor: {course.professor}</p>
                            <p className="m-cols-2">${course.price}</p>
                        </div>
                        <div>
                            <h2>Escribe tu comentario</h2>
                            <input type="text" placeholder="Escribe..." onChange={ myComment.bind(this) } />
                            <p>{comment}</p>
                        </div>
                    </div>)
                    : (<>
                        <h1 className="m-cols-3">Cargando...</h1>
                        {/* <img className="m-cols-1" src="https://i.pinimg.com/originals/6b/25/f1/6b25f14dbe2b5d6470236db671894c67.jpg" alt="Sin foto" />
                            <p className="m-cols-2">Profesor: Sin Profesor</p> */}
                    </>)
            }

        </div>
    )
}

export default Course;