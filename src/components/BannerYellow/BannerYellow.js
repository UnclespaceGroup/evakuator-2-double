import React from 'react'
import css from './BannerYellow.module.scss'
import { MOBILE_LONG_PHONE, MOBILE_PHONE_STANDART_LINK } from '../../constants/phones'
import Padding from '../Padding/Padding'
import Button from '../Button/Button'

const BannerYellow = () => (
  <div className={css.container}>
    <h2>Для заказа эвакуатора достаточно позвонить</h2>
    <Padding value={40} />
    <div className={css.phone}>{MOBILE_PHONE_STANDART_LINK}</div>
    <Padding value={80} />
    <Button href={MOBILE_LONG_PHONE}>Позвонить</Button>
  </div>
)

export default React.memo(BannerYellow)
