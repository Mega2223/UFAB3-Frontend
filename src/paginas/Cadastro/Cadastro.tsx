import {Bottom, Header} from "../../App.tsx";

import("./Cadastro.css")

export default function Cadastro(){
    return (<>
        {Header()}
        <div id="center" className="tela-cadastro">
            <div>
                <p id="title">Cadastro</p>
                <div>
                    <p>Nome Completo</p>
                    <input/>
                </div>
                <div>
                    <p>Email</p>
                    <input/>
                </div>
                <div id="senha">
                    <div>
                        <p>Senha</p>
                        <input/>
                    </div>
                    <div id="senha2">
                        <p>Senha (confirmar)</p>
                        <input/>
                    </div>
                </div>
                <div id="sub">
                    <button>Cadastrar</button>
                </div>
            </div>
        </div>
        {Bottom()}
    </>)
}