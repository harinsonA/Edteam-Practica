import React from 'react'
import CourseCard from '../Molecules/CourseCard'

// Data
import { courses } from '../../Data'

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {
            courses.map( ({ id, title, image, price, professor }) => (
                <CourseCard id={id} key={id} title={title} image={image} price={price} professor={professor} />)
            )
        }
    </div>
)

export default CourseGrid;