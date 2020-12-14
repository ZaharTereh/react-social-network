import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) =>{
    
    let postElements = props.postData.map(element => {
        return (<Post text={element.text} image={element.image}/>);
    });

    return(
        <div>
            My posts
            <div>New post</div>
            <div>
                {postElements}
            </div>
            
        </div>
    );
}

export default MyPosts;