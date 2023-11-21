import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import instance from '../../services/api';
import { Button } from '../../utils';
import './Modal.scss'
import { useValue } from '../../context/AppProvider';


const Modal = ({editItemId}) => {
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [categoryData, setCategoryData] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [state, dispatch] = useValue()
    const modules = {
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link']
            ],
        },
        history: {
            delay: 500,
            maxStack: 100,
            userOnly: true
        }
    };

    useEffect(() => {
        instance('api/categories')
            .then(response => setCategoryData(response.data.data))
            .catch(err => console.log(err))
    }, [category])

    const handleCreatePost = (e) => {
        e.preventDefault()
        instance.put(`/api/posts/${editItemId}`, {
            title,
            image,
            description,
            category,
            headers: {
                "Authorization": 'Bearer ' + state.info.token
            }
        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    return (
        <div className='modal__wrapper'>
            <form className='create-form' onSubmit={handleCreatePost}>
                <input type="text" placeholder='Title' className='form__input' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="url" placeholder='Image link here' className='form__input' value={image} onChange={(e) => setImage(e.target.value)} />
                <ReactQuill modules={modules} theme="snow" value={description} onChange={setDescription} />
                <select defaultValue={'select'} className='form__input' onChange={(e) => setCategory(e.target.value)}>
                    <option disabled value="select">Select post category</option>
                    {categoryData &&
                        categoryData.map(categoryItem =>
                            <option key={categoryItem._id} value={categoryItem._id}>
                                {categoryItem.title}
                            </option>
                        )
                    }
                </select>
                <Button text={"Create"} />
            </form>
        </div>
    )
}
export default Modal