import React from 'react'
import css from './SectionServicesMobile.module.scss'
import { items } from './data'
import CardsSwiperList from '../CardsSwiperList/CardsSwiperList'
import ServiceCard from '../ServiceCard/ServiceCardMobile'
import Padding from '../Padding/Padding'
import LayoutMobile from '../Layout/LayoutMobile'

const SectionServicesMobile = () => (
  <div className={css.container}>
    <LayoutMobile>
      <h2>Мы предоставляем услуги</h2>
    </LayoutMobile>
    <Padding value={40} />
    <CardsSwiperList items={items} >
      <ServiceCard />
    </CardsSwiperList>
  </div>
)

export default React.memo(SectionServicesMobile)
