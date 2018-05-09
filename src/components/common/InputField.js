import React from 'react';
import '../styles/input-field-styles.css';

const InputField = ({label, type, aria, onChange}) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">{label}</label>
        <input type={type} className="form-control"
               aria-describedby={aria}
               onChange={onChange}/>
      </div>
    </form>
  );
}
export default InputField;
