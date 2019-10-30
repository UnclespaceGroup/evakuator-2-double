import React from 'react'
import css from './AdvantageCard.module.scss'
import Padding from '../Padding/Padding'

const AdvantageCard = ({ title, text, img, number }) => console.log(typeof img) || (
  <div className={css.container}>
    <div className={css.number} >{number}</div>
    {
      typeof img === 'string'
        ? <div className={css.img} style={{ backgroundImage: `url(${img})` }} />
        : <div className={css.img}>  {img}</div>
    }
    <Padding value={20} />
    <h3>{title}</h3>
    <Padding value={10} />
    <div className={css.text}>{text}</div>
  </div>
)

export default React.memo(AdvantageCard)
