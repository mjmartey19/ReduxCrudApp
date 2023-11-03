import React, { useState } from 'react'
import { addUser } from './userReducer' //User reduce container state and action
import { useDispatch, useSelector } from 'react-redux' //Use to send the update state to the store
import { useNavigate } from 'react-router-dom'

function Create() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
const users = useSelector((state) => state.users)
const dispatch = useDispatch();
const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({id:users[users.length - 1].id + 1, name: name, email: email}))
    navigate("/")
  }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-primary text-white p-5'>
          <h3 style={{fontSize:"30px", paddingBottom: "20px"}}>Add New User</h3>
          <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='form-control'placeholder='enter name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
              <label htmlFor='name'>Email:</label>
                <input type='text' name='email' className='form-control' placeholder='enter Email'
                   onChange={(e) => setEmail(e.target.value)}
                />
              </div><br />
              <button className='btn btn-info'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Create
