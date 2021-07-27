import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from "react-hook-form";

function MainDate(props) {

    const {register, handleSubmit, formState: {errors}} = useForm({mode:'onChange'});
    const colorblack = {color:"black"};
    const nameCheck = props.nameCheck; 
    const onSubmit = data => console.log('Отправлено', data);

    const messages = props.messages;
     
 
    return (
    <form onSubmit = {handleSubmit(onSubmit)}>
           <div className="name-enter">


           <h5 style={colorblack}>Общие данные:</h5>

           <InputField 
           label={"Имя:"} 
           registerItem={{...register('name', nameCheck.nameData.name)}}
           errorItem={{errors.name && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}}
           />

          <InputField 
           label={"Фамилия:"} 
           registerItem={{...register('name', nameCheck.nameData.name)}}
           errorItem={{errors.name && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}}
           />
          


            <h6 style={colorblack}> Имя: </h6>    
            <input className="form-control form-control-sm"
              {...register('name', nameCheck.nameData.name)}
            />
            {errors.name && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}
            

            <h6 style={colorblack}> Фамилия: </h6>
            <input className="form-control form-control-sm"
              {...register('lastname',nameCheck.nameData.name )} 
            />
            {errors.lastname && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}
            
            <h6 style={colorblack}> Отчество: </h6>
            <input className="form-control form-control-sm"
              {...register('patronymic', nameCheck.nameData.name)} 
            />
            {errors.patronymic && <h6 className="error-massage-size">{messages.messageNamesDate.names}</h6>}
           
            <h6 style={colorblack}> Возраст: </h6>
            <input className="form-control form-control-sm"
              {...register('age', nameCheck.nameData.age)} 
            />
           {errors.age && <h6 className="error-massage-size">{messages.messageNamesDate.olds}</h6>}

            <br/> 

            <h6 style={colorblack}> <span className="down-marker">Пол:</span> 
            <select className="down-menu" name="gender"  {...register}>
            <option value="female">Мужской</option>
            <option value="male">Женский</option>
            </select>
            </h6>

            <h6 style={colorblack}> Место рождения:
            <select name="gender"  {...register}>
            <option value="city1">г.Москва</option>
            <option value="city2">г.Санкт-Петербург</option>
            </select>
            </h6>
            </div>


            <div className="pasport-date">

            <label  className="title-style" style={colorblack}> Серия: </label >
            <input className="input-size"
            {...register('pasportSeria', nameCheck.passportData.seria)} 
            />
             <br/> 
            {errors.pasportSeria && <h6 className="error-massage-size">{messages.messagePasport.series}</h6>}
            <br/>

            <label  className="title-style" style={colorblack}> Номер: </label >
            <input className="input-size"
            {...register('pasportNumber', nameCheck.passportData.numberP)} 
            />
             <br/> 
            {errors.pasportNumber && <h6 className="error-massage-size">{messages.messagePasport.number}</h6>}
             <br/>

            <label  className="title-style" style={colorblack}> Дата выдачи: </label >
            <input className="input-size"
            {...register('dateOfIssue', nameCheck.passportData.dataR)} 
            />
             <br/> 
            {errors.dateOfIssue && <h6 className="error-massage-size">{messages.messagePasport.data}</h6>}
             <br/>

            <label  className="title-style" style={colorblack}> Был выдан: </label >
            <input className="input-size"
            {...register('beenIssume', nameCheck.passportData.beenInsm)} 
            />
            <br/> 
            {errors.beenIssume && <h6 className="error-massage-size">{messages.messagePasport.beenInsume}</h6>}
            <br/>

            <label  className="title-style" style={colorblack}> Код подразделения: </label>
            <input className="input-size-2"
            {...register('departmentId', nameCheck.passportData.departmentNum)} 
            />
            <br/> 
            {errors.departmentId && <h6 className="error-massage-size">{messages.messagePasport.department}</h6>}
            <br/> 

            </div>

            <div className="button-position">
            <input className="btn btn-dark" type= "submit" />
            </div>

            </form>

            );
    }
export default MainDate;