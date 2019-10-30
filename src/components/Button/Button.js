import React from 'react'
import css from './Button.module.scss'

const Button = ({ children, href, bgColor }) => (
  <a className={css.container} href={href} style={{ backgroundColor: bgColor }}>
    {children}
  </a>
)

export default React.memo(Button)
