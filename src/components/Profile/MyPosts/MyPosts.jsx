import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) =>{
    
    let postElements = props.postData.map(element => {
        return (<Post text={element.text} image={element.image}/>);
    });


    let addPost = (values) => {
        props.addPost(values.newPostText);
    }


    return(
        <div>
            <h3>My posts</h3>
            <div>
                <AddNewPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
            
        </div>
    );
}

const AddNewPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={"textarea"} placeholder={"Enter text:"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const AddNewPostFormRedux = reduxForm({form:"profileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;