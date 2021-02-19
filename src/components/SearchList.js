import React from 'react'
import PropTypes from 'prop-types'

export const SearchList = ({ list }) => (
  <ul>
    {list}
  </ul>
)

SearchList.propTypes = {
  repo: PropTypes.array
}