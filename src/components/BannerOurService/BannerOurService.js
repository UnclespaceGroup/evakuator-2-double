import React from 'react'
import css from './BannerOurService.module.scss'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'
import { MOBILE_PHONE_STANDART_LINK } from '../../constants/phones'

const BannerOurService = () => (
  <div className={css.container}>
    <div className={css.wrapper}>
      <Layout>
        <h2>Готовы перевести ваше авто по России!</h2>
        <Padding value={40} />
        <div>
          <p>
            Работаем в Сыктывкаре и Республике Коми
          </p>
          <p>
            Для уточнения цены и условий звоните нам
          </p>
          <Padding value={80} />
          <div className={css.phone}> {MOBILE_PHONE_STANDART_LINK}</div>
        </div>
      </Layout>
    </div>
  </div>
)

export default React.memo(BannerOurService)
