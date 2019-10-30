import React from 'react'
import css from './BannerTop.module.scss'
import Button from '../Button/Button'
import { MOBILE_LONG_PHONE } from '../../constants/phones'

const BannerTop = () => (
  <div className={css.container}>
    <div className={css.image__city} />
    <div className={css.image__car} />
    <div className={css.wrapper}>
      <h1>Услуги эвакуатора</h1>
      <h2>Бысрый и надежный эвакуатор в Сыктывкаре и Респулике Коми</h2>
      <div className={css.row}>
        <div>от 1000 ₽</div>
        <Button href={MOBILE_LONG_PHONE} >Заказать</Button>
      </div>
    </div>
  </div>
)

export default React.memo(BannerTop)
