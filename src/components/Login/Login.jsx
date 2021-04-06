import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from "../commons/FormControls/FormControls";
import {required} from "../../util/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './Login.module.css';

const Login = (props) =>{

    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email,formData.password,formData.rememberMe);
    }

    if(props.isAuth){
       return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[required]} type={"password"}/>
            </div>
            <div>
                <Field component={Input}  name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            {
                props.error &&
                <div className={style.errorMassage}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form : 'login'})(LoginForm)

const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

export default connect(mapStateToProps,{loginThunkCreator})(Login);