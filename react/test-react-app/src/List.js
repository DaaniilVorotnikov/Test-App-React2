import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const styles ={
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

 function List(props){
  return(
  <ul style={styles.ul}>
       {props.dos.map((done,index)=> {
           return <Item did = {done} key= {done.id} index={index} onChange={props.onBet}/>;
       }) }
    </ul>
  )
}

List.propTypes = {
  dos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onBet: PropTypes.func.isRequired
}

export default List