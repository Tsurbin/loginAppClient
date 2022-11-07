import _ from 'lodash';
import localStorageDictionary from '../../api/localStorage/localStorageDictionary';


export function onChangeDropdownList(item, field, self) {
    const object = self.state;
    object[field] = item;
    self.setState(object);
}
export function onChangeTextInput(item, field, self) {
    const object = self.state;
    object[item] = field;
    self.setState(object);
}

export function formValidation(self) {
    const object = self.state;
    for (const [key, value] of Object.entries(object)) {
        let regex;
        switch(key) {
            case "userName":
                regex = localStorageDictionary.regex.email;
                if(!regex.test(value)) { 
                    object.errors[key] = "Email not valid";
                }
                if(regex.test(value)) { 
                    object.errors[key] = "";
                }
                break;
            case "password":
                regex = localStorageDictionary.regex.mediumPassword;
                if(!regex.test(value)) {
                    object.errors[key] = "password to week";
                }
                if(regex.test(value)) {
                    object.errors[key] = "";
                }
                break;
            case "organization":
            case "role":
                if(value == null || value === "") {
                    object.errors[key] = "mandatory field";
                }
                if(value != null && value !== "") {
                    object.errors[key] = "";
                }
                break;
            default: break;
        }
    }
    self.setState(object);
}
export function isFormFieldsValid(fieldsArr, self) {
    const object = self.state;
    if(!object.errors) {
        return true;
    }
    for(let i=0; i < fieldsArr.length; i++) {
        if(object.errors[fieldsArr[i]] != null && object.errors[fieldsArr[i]] !== "") {
            return false;
        }
    }
    return true;
}
export function removeErrors(fieldsArr, self) {
    const object = self.state;
    fieldsArr.map( (field) => {
        if(object.errors && object.errors[field] && object.errors[field] != "") {
            object.errors[field] = "";
        }
    })
    self.setState(object);
}