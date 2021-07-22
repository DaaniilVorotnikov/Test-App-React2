import logo from './logo.svg';
import './App.css';
import {useForm} from "react-hook-form";

function App() {

  const{
    register,
    handleSubmit,
    formState: {errors, submitCount},
    watch
  }=useForm({mode:'onChange'});

  const onSubmit = data => console.log('Отправлено', data);
  const name = watch('name');

  console.log('Имя:' + name);
  console.log(errors);

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit = {handleSubmit(onSubmit)}>
          <h2 style={{color:"white", backgroundColor: "silver"}}>Registration form</h2>
          <input
            {...register('name', {required: true, maxLength: 15})}
          />
          {errors.name && <i>Обязательное поле не более 15 символов!!!</i>}
          <hr/>
          <input
            {...register('password')} 
          />
          <hr/>
          <input type= "submit" />
       {submitCount}
        </form> 
      </header>
    </div>
  );
}

export default App;
