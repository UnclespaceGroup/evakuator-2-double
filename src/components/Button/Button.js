import React from 'react'
import css from './Button.module.scss'
import cn from 'classnames'

const Button = ({ children, href, bgColor, mobile }) => (
  <a className={cn(css.container, { [css.mobile]: mobile })} href={href} style={{ backgroundColor: bgColor }}>
    {children}
  </a>
)

export default React.memo(Button)
