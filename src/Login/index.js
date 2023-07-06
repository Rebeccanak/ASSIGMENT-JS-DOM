import React, {useState} from "react";
import './style.css'



const Login = () =>{
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('')

    console.log({username})
    console.log({password})

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        try{
            const response = await fetch('https://dummyjson.com/auth/login',{
                method: 'POST',
                headers:{
                'content-Type': 'application/json'
            
                },
                body: JSON.stringify(data)

            });
            const result = await response.json();
            console.log({result})  

    }
    catch(error){
        console.log(error.message)
    }

   
    }
    return(
         <div>
           <form className="form" onSubmit={handleSubmit}>

            <h1>Login</h1>
            <input placeholder="Enter username" type="text"
            onChange={(e)=>{setUserName(e.target.value)}}
            />
            <br/>
            <br/>

            <input placeholder="Enter password" type="text"
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br/>
            <br/>
            <button type="submit">Login</button>

           </form>


         </div>
    )
};
export default Login