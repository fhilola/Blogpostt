import { useValue } from '../../../context/AppProvider'
import instance from '../../../services/api'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, dispatch] = useValue()
  const navigate = useNavigate()

  const handleUSerSingup = (e)=>{
    e.preventDefault()
    instance.post('/api/auth/signup', {
      firstname,
      lastname,
      email,
      password
    })
    .then(response => {
      console.log(response);
      if(response.data.token){
        const userdata = {
          user: response.data.data,
          token: response.data.token
        }
        dispatch({type:'AUTH', userdata})
        toast.success('Successfully registered')
        navigate('/admin')
      }
      else{
        throw new Error('Something went wrong')
      }
    })
    .catch(err => {
      toast.error(err.response.data?.errors[0].msg)
    })
  }
  return (
    <form className='auth-form' onSubmit={handleUSerSingup}>
      <input type="text" placeholder='Firstname' value={firstname} onChange={(e)=> setFirstname(e.target.value)}/>
      <input type="text" placeholder='Lastname' value={lastname} onChange={(e)=> setLastname(e.target.value)}/>
      <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default Signup