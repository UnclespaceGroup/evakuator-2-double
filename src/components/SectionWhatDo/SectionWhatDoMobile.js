import React from 'react'
import css from './SectionWhatDoMobile.module.scss'
import { items } from './data'
import CardsGridList from '../CardsGridList/CardsGridList'
import WhatDoCard from '../WhatDoCard/WhatDoCardMobile'
import { MdInfo } from 'react-icons/md'
import LayoutMobile from '../Layout/LayoutMobile'

const SectionWhatDoMobile = () => (
  <div className={css.container}>
    <LayoutMobile>
      <h2><MdInfo /><br />Если Вы попали в ДТП <span>или ваш автомобиль сломался на дороге</span></h2>
      <CardsGridList column items={items} >
        <WhatDoCard />
      </CardsGridList>
    </LayoutMobile>
  </div>
)

export default React.memo(SectionWhatDoMobile)
