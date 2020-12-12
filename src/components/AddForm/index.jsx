import { useEffect, useRef, useState } from 'react'
import closeIcon from '../../assets/close.png'
import addIcon from '../../assets/add.png'
import { Card, Button } from '../'

import './AddForm.scss'

const AddForm = () => {
  const [ showForm, setShowForm ] = useState(false)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  })

  return <>
    {showForm ? <div className='add-form'>
      <div className='add-form__input'>
        <Card>
          <textarea 
            placeholder='Введите название карточки'
            ref={textareaRef} 
            rows='3' 
          />
        </Card>
        <div className='add-form__bottom'>
          <Button>Добавить карточку</Button>
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
        <span>Добавить еще одну карточку</span>
      </div>
    </div>}
  </>
}

export default AddForm
