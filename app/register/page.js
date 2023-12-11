"use client";
import { useState } from "react";
import styles from "./register.module.scss";
import Link from "next/link";
import axios from "axios";
import Swal from 'sweetalert2'

function Register() {
  // Inputに入力した値を保存する場所
  const [formValues, setFormValues] = useState();

  // Inputで入力される度に呼び出され値を更新し保存する
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // バックエンドにInputで入力した値を送信
  const registermethod =  (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", formValues)
      .then((response) => {
        // 登録完了アラート
        Swal.fire({
          icon: "success",
          title: "登録が完了致しました",
          showConfirmButton: false,
          timer: 2000
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <h1>登録フォーム</h1>

      <form className={styles.form} onSubmit={registermethod} method="POST">
        <input
          placeholder="名字"
          type="text"
          name="fname"
          required="required"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          placeholder="名前"
          type="text"
          name="lname"
          required="required"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          placeholder="Email"
          type="email"
          name="email"
          required="required"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          placeholder="Password"
          type="password"
          name="pass"
          required="required"
          onChange={(e) => handleChange(e)}
        ></input>

        <aside>
          <Link href="../login">ログイン</Link>
          <button type="submit">登録</button>
        </aside>
      </form>
    </>
  );
}
export default Register;
