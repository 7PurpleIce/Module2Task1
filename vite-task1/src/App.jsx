import { useState } from 'react'
import { createElement } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Декларативный стиль: определяем состояние и используем хук useState
  const [count, setCount] = useState(0)
  // Декларативный стиль: определяем состояние и используем хук useState
  const currentYear = new Date().getFullYear();

  return createElement(
    'div',  // Корневой элемент
    null,
    createElement(
      'div',
      null,
      createElement(
        'a',
        { href: 'https://vite.dev', target: '_blank' },
        createElement('img', { src: viteLogo, className: 'logo', alt: 'Vite logo' })
      ),
      createElement(
        'a',
        { href: 'https://react.dev', target: '_blank' },
        createElement('img', { src: reactLogo, className: 'logo react', alt: 'React logo' })
      )
    ),
    createElement('h1', null, 'Vite + React'),
    createElement(
      'div',
      { className: 'card' },
      createElement(
        'button',
        { onClick: () => setCount(count => count + 1) },
        `count is ${count}`
      ),
      createElement(
        'p',
        null,
        'Edit ',
        createElement('code', null, 'src/App.jsx'),
        ' and save to test HMR'
      )
    ),
    createElement(
      'p',
      { className: 'read-the-docs' },
      'Click on the Vite and React logos to learn more'
    ),
    createElement(
      'footer',
      null,
      createElement('p', null, currentYear)
    )
  )
}

export default App;
