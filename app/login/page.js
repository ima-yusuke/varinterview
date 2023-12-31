"use client";
import { useState } from "react";
import styles from "./login.module.scss";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

function Login(){

    // Inputに入力した値を保存する場所
    const [formValues,setFormValues] = useState();

    // Inputで入力される度に呼び出され値を更新し保存する
    const handleChange =(e)=>{
        const {name,value} = e.target; 
        setFormValues({...formValues,[name]:value})
    }

    const router = useRouter();
    // バックエンドにInputで入力した値を送信
    const loginmethod=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/login",formValues)
        .then(response=>{
            if(response.data.length>0){
                let loginUser = response.data[0];
                // loginUserというキーでログインユーザー情報をsessionstorageに保存
                sessionStorage.setItem("loginUser",JSON.stringify(loginUser))
                router.push("/mypage")
            }else{
                Swal.fire({
                    icon: "error",
                    title: "ログイン失敗",
                    text: "メールアドレスもしくはパスワードが間違っています",
                    // footer: '<a href="#">Why do I have this issue?</a>'
                  });
            };
        })
        .catch((error) => {
            console.log(error.response);
          });
    }


    return(
        <>
            <h1>Login</h1>    

            <form className={styles.form} onSubmit={loginmethod} method="POST">
                <input placeholder="Email" type="email" name="email" required="required" onChange={(e)=>handleChange(e)}></input>
                <input placeholder="Password" type="password" name="pass" required="required" onChange={(e)=>handleChange(e)}></input>

                <aside>
                    <Link href="../register">新規登録</Link>
                    <button type="submit">ログイン</button>
                </aside>
            </form>        
        </>
    )
}
export default Login