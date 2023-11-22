import { useValue } from '../../../context/AppProvider'
import './Main.scss'
import { Button } from '../../../utils/index'
import { useState } from 'react'
import UserModal from '../../../helpers/user-modal/UserModal'

const Main = () => {
  const [state, dispatch] = useValue()
  const [modal, setModal] = useState(false)
  const [editUserId, setEditUserId] = useState('')
  const toggleModal = (id) => {
    setModal(true)
    setEditUserId(id)
  }
  return (
    <div className='main__wrapper'>
      <div className='user__info'>
        <strong>Avatar: <span className='avatar'>{state.info.userData.intials}</span></strong>
        <strong>Firstname: <span>{state.info.userData.firstname}</span></strong>
        <strong>Lastname: <span>{state.info.userData.lastname}</span></strong>
        <strong>Email: <span>{state.info.userData.email}</span></strong>
        <Button text={'Edit'} click={()=>toggleModal(state.info.userData._id)}/>
      </div>
      {
        modal && <UserModal editUserId={editUserId} setModal={setModal} modal={modal}/>
      }
    </div>
  )
}

export default Main