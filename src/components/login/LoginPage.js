import React from 'react';
import LoginForm from './LoginForm';
import {withRouter} from '../commonComponents/withRouter';
import api from '../../api/api'
import * as formUtils from '../commonComponents/formUtils'; 
import dictionary from './../../dictionary';
import localStorageService from '../../api/localStorage/localStorageService';


class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            errors: {
                formErrorMessage: ""
            }
        };
        this.dictionary = {}
        this.validate = {
            userName:false,
            password:false
        };
        
        this.renderPage = this.renderPage.bind(this);
        this.onClickSignUp = this.onClickSignUp.bind(this);
        this.onChangeInputText = this.onChangeInputText.bind(this);
        this.startLoginProcess = this.startLoginProcess.bind(this);
        this.setErrorMessage = this.setErrorMessage.bind(this);
    }

    onChangeInputText = (name) => (event) => {
        formUtils.onChangeTextInput(name, event.target.value, this);
    }
    onClickSignUp = () => {
        this.props.navigate('/signup');
    }
    
    startLoginProcess = () => {
        formUtils.formValidation(this);
        let isFormValid = this.checkFormErrors();
        if(isFormValid) {
            let postData = {};
            postData.userName = this.state.userName;
            postData.password = this.state.password;
            api.loginToSite(postData).then((res) => {
                if(res.state === dictionary.loginDictionary.SUCCESS) {
                    localStorageService.clearToken();
                    let userData = {};
                    userData.accessToken = res.data.accessToken;
                    userData.userId = res.data.userId;
                    localStorageService.setToken(userData);
                    this.props.navigate('/loggedIn');
                }
                if(res.state !== dictionary.loginDictionary.SUCCESS) {
                    this.setErrorMessage(res);
                }
            });
        }
        
    }
    checkFormErrors() {
        let fieldsValidationArr = ["userName"];
        let isFormValid = formUtils.isFormFieldsValid(fieldsValidationArr, this);
        return isFormValid;
    }
    setErrorMessage(res) {
        let errorMessage = "";
        switch(res.state) {
            case dictionary.loginDictionary.FAILED:
                errorMessage = "Somthing went wrong, Plean try again";
                break;
            case dictionary.loginDictionary.USER_EXIST:
                errorMessage = "User already exist";
                break;
            case dictionary.loginDictionary.MISSING_DATA:
                errorMessage = "Some fields are missing";
                break;
            case dictionary.loginDictionary.USER_AND_PASSWORD_FAILURE:
                errorMessage = "User or password are incorrect";
                break;
            default: errorMessage="";
        }
        let errors = this.state.errors;
        errors["formErrorMessage"] = errorMessage;
        this.setState({errors: errors});
    }

    renderPage() {
        return (
            <div className="login-page-container">
                <LoginForm
                    dictionary={this.dictionary} 
                    state={this.state}
                    validate={this.validate}
                    onClickSignUp={this.onClickSignUp}
                    startLoginProcess={this.startLoginProcess}
                    onChangeInputText={this.onChangeInputText}
                />
            </div>
        )
    }

    render(){
        return(
            <div className="login-page-main">
                {this.renderPage()}
            </div>
        );
    }
}


export default withRouter(LoginPage);