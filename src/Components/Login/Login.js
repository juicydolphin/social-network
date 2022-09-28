import React from 'react';
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to={'/profile'}/>
    }
    return (<div>
            <h1>Авторизация</h1>
            <span>Логин: dolphin.krsk@gmail.com</span>
            <span>Пароль: 1234567</span>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>

    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})




export default connect(mapStateToProps,{login})(Login);