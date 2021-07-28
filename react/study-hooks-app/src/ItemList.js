import React from 'react'

export default function ItemList({getItems}){

    const [items, setItems] = useState([]) 

    useEffect( () => {

    }, [getItems])

    return(
        <ul>
         { items.map(i => <li key={i}>{i}</li>) }
         </ul>
    )
}