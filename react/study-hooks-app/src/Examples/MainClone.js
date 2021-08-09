import React, {useState, useCallback, useEffect, useRef, useMemo} from 'react';
import { useAlert } from './AlertContext';


export default function Main(){
    
    const {toggle} = useAlert()

    return(
        <>
        <h1>Example context</h1>
        <button onClick={toggle}>Show alert</button>
        </>
    )
} 