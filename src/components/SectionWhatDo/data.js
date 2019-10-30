import im1 from 'static/evak2.png'
import React from 'react'
import { MOBILE_PHONE_STANDART_LINK_ZIPPED } from '../../constants/phones'

export const items = [
  {
    title: 'Выставьте аварийный знак',
    text: 'Не менее чем 15 метров до авто, согласно ПДД',
    img: im1
  },
  {
    title: 'Наберите наш номер',
    text: <span>{MOBILE_PHONE_STANDART_LINK_ZIPPED}, и ожидайте приезда эвакуатора</span>,
    img: im1
  },
  {
    title: 'Оплатите заказ',
    text: 'После доставки автомобиля, наличными или переводом',
    img: im1
  }
]
