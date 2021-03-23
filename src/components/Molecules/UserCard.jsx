import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserCard = ({ username, name, email, id }) => (
    <article className="card">
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{username}</h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <span className="small"> {`Nombre: ${name}`} </span>
                </div>
            </div>
            <div className="s-main-center">
                <Link className="button--ghost-alert button--tiny" to={`/Usuarios/${id}`}>{`${email}`}</Link>
            </div>
        </div>
    </article>
)

UserCard.propTypes = {
    username: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string
  }
  
UserCard.defaultProps = {
    username: "Sin Username",
    name: "Sin nombre",
    email: "Sin email"
  }
export default UserCard;