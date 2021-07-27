import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './ConText';


const styles={
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius:'4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    rm: {
        background: 'red',
        borderRadius: '50%',
        color: 'white',
        border: 'none',
        marginLeft: "15px"
    }
}

 function Item({did, index, onChange}){

     const {RemoveDo} = useContext(Context)
     const classes = []

     if(did.complited){
         classes.push('done')
     }

     console.log('did', did)
    return(
        <li style={styles.li}>
        <span className={classes.join(' ')}>
    <input 
            checked={did.complited}
            style={styles.input} 
            type="checkbox" 
            onChange={() => onChange(did.id)}
    />

        {index + 1}. &nbsp; {did.title}
        </span> 
        <button style={styles.rm} onClick={() => RemoveDo(did.id)}>&times;</button>
        </li>
    );
}

Item.propTypes = {
    did: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Item