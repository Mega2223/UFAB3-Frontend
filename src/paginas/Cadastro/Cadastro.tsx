import {Bottom, Header} from "../../App.tsx";

import("./Cadastro.css")
import { useNavigate } from 'react-router';
import { userTokenAtom } from '../../atoms.ts';
import { useSetAtom } from 'jotai';
import { useState } from "react";
import axios from 'axios';

export default function Cadastro(){

const navigate = useNavigate();

const setUserToken = useSetAtom(userTokenAtom);

const handleCadastro = async () => {
    debugger
    const response = await axios.post("http://localhost:9001/auth/sign",{
        name: values.name,
        lastName:"Sobrenome",
        email: values.email,
        password: values.password
    })
    .then((res) => localStorage.setItem("token",res.data.token))
    .catch((err) => console.error(err));
    setUserToken('token'); // TODO: Handle auth
    navigate('/uploadXlsx');
    };

    const [values,setValues] = useState({
    name:"",
    email: "",
    password: "",
    passwordConf: ""
    })
      

    return (<>
        {Header()}
        <div id="center" className="tela-cadastro">
            <div>
                <form onSubmit={handleCadastro}>
                    <p id="title">Cadastro</p>
                    <div>
                        <p>Nome Completo</p>
                        <input type="name" name="name" id="" value={values.name} onChange={(ev) => setValues({...values,name:ev.target.value})}/>
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email" name="email" id="" value={values.email} onChange={(ev) => setValues({...values,email:ev.target.value})}/>
                    </div>
                    <div id="senha">
                        <div>
                            <p>Senha</p>
                            <input type="passwor" name="password" id="" value={values.password} onChange={(ev) => setValues({...values,password:ev.target.value})}/>
                        </div>
                        <div id="senha2">
                            <p>Senha (confirmar)</p>
                            <input type="passwordConf" name="passwordConf" id="" value={values.passwordConf} onChange={(ev) => setValues({...values,passwordConf:ev.target.value})}/>
                        </div>
                    </div>
                    <div id="sub">
                        <button>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
        {Bottom()}
    </>)
}