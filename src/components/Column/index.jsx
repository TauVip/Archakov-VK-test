import PropTypes from 'prop-types'
import { Card, AddForm } from '../'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import classNames from 'classnames'
import closeIcon from '../../assets/close.png'

import './Column.scss'

const Column = ({ columnIndex, title, cards, onAddColumn, onAddCard, onRemove }) => {
  const removeColumn = () => {
    if (global.confirm('Вы действительно хотите удалить колонку?')) {
      onRemove(columnIndex)
    }
  }

  return (
    <div className={classNames('column', {'column--empty': !cards})}>
      <div className='column__inner'>
        {title &&
          <div className='column__title'>
            <b>{ title }</b>
            <div onClick={removeColumn} className='column__remove'>
              <img src={closeIcon} alt='Close icon' className='add-form__bottom-clear' />
            </div>
          </div>
        }
        {cards && <DragDropContext>
          <Droppable droppableId='droppable'>
            {(provided) => (
              <div 
                {...provided.droppableProps}
                ref={provided.innerRef} 
              >
                {cards.map((card, index) => (
                  <Draggable 
                    key={index} 
                    draggableId={`card-${index}`} 
                    index={index}
                  >
                    {(provided) => (
                      <Card>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {card}
                        </div>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext> }
        <AddForm 
          columnIndex={columnIndex}
          isEmptyColumn={!cards} 
          onAddColumn={onAddColumn} 
          onAddCard={onAddCard} 
        />
      </div>
    </div>
  )
}

Column.propTypes = {
  cards: PropTypes.node,
  title: PropTypes.string
}

export default Column
