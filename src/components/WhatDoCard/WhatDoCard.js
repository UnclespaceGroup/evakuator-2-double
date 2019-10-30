import React from 'react'
import css from './WhatDoCard.module.scss'
import Padding from '../Padding/Padding'

const WhatDoCard = ({ title, text, number }) => (
  <div className={css.container}>
    <div className={css.number}>{number}</div>
    <Padding value={20} />
    <h3>{title}</h3>
    <div className={css.text}>{text}</div>
  </div>
)

export default React.memo(WhatDoCard)
