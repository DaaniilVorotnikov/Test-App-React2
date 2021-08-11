import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from "react-hook-form";



function MainDate({nameCheck, messages, list, gender}) {

  function createCustomer(m) {

    console.log(m)

  const{
    first_name, last_name, patronymic, birth_day, birth_month , 
    birth_year, gender, city, pasport_seria, pasport_number,
    day_issue , month_issue, year_issue, been_issumed, department_id
       } = m;
 
    fetch(`http://localhost:3001/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name, last_name, patronymic, birth_day, birth_month , 
        birth_year, gender, city, pasport_seria, pasport_number,
        day_issue , month_issue, year_issue, been_issumed, department_id
      }),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log(data);
      });
  }


    const colorblack = {color:"black"}; 
   
    let placeholder;
          
    const {register, handleSubmit, formState:{errors},  watch, setValue } = useForm( {mode:'onBlur'});
    const onSubmit = meassage => createCustomer(meassage);
  

    let yearsB = watch('birth_year', ' ');
    let yearsG = watch('year_issue', ' ');
    const minus = yearsG - yearsB;

     const yearNow = 2021;
     const age = yearNow - yearsB;

     function message(){

      placeholder = 'Паспорт недействителен!!!'
      setValue('birth_year', '', { shouldValidate: true })
      setValue('year_issue', '', { shouldValidate: true })
    
    }

   
   if ( yearsB.length == 4 && yearsG.length == 4 && minus != 14 && minus != 20 && minus != 45 ){

    message()

    }
   else if(yearsB.length == 4 && yearsG.length == 4 && age >= 20 && minus == 14){

    message()

   }
   else if(yearsB.length == 4 && yearsG.length == 4 && age >= 45 && minus == 20){

    message()
    
   }
  

    return (

      
    <form onSubmit = {handleSubmit(onSubmit)}>

          <div className="name-enter">


           <h5 style={colorblack}>Общие данные:</h5>
          
            <h6 style={colorblack}> Имя: </h6>    
            <input className="form-control form-control-sm" {...register('first_name', nameCheck.nameData.name)} />
            {errors.first_name && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}
            
            <h6 style={colorblack}> Фамилия: </h6>
            <input className="form-control form-control-sm"{...register('last_name', nameCheck.nameData.name )} />
            {errors.last_name && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}
            
            <h6 style={colorblack}> Отчество: </h6>
            <input className="form-control form-control-sm"{...register('patronymic', nameCheck.nameData.name)}/>
            {errors.patronymic && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}
           
            <h6 style={colorblack}> Дата рождения: </h6>
            {errors.birth_day && <h6 className="error-massage-size3">{messages.dateMessages.day}</h6>}
            <input className="input-size-3"{...register('birth_day', nameCheck.date.day)} />
            {errors.birth_month && <h6 className="error-massage-size3">{messages.dateMessages.month}</h6>}
            <input className="input-size-3"{...register('birth_month', nameCheck.date.month)} />
            {errors.birth_year && <h6 className="error-massage-size3">{messages.dateMessages.year} </h6> || <h6 className="error-massage-size3">{placeholder} </h6>}
            <input className="input-size-3"{...register('birth_year', nameCheck.date.year1)} />
           
            <br/> 
            <br/> 
            <br/>

            <h6 style={colorblack}> <span className="down-marker">Пол:</span> 
            <select className="down-menu" name="gender" {...register("gender")}>
            {
             gender.map((gender, index) => <option key={index}>{gender}</option>)
            }
            </select>

            </h6>

            <h6 style={colorblack}> Место рождения:
            <select className="down-menu2" name="city"  {...register("city")}>
            {

            list.map((city, index) => <option key={index}>{city}</option>)

            }
            </select>

            </h6>

            </div>
    

            <div className="pasport-date">
            
            <h5 style={colorblack}>Паспортные данные:</h5>

            <label  className="title-style" style={colorblack}> Серия: </label >
            <input className="input-size"{...register('pasport_seria', nameCheck.passportData.seria)}/>
            <br/> 
            {errors.pasport_seria && <h6 className="error-massage-size">{messages.messagePasport.series}</h6>}
            <br/>

            <label  className="title-style" style={colorblack}> Номер: </label >
            <input className="input-size"{...register('pasport_number', nameCheck.passportData.numberP)} />
             <br/> 
            {errors.pasport_number && <h6 className="error-massage-size">{messages.messagePasport.number}</h6>}
             <br/>

            <label  className="font-sizer" style={colorblack}> Дата выдачи: </label >
            {errors.day_issue && <h6 className="error-massage-size4">{messages.dateMessages.day}</h6>}
            <input className="input-size-3"{...register('day_issue', nameCheck.date.day)} />
            {errors.month_issue && <h6 className="error-massage-size4">{messages.dateMessages.month}</h6>}
            <input  className="input-size-3"{...register('month_issue', nameCheck.date.month)} />
            {errors.year_issue && <h6 className="error-massage-size4">{messages.dateMessages.year}</h6>|| <h6 className="error-massage-size3">{placeholder} </h6>}
            <input className="input-size-3"{...register('year_issue', nameCheck.date.year2)} />
             <br/> 
             <br/>

            <label  className="title-style" style={colorblack}> Был выдан: </label >
            <input className="input-size"{...register('been_issumed', nameCheck.passportData.beenInsm)} />
            <br/> 
            {errors.been_issumed && <h6 className="error-massage-size">{messages.messagePasport.beenInsume}</h6>}
            <br/>

            <label  className="title-style" style={colorblack}> Код подразделения: </label>
            <input className="input-size-2"{...register('department_id', nameCheck.passportData.departmentNum)} />
            <br/> 
            {errors.department_id && <h6 className="error-massage-size2">{messages.messagePasport.department}</h6>}
            <br/> 
            </div>

            <div className="button-position">
            <input className="btn btn-dark" type= "submit" />
            </div>

            </form>
            
            );
       }
       export default MainDate;