import './App.css';
import { useNavigate } from 'react-router-dom';

const user = {
    // TODO o user state foi migrado eu acredito
    // name: "Júlio"
    name:null
}

// let state = "main";

export function LoginButton(){
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login')
    }
    if(user.name == null){
        return (<button id="login" onClick={handleLoginClick}>Login</button>)
    } else {
        return (<button id="user">{user.name}</button>)
    }
}

export function Header() {
    const navigate = useNavigate();

    const login = LoginButton();
    const handleHomeClick = () => {
        navigate('/');
      };


    return (
        <div id="header">
            <img src={"/UFAB3.png"} alt={"Logo"}/>
            <div id="buttons">
                <button id="home" onClick={handleHomeClick}>Home</button>
                {login}
            </div>
        </div>
    )
}

export function Bottom(){
    return (
        <div id="bottom">
            <img src={"/UFABC_LAZY.png"} id="socials" alt={"Logo UFAB3"}/>
            <div id="buttons">
                <button id="quem">Quem somos</button>
                <button id="faq">FAQ</button>
                <button id="email">Email</button>
                <button id="fale">Fale Conosco</button>
            </div>
        </div>
    )
}

// export function Body(){
//     return (
//         <div id="center">
//             <p>
//                 Isso é um placeholder para a tela inicial do UFAB3
//             </p>
//             <p>
//                 Tenha um bom dia :)
//             </p>
//         </div>
//     )
// }

// function App() {
//     const header = Header()
//     const center = Body()
//     const bottom = Bottom()
//     return (
//         <>
//             {header}
//             {center}
//             {bottom}
//         </>
//     )
// }

// export default App
