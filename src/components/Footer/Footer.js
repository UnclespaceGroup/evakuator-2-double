import React from 'react'
import css from './Footer.module.scss'
import img from '../../static/footer.jpg'
import Layout from '../Layout/Layout'
import { MOBILE_LONG_PHONE, MOBILE_PHONE_LINK } from '../../constants/phones'
import Padding from '../Padding/Padding'
import { FaVk, FaViber, FaWhatsapp } from 'react-icons/fa'

const Footer = () => (
  <div className={css.container} style={{ backgroundImage: `url(${img})` }}>
    <Layout>
      <div className={css.wrapper}>
        <div className={css.info}>
          <div className={css.number}>{MOBILE_PHONE_LINK}</div>
          <p>Эвакуатор Сыктывкар</p>
          <Padding value={40} />
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

export default React.memo(Footer)
