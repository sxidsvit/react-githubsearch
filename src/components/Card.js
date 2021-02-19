import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ repo }) => (
  <div className="card">
    <div className="card-body">
      <p className="card-title"> <b>{repo.name}</b></p>
      <p className="card-title">Language: <b>{repo.language}</b></p>
      <p className="card-title">Description: {repo.description}</p>
    </div>
  </div>
)

Card.propTypes = {
  repo: PropTypes.object
}