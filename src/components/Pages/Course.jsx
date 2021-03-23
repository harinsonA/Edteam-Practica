import { courses } from '../../Data'

const Course = ({ match }) => {

    const cursoActual = courses.filter(curso => curso.id === parseInt(match.params.id))[0]
    return (

        <div className="ed-grid m-grid-3">
            {
                cursoActual ?
                    (<>
                        <h1 className="m-cols-3">Curso: {cursoActual.title}</h1>
                        <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.title} />
                        <p className="m-cols-2">Profesor: {cursoActual.professor}</p>
                    </>)
                    : (<>
                        <h1 className="m-cols-3">Curso: no encontrado</h1>
                        <img className="m-cols-1" src="https://i.pinimg.com/originals/6b/25/f1/6b25f14dbe2b5d6470236db671894c67.jpg" alt="Sin foto" />
                        <p className="m-cols-2">Profesor: Sin Profesor</p>
                    </>)
            }

        </div>
    )
}

export default Course;