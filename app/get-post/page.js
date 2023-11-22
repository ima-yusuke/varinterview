import styles from "./get-post.module.scss";

function GetPost(){
    return(
        <div className={styles.div}>
            <div>
                <h1>GetとPostとは</h1>
                <p>※クライアントとサーバーがやり取りする場合、<b>HTTP</b>で通信を行う。HTTPにはいくつかの仕様が取り決められており、GETとPOSTというのはその仕様で取り決められた、HTTPメソッドの一部のことを指している</p>
                <p>※クライアントからサーバへの要求することを<b>リクエスト</b></p>
                <p>※サーバからブラウザへ応答することを<b>レスポンス</b></p>
                <p>※<b>リクエストパラメーター</b>:皆さんのパソコンからサーバーに送るデータのこと(ログイン画面に入力するメールアドレスやパスワードや注文画面に入力する名前や住所などの個人情報など) GetとPostの違いはサーバーへのリクエストパラメーターの送り方にある</p>

                {/* Getとは */}
                <section>
                    <h2>【Getとは】</h2>
                    <ul>
                        <li>値をURLにくっつけてサーバに送る方法</li>
                        <li>URLの後ろに渡す値が表示される</li>
                        <li>サーバーからデータの取得を目的とする</li>
                    </ul>
                </section>

                {/* Postとは */}
                <section>
                    <h2>【Postとは】</h2>
                    <ul>
                        <li>値を見えないところにくっつけてサーバに送る方法</li>
                        <li>URLの後ろにはくっついておらずPOSTメソッドの方が安全</li>
                        <li>サーバーにデータを送信する目的で使用</li>
                    </ul>
                </section>

                <section>
                    <h2>【GET/POSTはどのように使い分ける?】</h2>
                    <ul>
                        <li>画面表示のために必要なパラメーターは「GET」<br></br>例:表示したい商品や動画のID、ページ番号など</li>
                        <li>ユーザーが画面に入力して送信するパラメーターは「POST」<br></br>例:ログインIDや個人情報など</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}
export default GetPost