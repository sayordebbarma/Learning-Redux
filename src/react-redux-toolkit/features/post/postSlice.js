import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learning redux with nodejs', description: "I've started learning redux to manage state in more efficient way" },
    { id: '2', title: 'Learning redux with react', description: "I've started learning redux to manage state in more efficient way" },
    { id: '3', title: 'Learning redux toolkit', description: "I've started learning redux to manage state in more efficient way" }
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, description) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts; // to avoid having to change state in every compoment

export const { postAdded } = postSlice.actions
export default postSlice.reducer;