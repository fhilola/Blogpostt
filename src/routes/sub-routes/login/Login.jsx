import { useState } from "react"
import instance from "../../../services/api"
import { useValue } from "../../../context/AppProvider"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, dispatch] = useValue()
  const navigate = useNavigate()
  const handleUserLogin= (e)=>{
    e.preventDefault()
    instance.post('api/auth/login', {
      email,
      password
    })
    .then(response => {
      if(response.data.token){
        const userdata = {
          user: response.data.data,
          token: response.data.token
        }
        dispatch({type:"AUTH", userdata})
        navigate('/admin')
      }
    })
    .catch(error => console.log(error))
  }
  return (
    <form className='auth-form' onSubmit={handleUserLogin}>
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login