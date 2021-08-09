import React, { useContext, useReducer} from 'react';

export const AlertContext = React.createContext()

export const useAlert =() =>{
    return useContext(AlertContext)
}

const SHOW = 'show';
const HIDE = 'hide';

const reducer = (state, action) =>{
    switch (action.type){
        case SHOW: return{...state, visible: true}
        case HIDE: return{...state, visible: false}
        default: return state
    }

}

export const AlertProvider = ({children}) =>{
   // const [alert, setAlert] = useState(false)

   // const toggle = () => setAlert(prev => !prev)

   const [state, dispatch] = useReducer(reducer,{
    visible: false
   })

   const show = () => dispatch({type: SHOW})
   const hide = () => dispatch({type: HIDE})

    return(
        <AlertContext.Provider value={{
            visible: state.visible,
            show, hide
        }}>
            {children}
        </AlertContext.Provider>
    )
}