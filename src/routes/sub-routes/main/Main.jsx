import { useValue } from '../../../context/AppProvider'
import './Main.scss'
import { Button } from '../../../utils/index'
import { useState } from 'react'

const Main = () => {
  const [state, dispatch] = useValue()
  const [modal, setModal] = useState(false)
  return (
    <div className='main__wrapper'>
      <div className='user__info'>
        <strong>Avatar: <span className='avatar'>{state.info.userData.intials}</span></strong>
        <strong>Firstname: <span>{state.info.userData.firstname}</span></strong>
        <strong>Lastname: <span>{state.info.userData.lastname}</span></strong>
        <strong>Email: <span>{state.info.userData.email}</span></strong>
        <Button text={'Edit'} />
      </div>
    </div>
  )
}

export default Main