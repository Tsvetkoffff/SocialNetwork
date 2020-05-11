import React from "react";
import {Form, Field} from "react-final-form";
import {required} from "../../../utilities/validators";
import style from "./Login.module.css";
import Preloader from "../../common/Preloader/Preloader";

const CustomInput = props => {
    return (<div>
        <label>{props.input.name.toUpperCase()}</label>
        <input {...props.input} type={props.type} placeholder={props.input.name}/>
        {props.meta.error && props.meta.touched && <span style={{color: "red"}}>{props.meta.error}</span>}
    </div>)
};

const LoginForm = props => {
    return <Form onSubmit={props.authorizeUser} errorMessage={props.errorMessage}>
            {props => (
                <form onSubmit={props.handleSubmit}>

                    <Field name="email" component="input"
                           validate={required}>
                        {({ input, meta }) => <CustomInput input={input} meta={meta} type='text'/>}
                    </Field>

                    <Field name="password" component="input"
                           validate={required}>
                        {({ input, meta }) => <CustomInput input={input} meta={meta} type='password'/>}
                    </Field>

                    <Field name="rememberMe" component="input"
                           type="checkbox"/>

                    <button type="submit">Submit</button>
                    <span style={{color: "red"}}>{props.errorMessage}</span>
                </form>
            )}
        </Form>
};

export default LoginForm;