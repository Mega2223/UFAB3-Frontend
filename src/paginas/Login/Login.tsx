import { Header } from '../../App.tsx';
import { Bottom } from '../../App.tsx';

import('./Login.css');

import { Link, useNavigate } from 'react-router';
import { userTokenAtom } from '../../atoms.ts';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';

export default function Login() {
  const navigate = useNavigate();

  const setUserToken = useSetAtom(userTokenAtom);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/login`,
      {
        email: values.email,
        password: values.password,
      }
    );

    const { token } = response.data;

    setUserToken(token);
    navigate('/uploadXlsx');
  };

  return (
    <>
      {Header()}
      <div id="center" className="tela-login">
        <div id="sub">
          <form onSubmit={handleLogin}>
            <p id="title">Login</p>
            <div>
              <p>Email</p>
              <input
                type="email"
                name="email"
                id=""
                value={values.email}
                onChange={(ev) =>
                  setValues({ ...values, email: ev.target.value })
                }
              />
            </div>
            <div>
              <p>Senha</p>
              <input
                type="password"
                name="password"
                id=""
                value={values.password}
                onChange={(ev) =>
                  setValues({ ...values, password: ev.target.value })
                }
              />
            </div>
            <p>
              <b> </b>
            </p>
            <div>
              <button>Login</button>
            </div>
          </form>
          <Box sx={{ marginTop: 3, textAlign: 'center' }}>
            <Link to="/create-account">Criar Conta</Link>
          </Box>
        </div>
      </div>
      {Bottom()}
    </>
  );
}
