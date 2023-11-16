import { useState } from "react"
import instance from "../../../services/api"
import { useValue } from "../../../context/AppProvider"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, dispatch] = useValue()
  const handleUSerLogin = (e) => {
    e.preventDefault()
    console.log(state);
  }

  return (
    <form className='auth-form' onSubmit={handleUSerLogin}>
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login