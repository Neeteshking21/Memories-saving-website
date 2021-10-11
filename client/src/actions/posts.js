import * as api from '../api'

// api.fetchPosts
// Action Creators

/* const getPost = () => {                    // Without redux-thunk
    const action = { type : 'FETCH_ALL', payload: [] }
    return action
}*/

// using redux thunk , you have a special capability to use callback inside a callback

export const getPost = () => async (dispatch) => {

    try{

        const { data } = await api.fetchPosts()
        const action = {
            type:'FETCH_ ALL', 
            payload: []
        }
        dispatch(action)

    } catch(error){
        console.log(error.message)    
    } 
}

export const createPost = (post)=>async(dispatch)=>{
    try{

        const { data } = await api.createPost(post)
        const action = {
            type:'CREATE', 
            payload: data
        }
        dispatch(action)
    } catch(error){
        console.log(error.message)    
    }  
}