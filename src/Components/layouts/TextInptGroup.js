import React from 'react';
import PropTypes from 'prop-types'


const TextInptGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange

}) => {
    return (
        <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <input 
           type={type}
           name={name}
           className="form-control form-control-lg"
           placeholder={placeholder}
           value = {value}
           onChange = {onChange}
        />
        
    </div>
    );
}

TextInptGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}

TextInptGroup.defaultProps = {
    type: 'text'
}

export default TextInptGroup;