import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) =>{
    
    let postElements = props.postData.map(element => {
        return (<Post text={element.text} image={element.image}/>);
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let changeNewPostText = () => {
        let inputText = newPostElement.current.value;
        props.changeNewPostText(inputText);
    }

    return(
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={changeNewPostText} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
            
        </div>
    );
}

export default MyPosts;