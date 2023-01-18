import './App.css'
import RandomNumber from './components/RandomNumber'
function App() {
  return (
    <div className="App">
      <RandomNumber maxRandomNum={100} />
    </div>
  )
}

export default App
