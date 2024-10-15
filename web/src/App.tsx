import { Habit } from './components/habit'
import './styles/global.css'

function App() {

  return (
    <div>
      <Habit completed={0} />
      <Habit completed={3} />
      <Habit completed={2} />
    </div>
  )
}

export default App
