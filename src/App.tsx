import './App.css'

function App() {

    return (
        <>
            <div id = "header">
                <img src={"./UFAB3.png"} alt={"Logo"}/>
                <div id="buttons">
                    <button id = "home">Home</button>
                    <button id = "login">Login</button>
                </div>
            </div>
            <div id = "center">
                <p className="read-the-docs">
                    E sorte é coisa além de cavalos e de sombras, coisas.
                    Além de ficar ou de ir embora, a pele.
                    Também vai embora quando morre o corpo.
                    Morre a pele.
                    Sobra vida.
                    Somente pra quem curte o desvio.
                </p>
            </div>
            <div id = "bottom">
                <img src = {"./UFABC_LAZY.png"} id = "socials"/>
                <div id="buttons">
                    <button id = "quem">Quem somos</button>
                    <button id = "faq">FAQ</button>
                    <button id = "email">Email</button>
                    <button id = "fale">Fale Conosco</button>
                </div>
            </div>
        </>
    )
}

export default App
