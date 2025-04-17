import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div id = "header">
                <div>
                    <p className="title">UFAB3</p>
                </div>
            </div>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                E sorte é coisa além de cavalos e de sombras, coisas.
                Além de ficar ou de ir embora, a pele.
                Também vai embora quando morre o corpo.
                Morre a pele.
                Sobra vida.
                Somente pra quem curte o desvio.
            </p>
        </>
    )
}

export default App
