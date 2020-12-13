const initialState = [
  {
    title: 'План на месяц',
    cards: [
      'Пройти курс по React',
      'Отметить день рождения',
      'Записаться на курсы английского языка, чтобы уехать жить в Лондон',
      'Пройти курс по React',
      'Отметить день рождения',
      'Записаться на курсы английского языка, чтобы уехать жить в Лондон',
      'Пройти курс по React',
      'Отметить день рождения'
    ]
  },
  {
    title: 'План на день',
    cards: [
      'Записаться на курс по React',
      'Забронировать тир на субботу',
      'Накидать тем для статей в блог',
      'Сделать колонку итоги'
    ]
  }
]

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CARDS:ADD':
      return state.map((item, index) => {
        if (action.payload.columnIndex === index) {
          return {
            ...item,
            cards: [
              ...item.cards,
              action.payload.text
            ]
          }
        }
        return item
      })
    case 'COLUMNS:ADD':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}
