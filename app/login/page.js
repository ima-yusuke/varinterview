"use client";
import { useState } from "react";
import styles from "./login.module.scss";
import axios from "axios";

function Login(){

    const [formValues,setFormValues] = useState({email:"",pass:""})

   

    const loginmethod=(e)=>{
        e.preventDefault();
        // const formData = new FormData(e.target);
        axios.post("http://localhost:8080/login",{"pass":"testtest"})
    }

    const handleChange =(e)=>{
        const {name,value} = e.target; 
        setFormValues({...formValues,[name]:value})
    }


    return(
        <>
            <h1>Login</h1>    

            <form className={styles.form} onSubmit={loginmethod} method="POST">
                <input placeholder="Email" type="email" name="email" required="required" onChange={(e)=>handleChange(e)}></input>
                <input placeholder="Password" type="password" name="pass" required="required" onChange={(e)=>handleChange(e)}></input>

                <aside>
                    <a>登録</a>
                    <button type="submit">ログイン</button>
                </aside>
            </form>        
        </>
    )
}
export default Login