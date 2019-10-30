import React from 'react'
import css from './BannerTopMobile.module.scss'
import Button from '../Button/Button'
import { MOBILE_LONG_PHONE, MOBILE_PHONE_LINK } from '../../constants/phones'
import Layout from '../Layout/LayoutMobile'
import Padding from '../Padding/Padding'

const BannerTopMobile = () => (
  <div className={css.container}>
    <div className={css.image__city} />
    <div className={css.image__car} />
    <Layout>
      <div className={css.wrapper}>
        <h1>Услуги эвакуатора</h1>
        <Padding value={20} />
        <h2>Быстрый и надежный эвакуатор в Сыктывкаре и Респулике Коми</h2>
        <Padding value={20} />
        <Button href={MOBILE_LONG_PHONE} mobile>Заказать</Button>
        <Padding value={20} />
        <div className={css.phone}>{MOBILE_PHONE_LINK}<span>Короткий номер по Сыктывкару и РК</span></div>
      </div>
    </Layout>
  </div>
)

export default React.memo(BannerTopMobile)
