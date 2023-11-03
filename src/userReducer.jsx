import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";


const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => { //add User reducer
            console.log(state)
            state.push(action.payload) //Push pay load object to userList
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload;
            const updatingUser = state.find(user => user.id == id);
            console.log(id)
            if(updatingUser){
                updatingUser.name = name;
                updatingUser.email = email;
            }
        },

        deleteUser: (state, action) => {
            const {id} = action.payload;
            const deleteUser = state.find(user => user.id == id);
            if(deleteUser){
                return state.filter(user => user.id !== id)
            }
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer