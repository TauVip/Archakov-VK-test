import { Panel } from './components'

function App() {
  return (
    <div className='app'>
      <Panel cards={[
        { text: 'Пройти курс по React' },
        { text: 'Отметить день рождения' },
        { text: 'Записаться на курсы английского языка, чтобы уехать жить в Лондон' }
      ]} />
      <Panel cards={null} />
    </div>
  )
}

export default App;

// Разработка тестового задания на стажировку в VK | 1:53:47
