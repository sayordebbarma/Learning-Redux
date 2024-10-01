import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: 1, name: 'David'},
    {id: 2, name: 'Happy'},
    {id: 3, name: 'Eli'},
]


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer