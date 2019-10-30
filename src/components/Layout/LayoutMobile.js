import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './LayoutMobile.module.scss'

const LayoutMobile = ({ children, className }) => (
  <div className={cn(css.layout, className)}>{children}</div>
)
LayoutMobile.propTypes = {
  children: PropTypes.node
}
export default React.memo(LayoutMobile)
