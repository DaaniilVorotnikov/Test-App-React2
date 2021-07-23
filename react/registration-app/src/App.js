import logo from './logo.svg';
import './App.css';
import {useForm} from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const{register, handleSubmit, formState: {errors, submitCount}, watch}=useForm({mode:'onChange'});
  const onSubmit = data => console.log('Отправлено', data);
  const name = watch('name');

  console.log('Имя:' + name);
  console.log(errors);
  console.log({submitCount});

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-registration">
        <div className ="registration-title">Форма регистрации</div>
        <form onSubmit = {handleSubmit(onSubmit)}>
        <div className="name-enter">
        <h5 style={{color:"black"}}>Общие данные:</h5>
          <h6 style={{color:"black"}}> Имя: </h6>    
          <input className="form-control form-control-sm"
            {...register('name', {required: true, maxLength: 15, pattern:/[А-Яа-я]{3}/})}
          />
          <h6>{errors.name && 'Обязательное поле: должно включать в себя кириллицу и содержать не более 15 символов!!!'}</h6>
          
          <h6 style={{color:"black"}}> Фамилию: </h6>
          <input className="form-control form-control-sm"
            {...register('lastname', {required:true, maxLength: 15, pattern:/[А-Яа-я]{3}/})} 
          />
          <h6>{errors.lastname && <i>Обязательное поле не более 15 символов!!!</i>}</h6>
          
          <h6 style={{color:"black"}}> Отчество: </h6>
          <input className="form-control form-control-sm"
            {...register('patronymic', {required:true, maxLength: 15, pattern:/[А-Яа-я]{3}/ })} 
          />
          <h6>{errors.patronymic && <i>Обязательное поле не более 15 символов!!!</i>}</h6>
          <h6 style={{color:"black"}}> Возраст: </h6>
          <input className="form-control form-control-sm"
            {...register('age',{required:true, min:14, max: 150})} 
          />
          <br/>
          <h6>{errors.patronymic && <i>Обязательное поле(некорректные данные)!!!</i>}</h6>
          <h6 style={{color:"black"}}> <span className="down-marker">Пол:</span> 
          <select className="down-menu" name="gender"  {...register}>
          <option value="female">Мужской</option>
          <option value="male">Женский</option>
          </select>
          <br/>Место рождения:
          <select name="gender"  {...register}>
          <option value="female">г.Москва</option>
          <option value="male">г.Санкт-Петербург</option>
          </select>
          </h6>
          </div>
          <div className="pasport-date">
          <label  className="title-style" style={{color:"black"}}> Серия: </label >
          <input className="input-size"
            {...register('pasportSeria',{required:true, maxLength: 4, pattern:/[1-9]{3}/ })} 
          />
          <br/>
          <label  className="title-style" style={{color:"black"}}> Номер: </label >
          <input className="input-size"
            {...register('pasportNumber',{required:true, maxLength: 6, pattern:/[1-9]{3}/ })} 
          />
          <br/>
          <label  className="title-style" style={{color:"black"}}> Дата выдачи: </label >
          <input className="input-size"
            {...register('dateOfIssue',{required:true, maxLength: 6, pattern:/[1-9]{3}/ })} 
          />
          <br/>
          <label  className="title-style" style={{color:"black"}}> Был выдан: </label >
          <input className="input-size"
            {...register('beenIssume',{required:true, maxLength: 6, pattern:/[А-Яа-я]{3}/ })} 
          />
          <br/>
          <label  className="title-style" style={{color:"black"}}> Код подразделения: </label>
          <input className="input-size-2"
            {...register('beenIssume',{required:true, maxLength: 6, pattern:/[1-9]{3}/ })} 
          />
          </div>
          <br/>
          <div className="button-position">
          <input className="btn btn-dark" type= "submit" />
          </div>
        </form> 
        </div>
      </header>
    </div>
  );
}

export default App;
