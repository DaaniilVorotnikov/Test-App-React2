import React, {useEffect, useState} from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';
import PropTypes from 'prop-types';


export default function ItemList ({getData, onItemSelected, renderItem}) {

    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        getData()
        .then( (data) => {
            setItemList(data);
        })
    }, [])

        
    

function    renderItems(arr){
            return arr.map((item) => {

               const {id} = item;

               const label = renderItem(item);
                return (
                <li
                key={id} 
                className="list-group-item"
                onClick={() =>onItemSelected(id)}
               >
                {label}
               </li>
               )
            })
        }


            if (!itemList) {
                return <Spinner/>
            }

            const items = renderItems(itemList);

            return (
                <ul className="item-list list-group">
                    {items}
                </ul>
            );
    }

ItemList.propTypes ={
    onItemSelected: PropTypes.func
}

