"use client";
import { useState } from "react";
import styles from "./login.module.scss";
import axios from "axios";

function Login(){

    // Inputに入力した値を保存する場所
    const [formValues,setFormValues] = useState();

    // Inputで入力される度に呼び出され値を更新し保存する
    const handleChange =(e)=>{
        const {name,value} = e.target; 
        setFormValues({...formValues,[name]:value})
    }

    // バックエンドにInputで入力した値を送信
    // ※文字としてしか送信できないためJSON.stringifyで文字に変換し送信
    const loginmethod=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/login",JSON.stringify(formValues))
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