import './App.css'
import Course from './components/Course'
import Form from './components/Form'
import Header from './components/Header'
function App() {
  return (
    <div
      className="App"
      style={{
        background: 'white',
      }}
    >
      <Header />
      <Form />
      <Course />
    </div>
  )
}

export default App
