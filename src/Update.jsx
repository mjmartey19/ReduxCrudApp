import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './userReducer';
updateUser

function Update() {
  const {id} = useParams(); //get id from the router
  const users = useSelector((state) => state.users)
  const existingUser = users.filter( user => user.id == id)
  const {name, email} = existingUser[0];
  const [updateName, setName] = useState(name)
  const [updateEmail, setEmail] = useState(email)
  const dispatch = useDispatch();
 const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({
      id: id,
      name: name,
      email: email
    }))
  navigate("/")
  }
  // console.log(existingUser)


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-primary text-white p-5'>
      <h3 style={{fontSize:"30px", paddingBottom: "20px"}}>Update User</h3>
      <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='enter name'
            value={updateName}
            onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
          <label htmlFor='name'>Email:</label>
            <input type='text' name='email' className='form-control' placeholder='enter Email'
            value={updateEmail}
            onChange={e => setEmail(e.target.value)}
            />
          </div><br />
          <button className='btn btn-info'>Update</button>
      </form>
    </div>
</div>
  )
}

export default Update
