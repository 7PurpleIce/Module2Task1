import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Декларативный стиль: определяем состояние и используем хук useState
  const [count, setCount] = useState(0)
  // Декларативный стиль: определяем состояние и используем хук useState
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div>
        {/* Декларативный стиль: структура разметки задаётся декларативно */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Декларативный стиль: указываем событие onClick и обновляем состояние */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Декларативный стиль: вставляем значение текущего года */}
      <footer>
	      <p> {currentYear} </p>
      </footer>
    </>
  )
}

export default App
