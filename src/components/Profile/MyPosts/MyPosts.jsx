import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../util/validators/validators";
import {Textarea} from "../../commons/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

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
                <Field name={"newPostText"} component={Textarea} placeholder={"Enter text:"}
                       validate={[required,maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const AddNewPostFormRedux = reduxForm({form:"profileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;