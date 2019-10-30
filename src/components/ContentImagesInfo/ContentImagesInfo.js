import React from 'react'
import css from './ContentImagesInfo.module.scss'
import Padding from '../Padding/Padding'
import im1 from 'static/IMG-ae1b9dfabea232b83bdcff1bfe8d5ec2-V.jpg'
import im2 from 'static/Evakuator-Dzerzhinsk-66-511-66.jpg'
import Button from '../Button/Button'
import { MOBILE_LONG_PHONE } from '../../constants/phones'
import { texts } from './data'

const ContentImagesInfo = () => (
  <div className={css.container}>
    <div className={css.row}>
      <div className={css.image} style={{ backgroundImage: `url(${im1})` }} />
      <div className={css.col}>
        <div className={css.content}>
          <h2>Гарания качества</h2>
          <Padding value={40} />
          {texts[0]}
          <Padding value={40} />
          <Button href={MOBILE_LONG_PHONE}>Заказать</Button>
        </div>
      </div>
    </div>
    <Padding value={160} />
    <div className={css.row}>
      <div className={css.col}>
        <div className={css.content__right}>
          <h2>Всегда на связи!</h2>
          <Padding value={40} />
          {texts[1]}
          <Padding value={40} />
          <Button href={MOBILE_LONG_PHONE}>Позвонить</Button>
        </div>
      </div>
      <div className={css.image} style={{ backgroundImage: `url(${im2})` }} />
    </div>
  </div>
)

export default React.memo(ContentImagesInfo)
