import React from 'react'
import _ from 'lodash'
import css from './CardsGridList.module.scss'

const CardsGridList = ({ children, items, column }) => {
  return (
    <div className={column ? css.column : css.row}>
      {
        _.map(items, (item, key) => (
          <div className={css.col} key={key} >
            {React.cloneElement(children, { ...item, number: key + 1 })}
          </div>
        ))
      }
    </div>
  )
}

export default React.memo(CardsGridList)
