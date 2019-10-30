import React from 'react'
import css from './SectionAdvantagesMobile.module.scss'
import { items } from './data'
import AdvantageCard from '../AdvantageCard/AdvantageCardMobile'
import Padding from '../Padding/Padding'
import CardsSwiperList from '../CardsSwiperList/CardsSwiperList'
import LayoutMobile from '../Layout/LayoutMobile'

const SectionAdvantagesMobile = () => (
  <div className={css.container}>
    <LayoutMobile>
      <h2>6 причин заказать эвакуатор у нас</h2>
    </LayoutMobile>
    <Padding value={40} />
    <CardsSwiperList items={items} >
      <AdvantageCard />
    </CardsSwiperList>
  </div>
)

export default React.memo(SectionAdvantagesMobile)
