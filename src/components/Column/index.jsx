import PropTypes from 'prop-types'
import { Card, AddForm } from '..'
import classNames from 'classnames'
import closeIcon from '../../assets/close.png'

import './Column.scss'

const Column = ({ columnIndex, title, cards, onAddColumn, onAddCard }) => (
  <div className={classNames('column', {'column--empty': !cards})}>
    {title &&
      <div className='column__title'>
        <b>{ title }</b>
        <div className='column__remove'>
          <img src={closeIcon} alt='Close icon' className='add-form__bottom-clear' />
        </div>
      </div>
    }
    {cards && <div className='column__items'>
      {cards.map((card, index) => (
        <Card key={index}>{ card }</Card>
      ))}
    </div>}
    <AddForm 
      columnIndex={columnIndex}
      isEmptyColumn={!cards} 
      onAddColumn={onAddColumn} 
      onAddCard={onAddCard} 
    />
  </div>
)

Column.propTypes = {
  cards: PropTypes.node,
  title: PropTypes.string
}

export default Column
