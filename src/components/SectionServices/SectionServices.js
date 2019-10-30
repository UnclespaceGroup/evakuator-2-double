import React from 'react'
import css from './SectionServices.module.scss'
import { items } from './data'
import CardsGridList from '../CardsGridList/CardsGridList'
import ServiceCard from '../ServiceCard/ServiceCard'
import Padding from '../Padding/Padding'

const SectionServices = () => (
  <div className={css.container}>
    <h2>Мы предоставляем услуги</h2>
    <Padding value={80} />
    <CardsGridList items={items} >
      <ServiceCard />
    </CardsGridList>
  </div>
)

export default React.memo(SectionServices)
