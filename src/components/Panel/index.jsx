import PropTypes from 'prop-types'
import { Card, AddForm } from '../'
import classNames from 'classnames'

import './Panel.scss'

const Panel = ({ cards }) => (
  <div className={classNames('panel', {'panel--empty': !cards})}>
    {cards && <div className='panel__items'>
      {cards.map((card, index) => (
        <Card key={index}>{ card.text }</Card>
      ))}
    </div>}
    <AddForm />
  </div>
)

Panel.propTypes = {
  cards: PropTypes.string.isRequired
}

export default Panel
