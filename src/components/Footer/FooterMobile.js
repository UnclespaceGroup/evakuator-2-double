import React from 'react'
import css from './FooterMobile.module.scss'
import img from '../../static/footer.jpg'
import Layout from '../Layout/LayoutMobile'
import { MOBILE_LONG_PHONE, MOBILE_PHONE_LINK } from '../../constants/phones'
import { FaVk, FaViber, FaWhatsapp } from 'react-icons/fa'

const FooterMobile = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.info}>
          <div className={css.number}>{MOBILE_PHONE_LINK}</div>
          <p>Эвакуатор Сыктывкар</p>
          <p style={{ marginTop: '2rem', marginBottom: '6rem' }}>Круглосуточно, без выходных</p>
          <div className={css.socials}>
            <a href={MOBILE_LONG_PHONE} className={css.icon} ><FaViber /></a>
            <a href={MOBILE_LONG_PHONE} className={css.icon} ><FaVk /></a>
            <a href={MOBILE_LONG_PHONE} className={css.icon} ><FaWhatsapp /></a>
          </div>
        </div>
        <div className={css.hr} />
        <div className={css.brand}>
          <span>Made by UncleSpace group</span>
          <div className={css.logo} />
        </div>
      </div>
    </Layout>
  </div>
)

export default React.memo(FooterMobile)
