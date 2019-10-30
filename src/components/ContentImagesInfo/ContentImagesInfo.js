import React from 'react'
import css from './ContentImagesInfo.module.scss'
import Padding from '../Padding/Padding'
import im1 from 'static/IMG-ae1b9dfabea232b83bdcff1bfe8d5ec2-V.jpg'
import im2 from 'static/Evakuator-Dzerzhinsk-66-511-66.jpg'
import Button from '../Button/Button'
import { MOBILE_LONG_PHONE } from '../../constants/phones'

const ContentImagesInfo = () => (
  <div className={css.container}>
    <div className={css.row}>
      <div className={css.image} style={{ backgroundImage: `url(${im1})` }} />
      <div className={css.col}>
        <div className={css.content}>
          <h2>Гарания качества</h2>
          <Padding value={40} />
          <p>
            Наш сервис по подбору дешевых эвакуаторов в Москве и Московской области - гарантия быстрой эвакуации автомобиля вне зависимости от времени суток.
          </p>
          <p>
            Более 7 лет нашими усилиями водители, столкнувшиеся с неприятностью в пути, получают качественные услуги эвакуатора круглосуточно, в любой день недели.
          </p>
          <Padding value={40} />
          <Button href={MOBILE_LONG_PHONE}>Заказать</Button>
        </div>
      </div>
    </div>
    <Padding value={160} />
    <div className={css.row}>
      <div className={css.col}>
        <div className={css.content__right}>
          <h2>Гарания качества</h2>
          <Padding value={40} />
          <p>
            В нашей базе собраны предложения от десятков проверенных компаний и частных лиц, что позволяет быстро заказать недорогой эвакуатор с минимальным временем ожидания.
          </p>
          <Padding value={40} />
          <Button href={MOBILE_LONG_PHONE}>Заказать</Button>
        </div>
      </div>
      <div className={css.image} style={{ backgroundImage: `url(${im2})` }} />
    </div>
  </div>
)

export default React.memo(ContentImagesInfo)
