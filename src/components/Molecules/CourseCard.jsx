import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CourseCard = ({ title, image, price, professor, key, id }) => (
  <article className="card" >
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/Cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {title}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <span className="small"> {`Prof.: ${professor}`} </span>
        </div>
      </div>
      <div className="s-main-center">
        <Link className="button--ghost-alert button--tiny" to={`/Cursos/${id}`}>{`$ ${price}`}</Link>
      </div>
    </div>
  </article>
)

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  professor: PropTypes.string
}

CourseCard.defaultProps = {
  title: "No se encontro algun titulo",
  image: "https://i.pinimg.com/originals/6b/25/f1/6b25f14dbe2b5d6470236db671894c67.jpg",
  price: "--",
  professor: "Sin profesor asignado"
}

export default CourseCard;