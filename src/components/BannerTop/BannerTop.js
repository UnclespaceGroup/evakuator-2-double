import React from 'react'
import css from './BannerTop.module.scss'
import Button from '../Button/Button'
import { MOBILE_LONG_PHONE, MOBILE_PHONE_LINK } from '../../constants/phones'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'

const BannerTop = () => (
  <div className={css.container}>
    <div className={css.image__city} />
    <div className={css.image__car} />
    <Layout>
      <div className={css.wrapper}>
        <h1>Услуги эвакуатора</h1>
        <Padding value={20} />
        <h2>Быстрый и надежный эвакуатор в Сыктывкаре и Респулике Коми</h2>
        <Padding value={20} />
        <div className={css.row}>
          <div>от 1000 ₽</div>
          <Button href={MOBILE_LONG_PHONE}>Заказать</Button>
        </div>
      </div>
      <div className={css.phone}>{MOBILE_PHONE_LINK}<span>Короткий номер по Сыктывкару и РК</span></div>
    </Layout>
  </div>
)

export default React.memo(BannerTop)
