import('./Login.css');

import { useNavigate } from 'react-router';
import { userTokenAtom } from '../../atoms.ts';
import { useSetAtom } from 'jotai';

export default function Login() {
  const navigate = useNavigate();

  const setUserToken = useSetAtom(userTokenAtom);

  const handleLogin = async () => {
    setUserToken('token'); // TODO: Handle auth
    navigate('/');
  };

  return (
    <div id="center" className="tela-login">
      <div id="sub">
        <p id="title">Login</p>
        <div>
          <p>Email</p>
          <input />
        </div>
        <div>
          <p>Senha</p>
          {/*TODO: Ocultar a senha*/}
          <input />
        </div>
        <p>
          <b> </b>
        </p>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}
