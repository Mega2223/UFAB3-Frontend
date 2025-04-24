import './App.css'

export function Header(){
    return (
        <div id="header">
            <img src={"./UFAB3.png"} alt={"Logo"}/>
            <div id="buttons">
                <button id="home">Home</button>
                <button id="login">Login</button>
            </div>
        </div>
    )
}

export function Bottom(){
    return (
        <div id="bottom">
            <img src={"./UFABC_LAZY.png"} id="socials" alt={"Logo UFAB3"}/>
            <div id="buttons">
                <button id="quem">Quem somos</button>
                <button id="faq">FAQ</button>
                <button id="email">Email</button>
                <button id="fale">Fale Conosco</button>
            </div>
        </div>
    )
}

function App() {
    return (
        <>
            <div id="header">
                <img src={"./UFAB3.png"} alt={"Logo"}/>
                <div id="buttons">
                    <button id="home">Home</button>
                    <button id="login">Login</button>
                </div>
            </div>
            <div id="center">
                <p>
                    Isso é um placeholder para a tela inicial do UFAB3
                </p>
                <p>
                    Tenha um bom dia :)
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
