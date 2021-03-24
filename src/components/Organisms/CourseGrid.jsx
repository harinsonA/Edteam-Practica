import React from 'react'
import withLoader from '../HOC/withLoader';
import CourseCard from '../Molecules/CourseCard'


const CourseGrid = ({ courses }) => (
    <div className="ed-grid m-grid-4">
        {
            courses.map(({ id, title, image, price, professor }) => (
                <CourseCard key={id} id={id} title={title} image={image} price={price} professor={professor} />)
            )
        }
    </div>
)



export default withLoader("courses")(CourseGrid);