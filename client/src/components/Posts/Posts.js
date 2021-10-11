import React from 'react'
import './Style'
import { useSelector } from 'react-redux'


const Posts = () => {

    const posts = useSelector((state)=> state.posts)
    console.log(posts)
    return (
        <div>
            <h1>Here all post will be render</h1>
        </div>
    )
}

export default Posts
