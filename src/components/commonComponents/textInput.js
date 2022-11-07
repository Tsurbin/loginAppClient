import React from 'react';

const TextInput = ({type, name, value, onChange, placeholder, maxLength, inputClass, onBlur, elementClass, label, labelClass, wrapperClass, errorValidation,errorClassName,errorMessage,useError=false }) =>{

  wrapperClass = wrapperClass? wrapperClass:'form-group';
  inputClass = inputClass ? inputClass : 'form-control';
  elementClass = elementClass ? elementClass : 'elementTextClass';
    
  return(
    <div className={wrapperClass}>
      <label className={labelClass ? labelClass : ""} htmlFor={name}>{label}</label>
      <div className = {elementClass}>
        <input
          type={type}
          name={name}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          onBlur={onBlur}
        />
        {useError?(<div>{errorMessage!=='' && <div className={errorClassName}>{errorMessage}</div>}</div>):""}
      </div>
        
    </div>
  );
};

export default TextInput;