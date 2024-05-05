import React, { useState } from "react";
import "./UserLogin.css"; 

const UserLogin = ({onLogin}) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPswrd, setEnteredPswrd] = useState('');
    const [userIsValid, setUserIsValid] = useState([]);
    const [pswrdIsValid, setPswrdIsValid] = useState([]);
    const [formIsValid, setFormIsValid] = useState(false);

    const emailHandler=(event)=>{
        setEnteredEmail(event.target.value);
        setFormIsValid(event.target.value.includes('@') && enteredPswrd.trim().length > 6);

    }
    const paswdHandler=(event)=>{
        setEnteredPswrd(event.target.value);
        setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes('@'));
    }
    const validUserHandler=()=>{
      setUserIsValid(enteredEmail.includes('@'));
    }
    const validPswrdHandler=()=>{
      setPswrdIsValid(enteredPswrd.trim().length > 6)

    }
    
    const submitHandler=(event)=>{
        event.preventDefault();
       if(!formIsValid){  /*or if(!enteredEmail || !enteredPswrd || !enteredEmail.includes('@') || enteredPswrd.trim().length <=6) */
        return;
       }
        onLogin(true);
        console.log(enteredEmail,enteredPswrd);
        setEnteredEmail('');
        setEnteredPswrd('');
    }
    
  return (
    <div>
      <h1>Typical page</h1>
    <div className="login-container"> 
      <form className="login-form" onSubmit={submitHandler}> 
        <label htmlFor="email">E-mail</label>
        <input 
        type="text" 
        id="email"
         value={enteredEmail} 
         onChange={emailHandler}
         onBlur={validUserHandler}/> 
        
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        id="password" 
        value={enteredPswrd} 
        onChange={paswdHandler}
        onBlur={validPswrdHandler}/>
        
        <button 
        type="submit" 
        className={`login-button ${!formIsValid ? 'blurred' : ''}`}
         disabled={!formIsValid}>Login</button>
      </form>
    </div>
    </div>
  );
};

export default UserLogin;
