import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleLogin = async () => {
    try {
      // Consultar o usuário com o email fornecido no arquivo db.json usando JSON Server
      const response = await fetch(`http://localhost:3001/usuarios?email=${email}`);
      const users = await response.json();
      const user = users[0]; // Assume que o email é único

      if (user && user.senha === password) {
        onLogin({ id: user.id, nome: user.nome, email: user.email });
        setRedirectToHome(true);
      } else {
        setError('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      setError('Erro ao realizar login. Tente novamente mais tarde.');
    }
  };

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container black-bg">
      <h2>Login</h2>
      <div>
        <label className="color-label">Email</label>
        <input className="input-size" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label className="color-label">Senha</label>
        <input className="input-size" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
