import './App.css';
import React from 'react';
import Main from './Main';
import Alert from './Alert';
import {AlertProvider} from './AlertContext';


function UseContext() {



  return (
    <div>
    <AlertProvider>
    <Main />
    <Alert />
    </AlertProvider>
    </div>
  );
}

export default UseContext;