import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message}/>)

    let newPost = (formData) => {
       props.addPost(formData.newPostText)
    }

    return (
        <div className={styles.content}>
            Мои посты
            <PostReduxForm onSubmit={newPost}/>
            {postsElements}
        </div>

    );
};
const maxLength50 = maxLengthCreator(50)
const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'} validate={[required,maxLength50]}/>
            <button>Отправить</button>
        </form>
    )
}

const PostReduxForm = reduxForm({
    form: 'newPost'
})(PostForm)

export default MyPosts;