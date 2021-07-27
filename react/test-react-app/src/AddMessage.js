import React, { useState } from 'react';
import PropTypes from 'prop-types';

const styles ={
    formStyle:{
        marginBottom: '1rem'
    }
}

function AddMessage({onCreate}){
    const[value, setValue] = useState('');
    
    function submitHandler(event){
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return(
        <form style={styles.formStyle} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button type="submit">Add message!</button>
        </form>
    )
}

AddMessage.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddMessage