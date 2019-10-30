import React from 'react'
import css from './SectionAdvantages.module.scss'
import { items } from './data'
import CardsGridList from '../CardsGridList/CardsGridList'
import AdvantageCard from '../AdvantageCard/AdvantageCard'
import Padding from '../Padding/Padding'

const SectionAdvantages = () => (
  <div className={css.container}>
    <h2>6 причин заказать эвакуатор у нас</h2>
    <Padding value={80} />
    <CardsGridList items={items} >
      <AdvantageCard />
    </CardsGridList>
  </div>
)

export default React.memo(SectionAdvantages)
