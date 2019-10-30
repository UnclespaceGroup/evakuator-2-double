import React from 'react'
import css from './BannerYellowMobile.module.scss'
import { MOBILE_LONG_PHONE, MOBILE_PHONE_STANDART_LINK } from '../../constants/phones'
import Padding from '../Padding/Padding'
import Button from '../Button/Button'
import LayoutMobile from '../Layout/LayoutMobile'

const BannerYellowMobile = () => (
  <div className={css.container}>
    <LayoutMobile>
      <h2>Для заказа эвакуатора достаточно позвонить</h2>
      <Padding value={20} />
      <div className={css.phone}>{MOBILE_PHONE_STANDART_LINK}</div>
      <Padding value={20} />
      <Button mobile href={MOBILE_LONG_PHONE}>Позвонить</Button>
    </LayoutMobile>
  </div>
)

export default React.memo(BannerYellowMobile)
