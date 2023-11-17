import styles from "./session-localstorage.module.scss";

function SessionLocalStorage(){
    return(
        <div className={styles.div}>
            <div>
                <h1>Session Storage・Local Storage・Cookiesの違い</h1>

                {/* session storageとは */}
                <section>
                    <h2>【Session Storageとは】</h2>
                    <ul>
                        <li>ウェブブラウザのタブが開かれている間だけデータを保存する仕組み</li>
                        <li>タブを閉じると保存されたデータは消去される</li>
                        <li>同じタブ内であればデータを共有することができるが、別のタブではデータが分離される</li>
                    </ul>
                </section>

                {/* Local Storageとは */}
                <section>
                <h2>【Local Storageとは】</h2>
                <ul>
                    <li>ウェブブラウザのタブを閉じてもデータを保存し続ける仕組み</li>
                    <li>異なるタブ間でデータが共有される</li>
                </ul>
                </section>

                {/* Cookiesとは */}
                <section>
                <h2>【Cookiesとは】</h2>
                <ul>
                    <li>ウェブブラウザに保存される小さなテキストデータ</li>
                    <li>有効期限を設定することができ、指定した有効期限までデータが保持される</li>
                </ul>
                </section>

                <section>
                    <h2>【まとめ】</h2>
                    <ul>
                        <li>【SessionStorage】: 一時的なデータの保存に適しており、ページ間での情報の共有が不要な場合</li>
                        <li>【LocalStorage】: 永続的なデータの保存が必要で、異なるタブ間でデータの共有が不要な場合</li>
                        <li>【Cookies】: 有効期限を設定して永続的なデータの保存と、異なるセッションや異なるドメイン間でデータの共有が必要な場合</li>
                    </ul>

                    <table border="1">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Cookie</th>
                                <th>LocalStorage</th>
                                <th>SessionStorage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>保存容量</td>
                                <td>4KB</td>
                                <td>10MB</td>
                                <td>5MB</td>
                            </tr>
                            <tr>
                                <td>対応ブラウザ</td>
                                <td>HTML4/HTML5</td>
                                <td>HTML5</td>
                                <td>HTML5</td>
                            </tr>
                            <tr>
                                <td>ブラウザのどこで有効か</td>
                                <td>どこでも</td>
                                <td>どこでも</td>
                                <td>同じタブ内</td>
                            </tr>
                            <tr>
                                <td>有効期限</td>
                                <td>任意設定</td>
                                <td>基本は消えない</td>
                                <td>タブを閉じたとき</td>
                            </tr>
                            <tr>
                                <td>保存される場所</td>
                                <td>ブラウザとサーバー</td>
                                <td>ブラウザのみ</td>
                                <td>ブラウザのみ</td>
                            </tr>
                            <tr>
                                <td>HTTPリクエストで送信</td>
                                <td>される</td>
                                <td>されない</td>
                                <td>されない</td>
                            </tr>
                        </tbody>

                    </table>
                </section>

            </div>
        </div>
    )
}
export default SessionLocalStorage