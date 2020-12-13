import { connect } from 'react-redux'
import { Column } from '../components'
import columnsActions from '../actions/columns'
import cardsActions from '../actions/cards'

const Columns = ({ items, addColumn, addCard }) => (
  <>
    {items.map((item, index) => (
      <Column 
        {...item} 
        key={index} 
        columnIndex={index}
        onAddColumn={addColumn} 
        onAddCard={addCard} 
      />
    ))}
    <Column onAddColumn={addColumn} onAddCard={addCard} />
  </>
)

export default connect(
  ({ columns }) => ({ items: columns }),
  {...columnsActions, ...cardsActions}
)(Columns)
