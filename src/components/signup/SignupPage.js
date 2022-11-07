import React from 'react';
import {PropTypes} from 'prop-types';
import SignupForm from './SignupForm';
import countryList from 'react-select-country-list';
import * as formUtils from '../commonComponents/formUtils'
import api from '../../api/api';
import {withRouter} from '../commonComponents/withRouter';
import loginDictionary from '../../dictionary';
import dictionary from './../../dictionary';

class SignupPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            country: "",
            countriesOptions:[],
            formValidationMessage: "",
            enableSubmit: true,
            errors: {}
        };
        
        this.onChangeDropList = this.onChangeDropList.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        
    }
    componentDidMount() {
        let countriesOptions = countryList().getData();
        this.setState({
            countriesOptions: countriesOptions
        })
    }

    selectCountry (val) {
        this.setState({ country: val });
    }
    onChangeDropList(country) {
        this.setState({country});
    }
    onChangeInputText = (name) => (event) => {
        formUtils.onChangeTextInput(name, event.target.value, this);
    }
    onFormSubmit() {
        formUtils.formValidation(this);
        let userData = {};
        userData.userName = this.state.userName;
        userData.password = this.state.password;
        userData.country = this.state.country;
        userData.organization = this.state.organization;
        userData.role = this.state.role;
        this.setState({enableSubmit: false})
        api.signUpToSite(userData).then( (res) => {
            if(res === dictionary.loginDictionary.SUCCESS) {
                this.props.navigate('/login');
            }
            if(res !== dictionary.loginDictionary.SUCCESS) {
                this.setErrorMessage(res);
            }
        });
    }
    setErrorMessage(res) {
        let errorMessage = "";
        switch(res) {
            case loginDictionary.loginDictionary.FAILED:
                errorMessage = "Somthing went wrong, Plean try again";
                break;
            case loginDictionary.loginDictionary.USER_EXIST:
                errorMessage = "User already exist";
                break;
            case loginDictionary.loginDictionary.MISSING_DATA:
                errorMessage = "Some fields are missing";
                break;
            default: errorMessage="";
        }
        this.setState({formValidationMessage: errorMessage});
    }
    onClickBackToLogin = () => {
        this.props.navigate('/login');
    }
    render() {
        return (
            <SignupForm 
                state={this.state}
                onChangeDropList={this.onChangeDropList}
                onChangeInputText={this.onChangeInputText}
                onFormSubmit={this.onFormSubmit}
                onClickBackToLogin={this.onClickBackToLogin}
            />
        )
    }
}

SignupPage.propTypes = {
    
};


export default withRouter(SignupPage);