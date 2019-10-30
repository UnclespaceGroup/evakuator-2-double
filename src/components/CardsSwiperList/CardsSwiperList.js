import React from 'react'
import _ from 'lodash'
import css from './CardsSwiperList.module.scss'
import Swiper from 'react-id-swiper'

const params = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  effect: 'coverflow',
  centeredSlides: true,
  slideClass: css.slide,
  loop: true,
  containerClass: css.containerSwiper,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

const CardsSwiperList = ({ children, items }) => {
  return (
    <Swiper {...params}>
      {
        _.map(items, (item, key) => (
          <div key={key} >
            {React.cloneElement(children, { ...item, number: key + 1 })}
          </div>
        ))
      }
    </Swiper>
  )
}

export default React.memo(CardsSwiperList)
