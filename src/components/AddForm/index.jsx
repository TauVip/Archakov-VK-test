import { useEffect, useRef, useState } from 'react'
import closeIcon from '../../assets/close.png'
import addIcon from '../../assets/add.png'
import { Card, Button } from '../'

import './AddForm.scss'

const AddForm = ({ columnIndex, onAddCard, onAddColumn, isEmptyColumn }) => {
  const [ showForm, setShowForm ] = useState(false)
  const [ value, setValue ] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [showForm])

  const onAdd = () => {
    if (isEmptyColumn) {
      onAddColumn()
    } else {
      onAddCard(columnIndex, value)
      setValue('')
      setShowForm(false)
    }
  }

  return <>
    {showForm ? <div className='add-form'>
      <div className='add-form__input'>
        <Card>
          <textarea 
            onChange={e => setValue(e.target.value)}
            value={value}
            placeholder={ isEmptyColumn ?
              'Введите название колонки' :
              'Введите название карточки'
            }
            ref={textareaRef} 
            rows='3' 
          />
        </Card>
        <div className='add-form__bottom'>
          <Button onClick={ onAdd }>
            {isEmptyColumn ? 'Добавить колонку' : 'Добавить карточку'}
          </Button>
          <img 
            className='add-form__bottom-clear' 
            src={closeIcon} 
            alt='Close icon'
            onClick={ () => setShowForm(false) }
          />
        </div>
      </div>
    </div> :
    <div className='add-form__bottom'>
      <div className='add-form__bottom-add-btn' onClick={ () => setShowForm(true) } >
        <img src={addIcon} alt='Add icon' className='add-icon' />
        <span>
          {isEmptyColumn ? 'Добавить еще одну колонку' : 'Добавить еще одну карточку'}
        </span>
      </div>
    </div>}
  </>
}

export default AddForm
