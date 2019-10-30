import React from 'react'
import css from './ContentImagesInfoMobile.module.scss'
import Padding from '../Padding/Padding'
import im1 from 'static/IMG-ae1b9dfabea232b83bdcff1bfe8d5ec2-V.jpg'
import im2 from 'static/Evakuator-Dzerzhinsk-66-511-66.jpg'
import Button from '../Button/Button'
import { MOBILE_LONG_PHONE } from '../../constants/phones'
import LayoutMobile from '../Layout/LayoutMobile'
import { texts } from './data'

const ContentImagesInfoMobile = () => (
  <div className={css.container}>
    <div className={css.image} style={{ backgroundImage: `url(${im1})` }} />
    <Padding value={20} />
    <LayoutMobile className={css.content}>
      <h2>Гарания качества</h2>
      {texts[0]}
      <Padding value={20} />
      <Button mobile href={MOBILE_LONG_PHONE}>Заказать</Button>
      <Padding value={40} />
    </LayoutMobile>
    <div className={css.image} style={{ backgroundImage: `url(${im2})` }} />
    <LayoutMobile className={css.content}>
      <Padding value={20} />
      <h2>Всегда на связи!</h2>
      {
        texts[1]
      }
      <Padding value={40} />
      <Button mobile href={MOBILE_LONG_PHONE}>Позвонить</Button>
    </LayoutMobile>
  </div>
)

export default React.memo(ContentImagesInfoMobile)
