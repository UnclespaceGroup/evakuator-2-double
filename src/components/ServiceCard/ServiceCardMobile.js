import React from 'react'
import css from './ServiceCardMobile.module.scss'
import Padding from '../Padding/Padding'

const ServiceCard = ({ title, text, img }) => (
  <div className={css.container}>
    <div className={css.img} style={{ backgroundImage: `url(${img})` }} />
    <Padding value={20} />
    <h3>{title}</h3>
    <div className={css.text}>{text}</div>
  </div>
)

export default React.memo(ServiceCard)
