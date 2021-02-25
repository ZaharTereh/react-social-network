import React, { useImperativeHandle } from 'react';
import { Field, reducer, reduxForm } from 'redux-form';

const Login = (props) =>{
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm/>
        </div>
    )
}

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"}  name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form : 'login'})(LoginForm)

export default Login;