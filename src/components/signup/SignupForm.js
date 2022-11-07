import React from 'react';
import {PropTypes} from 'prop-types';
import TextInput from '../commonComponents/textInput';
import Select from 'react-select';


class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            
        };
        this.renderTextInput = this.renderTextInput.bind(this);
        this.renderCompanyNameTextInput = this.renderCompanyNameTextInput.bind(this);
        this.renderUserNameTextInput = this.renderUserNameTextInput.bind(this);
        this.renderPasswordTextInput = this.renderPasswordTextInput.bind(this);
        this.renderRoleTextInput = this.renderRoleTextInput.bind(this);
        this.renderCountryDropdown = this.renderCountryDropdown.bind(this);
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
                    useError ={useError}
                    errorMessage={this.props.state.errors[name]}
                    errorClassName={"field-validation-alert"}
                    errorValidation={errorValidation}
                />
            </div>
        )
    }
    renderDropdownList({placeholder, options, value, onChange, multi, simpleValue, className, clearable}) {
        return (
            <div className="dropdown-component">
                <Select 
                    clearable={clearable}
                    placeholder={placeholder}
                    options={options}
                    value={value}
                    onChange={onChange}
                    multi={multi}
                    simpleValue={simpleValue}
                    className={"dropdown-element"}
                />
            </div>
        )
    }
   

    renderCompanyNameTextInput() {
        return this.renderTextInput({
            type: "text",
            name: "organization",
            inputClass: "company-name-input",
            wrapperClass: "company-name-input-wrapper",
            labelClass:"form-label-company-name",
            label:"Organization",
            placeholder:"Organization",
            useError: true
        })
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
                label:"Password",
                name:"password",
                placeholder:"Password",
                useError: true
            })
        );
    }
    renderRoleTextInput() {
        return (
            this.renderTextInput({
                type: "text",
                label:"Role",
                name:"role",
                placeholder:"Role",
                useError: true
            })
        );
    }
    renderCountryDropdown() {
        return (
            this.renderDropdownList({
                placeholder: "Choose a country",
                options: this.props.state.countriesOptions,
                value: this.props.state.country,
                onChange: this.props.onChangeDropList,
                multi: false, 
                simpleValue: false,
                clearable: true
            })
        )
    }
    
    render() {
        return (
            <div className="signup-form-main">
                <form className="sign-up-container">
                        <div className="main-header"></div>
                        <div className="sign-up-fields">
                            {this.renderUserNameTextInput()}
                            {this.renderPasswordTextInput()}
                            {this.renderCompanyNameTextInput()}
                            {this.renderRoleTextInput()}
                            {this.renderCountryDropdown()}
                        </div>
                        <div className="submit-form" onClick={this.props.onFormSubmit}>Sign up</div>
                        <div className="back-to-login-button" onClick={this.props.onClickBackToLogin}>Return to login</div>
                        {this.props.state.formValidationMessage ? <div className="form-validation-message">{this.props.state.formValidationMessage}</div> : ""}    
                </form>
            </div>
        )
    }
}

SignupForm.propTypes = {
    onChangeDropList: PropTypes.func,
    onChangeInputText: PropTypes.func,
    state: PropTypes.object,
    onChangeInputText: PropTypes.func,
    onFormSubmit: PropTypes.func,
    onClickBackToLogin: PropTypes.func
};


export default SignupForm;