import React from 'react'
import { FaMoneyBillAlt, FaRunning, FaCarSide } from 'react-icons/fa'
import { MdTimelapse, MdAttachMoney, MdTrain } from 'react-icons/md'

export const items = [
  {
    title: 'Большой автопарк',
    text: 'Всегда есть свободные машины',
    img: <FaCarSide />
  },
  {
    title: 'Фиксированная стоимость',
    text: 'Цена не измениться до конца поездки',
    img: <FaMoneyBillAlt />
  },
  {
    title: 'Работаем 24/7',
    text: 'Готовы всегда принять заказ',
    img: <MdTimelapse />
  },
  {
    title: 'Приедем быстро',
    text: 'Вам не придётся долго ждать',
    img: <FaRunning />
  },
  {
    title: 'Доступные цены',
    text: 'От 1000 рублей за подачу',
    img: <MdAttachMoney />
  },
  {
    title: 'Готовы взять дальний заказ',
    text: 'Перевозки по России',
    img: <MdTrain />
  }
]
