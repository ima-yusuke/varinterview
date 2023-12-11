"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
function Mypage() {
  const [loginUser, setLoginUser] = useState();
  const router = useRouter();

  useEffect(() => {
    // ログインしていない状態でマイページを開こうとするとhomeへ戻る
    if (sessionStorage.getItem("loginUser") == null) {
      router.push("/login");
    } else {
      // ログインしている場合ログインユーザー情報をsessionから取得しloginUserへ保存
      setLoginUser(JSON.parse(sessionStorage.getItem("loginUser")));
    }
  }, []);

  //ログアウト機能でsessionStorageからログを削除しログインページへ移動
  const logOut = () => {
    sessionStorage.removeItem("loginUser");
    router.push("/login");
  };

  return (
    <>
      <h1>{loginUser != null ? `${loginUser.fname} ${loginUser.lname} 様のページ`  : null}</h1>

      <button onClick={logOut}>ログアウト</button>
    </>
  );
}
export default Mypage;
