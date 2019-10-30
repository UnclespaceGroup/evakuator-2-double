import React from 'react'
import PropTypes from 'prop-types'

const Padding = ({ value }) => (
  <div style={{ paddingTop: value }} />
)
Padding.propTypes = {
  value: PropTypes.node
}

export default React.memo(Padding)
