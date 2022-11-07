import React from 'react';
import {PropTypes} from 'prop-types';
import TextInput from '../commonComponents/textInput';

class LoginForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.renderUserNameTextInput = this.renderUserNameTextInput.bind(this);
        this.renderPasswordTextInput = this.renderPasswordTextInput.bind(this);
        this.renderTextInput = this.renderTextInput.bind(this);
        this.renderSubmitButton = this.renderSubmitButton.bind(this);
        this.renderSignUpButton = this.renderSignUpButton.bind(this);
    }

    renderTextInput({type:type, name:name, label:label, placeholder:placeholder, useError, errorMessage, errorValidation, form_label_one}) {
        return(
            <div className="input-component">
                <TextInput 
                    type={type}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    inputClass = {"input-class"}
                    wrapperClass = {"wrapper-class"}
                    labelClass={"label-class"}
                    onChange={this.props.onChangeInputText(name)}
                    onKeyPress={this.props.onKeyPress}
                    useError ={useError}
                    errorMessage={this.props.state.errors[name]}
                    errorClassName={"field-validation-alert"}
                    errorValidation={errorValidation}
                />
            </div>
        )
    }
    renderUserNameTextInput() {
        return (
            this.renderTextInput({
                type: "text",
                inputClass: "user-name-input",
                wrapperClass: "user-name-input-wrapper",
                labelClass:"form_label form-label-user-name",
                label:"User Name",
                name:"userName",
                placeholder:"Enter Your Email",
                useError: true
            })
        );
    }
    renderPasswordTextInput() {
        return (
            this.renderTextInput({
                type: "password",
                inputClass: "user-name-input",
                wrapperClass: "user-name-input-wrapper",
                labelClass:"form-label",
                label:"Password",
                name:"password",
                placeholder:"Password",
                useError: false
            }
            )
        );
    }
    renderSubmitButton() {
        return(
            <div className="submit-button" onClick={this.props.startLoginProcess}>Login</div>
        );
    }
    renderSignUpButton() {
        return (
            <div className="sign-up-button" onClick={this.props.onClickSignUp}>Sign Up"</div>
        );
    }
    render(){
        return (
            <div className="login_form-main">
                <form className="login-form-container">
                    <div className="main-header">Login to site</div>
                    <div className="login-fields">
                        {this.renderUserNameTextInput()}
                        {this.renderPasswordTextInput()}
                        {this.renderSubmitButton()}
                        {this.renderSignUpButton()}
                    </div>
                    {this.props.state.errors.formErrorMessage ? <div className="form-validation-message">{this.props.state.errors.formErrorMessage}</div> : ""}    
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    onChangeInputText: PropTypes.func,
    validate: PropTypes.object,
    state: PropTypes.object,
    onKeyPress: PropTypes.func,
    startLoginProcess: PropTypes.func,
    onClickSignUp: PropTypes.func

};


export default LoginForm;