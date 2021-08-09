import React, { useState } from 'react';
import PropTypes from 'prop-types';

const styles ={
    formStyle:{
        marginBottom: '1rem'
    }
}

function useInputValue(defaultValue = ''){
    const[value, setValue] = useState(defaultValue)

    return{
        bind: {
        value,
        onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddMessage({onCreate}){
    const input = useInputValue('');
    
    function submitHandler(event){
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
           // setValue('')
        }
    }

    return(
        <form style={styles.formStyle} onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type="submit">Add message!</button>
        </form>
    )
}

AddMessage.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddMessage