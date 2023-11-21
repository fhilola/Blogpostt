import React, { useEffect, useState } from 'react'
import instance from '../../../services/api'
import { useValue } from '../../../context/AppProvider'
import './Articles.scss'
import Modal from '../../../helpers/modal/Modal'

const Articles = () => {
  const [data, setData] = useState(null)
  const [state, dispatch] = useValue()
  const [modal, setModal] = useState(false)
  const [editItemId, setEditItemId] = useState('')
  const { user_id } = state.info

  useEffect(() => {
    instance('api/posts')
      .then(response => setData(response.data.data))
      .catch(err => console.log(err))
  }, [data])

const handleDelete = (id) => {
  dispatch({type: 'DELETE', id})
}
const toggleModal  = (id) => {
  setModal(true);
  setEditItemId(id)
}
  return (
    <div className='articles__wrapper'>
      {
        data?.map(products =>
          products.author === user_id && <div className='card'>
            <img src={products.image} alt="" />
            <h2>{products.title}</h2>
            <p>{products.description.slice(0, 20)}</p>
            <div className="buttons">
              <button onClick={() => handleDelete(products._id)} className='delete'>Delete</button>
              <button onClick={()=>toggleModal(products._id)} className='edit'>Edit</button>
            </div>
          </div>
        )
      }
      {
        modal && <Modal editItemId={editItemId}/>
      }
    </div>
  )
}

export default Articles