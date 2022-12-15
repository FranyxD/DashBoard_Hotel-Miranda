import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { response } from 'express';
import MyContext from '../components/Context';

const LogIn = ({login}) => {

    const myContext = useContext(MyContext);
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [show, setShow] = useState(false);
   const [success, setSuccess] = useState(false)

  useEffect(() => {
    localStorage.setItem('login', String(myContext.login));
  }, [myContext.login]);

   const toggleDialog = () => {
   setSuccess(!success)
   //setTimeout(() => setSuccess(!success), 3000)
   };
   

   
   const iniciar = async (e) => {
        e.preventDefault();
        const users = await axios('http://localhost:3010/users');
        const data = await users.data;
        data.sort((a,b) => b.id - a.Id)
        if(data.some(item => item.name == name && item.password == password)) {
            console.log('match')
            toggleDialog();
            myContext.login = 'true';
            
        }
        else {
            alert("Error no coinciden las credenciales")
        }
        
   }

   const crear = async (e) => {
     e.preventDefault();
     const usersCreated = await axios("http://localhost:3010/users");
     const data = await usersCreated.data;
     const checkDuplicated = data.every((item) => item.name !== name);
     console.log(checkDuplicated)

     if (!checkDuplicated){
        console.log("Already exist");
     } else {
        setSuccess(true)
       const users = await axios.post("http://localhost:3010/users", {
           id: (resp) => resp.data.length,
           name: name,
           password: password,
         })
         .then((resp) => {
           console.log(resp.data);
         })
         
         .catch((error) => {
           console.log(error);
         });
         
     }
     
   };

  
    
    return (
        <div className='dark:bg-black dark:text-white'>
            {
                show == false ? 
                
                <div className="form">
                    <dialog className='backdrop:bg-red-600 w-[50%] h-[50%]' open={success ? true : false}>
                        <h1>Log in Succesfull</h1>
                        <button onClick={() => window.location.reload()}>OK</button>
                    </dialog>
                    <form id='iniciar' onSubmit={iniciar} className='flex p-5 flex-col gap-5' action="">
                    <legend>Iniciar Sesion</legend>
                    <label htmlFor="">nombre
                    <input className='border-2' type="text" onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label htmlFor="">Password
                    <input className='border-2' type="text" onChange={(e) => setPassword(e.target.value)} /></label>
                    <span onClick={() => setShow(true)}>Not account created?</span>
                    <button type='submit'>Log in</button>
                    </form>
                
                </div>
                
            :
                <div className="form">
                <dialog className='backdrop:bg-red-600' open={success ? true : false}>
                    <h1>Account created</h1>
                    <button onClick={toggleDialog}>OK</button>
                </dialog>
                <form id='crear' onSubmit={crear} className='flex p-5 flex-col gap-5' action="">
                <legend>Crear Cuenta</legend>
                <label htmlFor="">nombre
                <input className='border-2' type="text" onChange={(e) => setName(e.target.value)}/>
                </label>
                
                 
                <label htmlFor="">Password
                <input className='border-2' type="text" onChange={(e) => setPassword(e.target.value)} /></label>
                <span onClick={() => setShow(false)}>Already created?</span>
                <button type='submit'>Create</button>
                </form>
                
                </div>
            }
        </div>
    )
}

export default LogIn;
