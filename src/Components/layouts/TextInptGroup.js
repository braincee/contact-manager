import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextInptGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange, 
    error

}) => {
    return (
        <div className='form-group'>
        <label htmlFor={name} className='mb-3'>{label}</label>
        <input
           type={type}
           name={name}
           placeholder={placeholder}
           value = {value}
           onChange = {onChange}
           className={classnames('form-control form-control-lg mb-3', {'is-invalid': error})}
        />
        {error && <div className = "invalid-feedback mb-3">{error}</div>}
        
    </div>
    );
}

TextInptGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
}

TextInptGroup.defaultProps = {
    type: 'text'
}

export default TextInptGroup;