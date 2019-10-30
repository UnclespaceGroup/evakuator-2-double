import React from 'react'
import css from './AdvantageCardMobile.module.scss'
import Padding from '../Padding/Padding'

const AdvantageCardMobile = ({ title, text, img, number }) => (
  <div className={css.container}>
    <div className={css.number} >{number}</div>
    <div className={css.img} style={{ backgroundImage: `url(${img})` }} />
    <Padding value={20} />
    <h3>{title}</h3>
    <div className={css.text}>{text}</div>
  </div>
)

export default React.memo(AdvantageCardMobile)
