import('./Login.css');

import { useNavigate } from 'react-router';
import { userTokenAtom } from '../atoms';
import { useSetAtom } from 'jotai';

export default function Login() {
  const navigate = useNavigate();

  const setUserToken = useSetAtom(userTokenAtom);

  const handleLogin = async () => {
    setUserToken('token'); // TODO: Handle auth
    navigate('/');
  };

  return (
    <div id="center">
      <div id="sub">
        <p id="title">Login</p>
        <div>
          <p>Email</p>
          <input />
        </div>
        <div>
          <p>Senha</p>
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
