import React,{useState, useEffect, useRef} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from "react-hook-form";


function Reload(){
 return window.location.reload();
}



function MainDate(props) {

    const colorblack = {color:"black"};
    const nameCheck = props.nameCheck; 
    const messages = props.messages;

    const {register, handleSubmit, formState:{errors},  watch} = useForm( {mode:'onBlur'});
    const onSubmit = data => console.log('Отправлено', data);

 
     let yearsB = watch('yearsB', ' ');
     let yearsG = watch('yearsG', ' ');
    
     const list = props.list;
     console.log(list)


     const minus = yearsG - yearsB;


    if (yearsB.length == 4 && yearsG.length == 4 && minus != 14 && minus != 21 && minus != 45){
      const errorText = 'Паспортные данные не валидны!'
      alert(errorText)
      Reload(); 
    }
    

    return (

      
    <form onSubmit = {handleSubmit(onSubmit)}>

          <div className="name-enter">


           <h5 style={colorblack}>Общие данные:</h5>
          
            <h6 style={colorblack}> Имя: </h6>    
            <input className="form-control form-control-sm" {...register('name', nameCheck.nameData.name)} />
            {errors.name && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}
            
            <h6 style={colorblack}> Фамилия: </h6>
            <input className="form-control form-control-sm"{...register('lastname', nameCheck.nameData.name )} />
            {errors.lastname && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}
            
            <h6 style={colorblack}> Отчество: </h6>
            <input className="form-control form-control-sm"{...register('patronymic', nameCheck.nameData.name)}/>
            {errors.patronymic && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}
           
            <h6 style={colorblack}> Дата рождения: </h6>
            {errors.dayB && <h6 className="error-massage-size3">{messages.dateMessages.day}</h6>}
            <input className="input-size-3"{...register('dayB', nameCheck.date.day)} />
            {errors.monthB && <h6 className="error-massage-size3">{messages.dateMessages.month}</h6>}
            <input className="input-size-3"{...register('monthB', nameCheck.date.month)} />
            {errors.yearsB && <h6 className="error-massage-size3">{messages.dateMessages.year}</h6>}
            <input className="input-size-3"{...register('yearsB', nameCheck.date.year1)}/>
           
            <br/> 
            <br/> 
            <br/>

            <h6 style={colorblack}> <span className="down-marker">Пол:</span> 
            <select className="down-menu" name="gender"  {...register}>
            <option value="female">Мужской</option>
            <option value="male">Женский</option>
            </select>
            </h6>

            <h6 style={colorblack}> Место рождения:
            <select className="down-menu2" name="gender"  {...register}>
            {

            list.map((city, index) => <option key={index} value="city">{city}</option>)

            }
            </select>
            </h6>
            </div>
    

            <div className="pasport-date">
            
            <h5 style={colorblack}>Паспортные данные:</h5>

            <label  className="title-style" style={colorblack}> Серия: </label >
            <input className="input-size"{...register('pasportSeria', nameCheck.passportData.seria)}/>
            <br/> 
            {errors.pasportSeria && <h6 className="error-massage-size">{messages.messagePasport.series}</h6>}
            <br/>

            <label  className="title-style" style={colorblack}> Номер: </label >
            <input className="input-size"{...register('pasportNumber', nameCheck.passportData.numberP)} />
             <br/> 
            {errors.pasportNumber && <h6 className="error-massage-size">{messages.messagePasport.number}</h6>}
             <br/>

            <label  className="font-sizer" style={colorblack}> Дата выдачи: </label >
            {errors.dayG && <h6 className="error-massage-size4">{messages.dateMessages.day}</h6>}
            <input className="input-size-3"{...register('dayG', nameCheck.date.day)} />
            {errors.monthG && <h6 className="error-massage-size4">{messages.dateMessages.month}</h6>}
            <input className="input-size-3"{...register('monthG', nameCheck.date.month)} />
            {errors.yearsG && <h6 className="error-massage-size4">{messages.dateMessages.year}</h6>}
            <input className="input-size-3"{...register('yearsG', nameCheck.date.year2)} />
             <br/> 
             <br/>

            <label  className="title-style" style={colorblack}> Был выдан: </label >
            <input className="input-size"{...register('beenIssume', nameCheck.passportData.beenInsm)} />
            <br/> 
            {errors.beenIssume && <h6 className="error-massage-size">{messages.messagePasport.beenInsume}</h6>}
            <br/>

            <label  className="title-style" style={colorblack}> Код подразделения: </label>
            <input className="input-size-2"{...register('departmentId', nameCheck.passportData.departmentNum)} />
            <br/> 
            {errors.departmentId && <h6 className="error-massage-size2">{messages.messagePasport.department}</h6>}
            <br/> 
            </div>

            <div className="button-position">
            <input className="btn btn-dark" type= "submit" />
            </div>

            </form>
            
            );
       }
export default MainDate;