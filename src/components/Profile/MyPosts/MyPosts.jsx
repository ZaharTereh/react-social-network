import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () =>{
    return(
        <div>
            My posts
            <div>New post</div>
            <Post text='Hello'/>
            <Post text='Привет'/>
            <Post text='Здравствуй'/>
        </div>
    );
}

export default MyPosts;