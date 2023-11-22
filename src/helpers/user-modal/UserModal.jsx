import instance from '../../services/api';
import { Button } from '../../utils'
import './UserModal.scss'
import { IoMdCloseCircle } from "react-icons/io";

const UserModal = ({editUserId, modal, setModal}) => {

    function updateUserInfo (e) {
        e.preventDefault()
        instance.put('')
    }
  return (
    <div className='user__modal'>
        <form className='user__data-form' onSubmit={updateUserInfo}>
            <label htmlFor="firstname">Firstname
                <input type="text" id='firstname'/>
            </label>
            <label htmlFor="lastname">Lastname
                <input type="text" id='lastname'/>
            </label>
            <label htmlFor="email">Email
                <input type="email" id='email'/>
            </label>
            <Button type='submit' text={'Save'}/>
        </form>
        <button onClick={()=>setModal(false)} className='close-btn'><IoMdCloseCircle /></button>
    </div>
  )
}
export default UserModal