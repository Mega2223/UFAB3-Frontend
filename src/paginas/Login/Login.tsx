import {Header} from "../../App.tsx";
import {Bottom} from "../../App.tsx";

import('./Login.css');

import { useNavigate } from 'react-router';
import { userTokenAtom } from '../../atoms.ts';
import { useSetAtom } from 'jotai';
import { useState } from "react";
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();

  const setUserToken = useSetAtom(userTokenAtom);

  const handleLogin = async () => {
    const response = await axios.post("http://localhost:9001/auth/login",{
     email: values.email,
     passwordHash: values.password
    })
    .then((res) => localStorage.setItem("token",res.data.token))
    .catch((err) => console.error(response));
    setUserToken('token'); // TODO: Handle auth
    navigate('/uploadXlsx');
  };

  

  const [values,setValues] = useState({
    email: "",
    password: ""
  })
  
  return (
      <>
        {Header()}
    <div id="center" className="tela-login">
      <div id="sub">
        <form onSubmit={handleLogin}>
            <p id="title">Login</p>
            <div>
              <p>Email</p>
              <input type="email" name="email" id="" value={values.email} onChange={(ev) => setValues({...values,email:ev.target.value})}/>
            </div>
            <div>
              <p>Senha</p>
              {/*TODO: Ocultar a senha*/}
              <input type="password" name="password" id="" value={values.password} onChange={(ev) => setValues({...values,password:ev.target.value})}/>
            </div>
            <p>
              <b> </b>
            </p>
            <div>
              <button>Login</button>
            </div>
          </form>
      </div>
    </div>
        {Bottom()}
      </>
  );
}
