import { useState } from 'react'

import './App.css'

import schoolSvg from './assets/school.svg'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("adfasfasd")
    console.log(email)
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
                className={email !== "" ? "has-val input" : "input"} 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
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
                disabled={!email || !password}
              >Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Esqueceu a senha?</span>
              <a href="#" className="txt2">Trocar senha</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
