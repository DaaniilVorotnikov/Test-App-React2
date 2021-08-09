import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainDate from './MainDate';
import Cities from './Cities.json';


function ContainerReg (){

  
  const cityList = Cities.map((Cities) => Cities.name) 
  const gender = ['Мужской', 'Женский']

  const nameCheck ={
    nameData:{
    name: {required:true, maxLength: 15, pattern:/[А-Яа-я]{3}/}
    },
    date:{
    day:   {required:true, min: 0, max: 31,  maxLength: 2},
    month: {required:true, min: 0, max: 12, maxLength: 2},
    year1: {required:true, min: 1900, max: 2007, maxLength: 4, pattern:/[0-9]{3}/},
    year2: {required:true, min: 1900, max: 2021, maxLength: 4, pattern:/[0-9]{3}/}
    },
    passportData:{
      seria: {required:true, maxLength: 4, pattern:/[0-9]{3}/ },
      numberP: {required:true, maxLength: 6, pattern:/[0-9]{3}/ },
      dataR: {required:true, maxLength: 10, pattern:/[0-9._%+-]{3}/ },
      beenInsm: {required:true, maxLength: 25, pattern:/[А-Яа-я]{3}/ },
      departmentNum: {required:true, maxLength: 7, pattern:/[0-9._%+-]{3}/ }
    }
  }

  const messages = {
    messageNamesDate:{ 
     names: 'Обязательное поле: должно включать в себя кириллицу и содержать не более 15 символов!!!'
  
  },
  dateMessages:{
     day: 'Обязательное поле: в месяце 31 день!!!',
     month: 'Обязательное поле: в году 12 месяцев!!!',
     year: 'Обязательное поле:  Некорректная дата!!!'
     
  },
    messagePasport:{
      series: 'Обязательное поле не более 4х символов, без пробелов!!!',
      number: 'Обязательное поле не более 6ти сиволов, без пробелов!!!',
      data: 'Обязательное поле не более 10ти символов в формате ДД.ММ.ГГГГ !!!',
      beenInsume: 'Обязательное поле не боее 25 символов!!!',
      department: 'Обязательное поле не более 7 символов, формат: ***-*** !!!'
    } 
  }

    return( 

      <div className="App">
      <header className="App-header">
      <div className="container-registration">
      <MainDate messages={messages} nameCheck={nameCheck} list={cityList} gender={gender}/>
      </div>
   </header>
   </div>
   
    );
 
  }
  
export default ContainerReg;