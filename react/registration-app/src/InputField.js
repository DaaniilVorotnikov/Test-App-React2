import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from "react-hook-form";

function InputField(props){

        const allConst = props.tytleName;
        const fuckYou = allConst.personalDate.registerItem[0]
        console.log(allConst.personalDate.errorItem[0]);

        

    return(
        <div className="name-enter">


        <h5>Общие данные:</h5>

         <h6 > {allConst.personalDate.label[0]}</h6>    
         <input className="form-control form-control-sm" fuckYou/>
         {allConst.personalDate.errorItem[0]}
         


         <h6> <span className="down-marker">Пол:</span> 
         <select className="down-menu" name="gender">
         <option value="female">Мужской</option>
         <option value="male">Женский</option>
         </select>
         </h6>

         <h6> Место рождения:
         <select name="gender">
         <option value="city1">г.Москва</option>
         <option value="city2">г.Санкт-Петербург</option>
         </select>
         </h6>
         </div>

    )
}
export default InputField;