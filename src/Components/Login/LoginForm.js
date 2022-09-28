import React from 'react';
import {Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import style from '../common/FormsControls/FormControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required]} placeholder={'Login'} name={'email'} component={Input}/></div>
            <div><Field validate={[required]} placeholder={'Password'} type={'password'} name={'password'} component={Input}/></div>
            <div><Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Запомнить меня</div>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div><button>Войти</button></div>
        </form>
    );
};

export default LoginForm;