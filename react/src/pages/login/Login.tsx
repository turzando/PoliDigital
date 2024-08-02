import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import authService from '../../services/AuthService'
import './Login.css'

import schoolSvg from '../../assets/school.svg'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate() 

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await authService.login(username, password)
    if (response.success) {
      // return <Navigate to="/" />;

      navigate('/dashboard', { state: { name: response.data.name } });
    }
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleLogin}>
            <span className="login-form-tittle">Bem-vindo(a) ao PoliDigital!</span>
            
            <span className="login-form-tittle">
              <img src={schoolSvg} alt="icon" />
            </span>

            <div className="wrap-input">
              <input 
                className={username !== "" ? "has-val input" : "input"} 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <span className="focus-input" data-placeholder="username"></span>
            </div>

            <div className="wrap-input">
              <input 
                className={password !== "" ? "has-val input" : "input"}
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button 
                type='submit' 
                className="login-form-btn"
                disabled={!username || !password}
              >Login</button>
            </div>

            {/* <div className="text-center">
              <span className="txt1">Esqueceu a senha?</span>
              <a href="#" className="txt2">Trocar senha</a>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
