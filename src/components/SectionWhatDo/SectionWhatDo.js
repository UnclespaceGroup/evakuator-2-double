import React from 'react'
import css from './SectionWhatDo.module.scss'
import { items } from './data'
import CardsGridList from '../CardsGridList/CardsGridList'
import Padding from '../Padding/Padding'
import WhatDoCard from '../WhatDoCard/WhatDoCard'
import { MdInfo } from 'react-icons/md'

const SectionWhatDo = () => (
  <div className={css.container}>
    <h2><MdInfo />Если Вы попали в ДТП <span>или ваш автомобиль сломался на дороге</span></h2>
    <Padding value={80} />
    <CardsGridList items={items} >
      <WhatDoCard />
    </CardsGridList>
  </div>
)

export default React.memo(SectionWhatDo)
