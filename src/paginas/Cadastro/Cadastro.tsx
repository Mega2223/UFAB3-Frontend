import { Bottom, Header } from '../../App.tsx';

import('./Cadastro.css');
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

export default function Cadastro() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  });

  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (values.password !== values.passwordConf) {
      alert('As senhas não coincidem');
      return;
    }

    const firstName = values.name.split(' ')[0];
    const lastName = values.name.split(' ').slice(1).join(' ');

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/sign`, {
        name: firstName,
        lastName: lastName,
        email: values.email,
        password: values.password,
      });

      navigate('/login');
    } catch (error) {
      alert('Erro ao cadastrar usuário. Tente novamente.');
      return;
    }
  };

  return (
    <>
      {Header()}
      <div id="center" className="tela-cadastro">
        <div>
          <form onSubmit={handleCadastro}>
            <p id="title">Cadastro</p>
            <div>
              <p>Nome Completo</p>
              <input
                type="name"
                name="name"
                id=""
                value={values.name}
                onChange={(ev) =>
                  setValues({ ...values, name: ev.target.value })
                }
              />
            </div>
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
            <div id="senha">
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
              <div id="senha2">
                <p>Senha (confirmar)</p>
                <input
                  type="password"
                  name="passwordConf"
                  id=""
                  value={values.passwordConf}
                  onChange={(ev) =>
                    setValues({ ...values, passwordConf: ev.target.value })
                  }
                />
              </div>
            </div>
            <div id="sub">
              <button>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
      {Bottom()}
    </>
  );
}
