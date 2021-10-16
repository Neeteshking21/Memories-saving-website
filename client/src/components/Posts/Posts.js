import React from 'react'
import './Style'
import { useSelector } from 'react-redux'


const Posts = () => {

    const posts = useSelector((state)=> state.posts)
    return (
        <div>
            {posts.map((home, index)=> 
                <h1 key={index}>{home.title}</h1>
            )}
            
        </div>
    )
}

export default Posts
