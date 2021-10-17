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
        dispatch({type:'FETCH_ALL', payload: data})

    } catch(error){
        console.log(error)    
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
        console.log(error)    
    }  
}

export const updatePost = (id, post)=>async(dispatch)=>{
    try{

        const { data } = await api.updatePost(id, post)
        const action = {
            type:'UPDATE', 
            payload: data
        }
        dispatch(action)
    } catch(error){
        console.log(error)    
    }  
}
export const deletePost = (id)=>async(dispatch)=>{
    try{

        await api.deletePost(id)
        const action = {
            type:'DELETE', 
            payload: id
        }
        dispatch(action)
    } catch(error){
        console.log(error)    
    }  
}

