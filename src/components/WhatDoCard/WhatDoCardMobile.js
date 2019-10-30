import React from 'react'
import css from './WhatDoCardMobile.module.scss'
import Padding from '../Padding/Padding'

const WhatDoCardMobile = ({ title, text, number }) => (
  <div className={css.container}>
    <div className={css.number}>{number}</div>
    <div>
      <h3>{title}</h3>
      <Padding value={20} />
      <div className={css.text}>{text}</div>
    </div>
  </div>
)

export default React.memo(WhatDoCardMobile)
