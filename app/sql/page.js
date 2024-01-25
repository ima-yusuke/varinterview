import TableComponent from "../components/table-component/table-component";
import H2TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";
import styles from "./sql.module.scss";

function Sql() {
  let testdata = [
    [1, 100],
    [2, 250],
  ];

  function test() {
    testdata.map((value) => {
      value.map((va) => {
        console.log(va);
      });
    });
  }

  test();

  return (
    <>
      <h1>SQL(Structured Query Language)</h1>

      <section>
        {/* データベースとは */}
        <article>
          <H2TitleComponent h2Title="データベースとは"></H2TitleComponent>
          <p>
            データベースは<b>データベース管理システム(DBMS)</b>
            というソフトウェアによって管理されている。実際にデータをしまったり取り出すのはDBMSの仕事。
            <br></br>
            <b>
              ※ソフトウェア・・・コンピュータに対して命令を出すプログラム(コンピュータを動かすのに必要な命令の流れ)。
            </b>
            複数のプログラムが集まって1つのソフトウェアを形成している。
          </p>
          <aside>
            <H5TitleComponent h5Title="データベースの種類"></H5TitleComponent>
            <ul>
              <li>階層型</li>
              <li>ネットワーク型</li>
              <li>
                <b>リレーショナル型</b>
                <br></br>※最も広く利用されている
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="クエリ"></H5TitleComponent>
            <p>データベース管理システムに対して要求を出すこと</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="サブクエリ"></H5TitleComponent>
            <p>
              SELECT * FROM tbl_cake WHERE price {`>`}={" "}
              <b>(SELECT AVG(price) FROM tbl_cake);</b>
            </p>
            <p>
              <b>赤字</b>
              がサブクエリ。黒字がメインクエリ。※平均額を算出し、この額以上のデータを抽出。
            </p>
            <p>
              <b>※サブクエリは()でくくる。</b>
            </p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="PRIMARY KEY （主キー）"></H5TitleComponent>
            <p>
              テーブルの中で『行』を特定するための『列』のこと。例えば出席番号があれば同じ名前の生徒がいても区別できるイメージ。
            </p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="連結キー"></H5TitleComponent>
            <p>
              主キーは1つのテーブルに1つしか設定できないが複数の列を組み合わせて1つの主キーとすることもできる。これを連結キーという。1つの列だけではデータを特定できないときに便利。
            </p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="データ型"></H5TitleComponent>
            <ul>
              <li>DATE・・・日付(YYYY-MM-DD)</li>
              <li>TIME・・・時刻(HH-MM-SS)</li>
              <li>
                バイナリ型・・・画像や音声などテキストや数値で表せないデータのことをバイナリデータという
              </li>
            </ul>
          </aside>
        </article>

        {/* SQLの基礎 */}
        <article>
          <H2TitleComponent h2Title="SQLの基礎"></H2TitleComponent>

          <aside>
            <H5TitleComponent h5Title="ORDER BY"></H5TitleComponent>
            <p>指定した列を基準にデータを並び替えて表示できる。</p>
            <ul>
              <li>ORDER BY 列名 ASC ・・・昇順に並び替える</li>
              <li>ORDER BY 列名 DESC ・・・降順に並び替える</li>
            </ul>
            <p>【さらに複雑な並び替えの場合】</p>
            <p>
              <b>ORDER BY price,code;</b>
              <br></br>
              この場合、まずはprice列を基準に昇順で並び替え、値が等しい場合はcode列を基準に昇順で並び替える。
            </p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="重複したデータを削除"></H5TitleComponent>
            <p>
              <b>DISTINCT</b>
              を使うと、指定した列にある重複したデータを取り除いて表示できる。複数の列を指定することもでき、その場合は列名をカンマで区切る。
            </p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="EXISTS"></H5TitleComponent>
            <ul>
                <li><b>サブクエリによって取り出されたデータが1つでもあればTRUE、なければFALSEを返す。</b></li>
                <li><b>TRUEの場合はメインクエリが実行されるがFALSEの場合は実行されない。</b></li>
                <li>SELECT * FROM table_A WHERE <b>EXISTS</b> (SELECT * FROM table_A WHERE no = 5);<br></br>※table_Aのno列に5があれば、table_Aの全てのデータを表示する。</li>
                <li>EXISTSとは逆の意味を持つ<b>NOT EXISTS</b>もある。</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="ストアドプロシージャ"></H5TitleComponent>
            <ul>
                <li>SQL文をプログラムとしてまとめて保存する仕組み</li>
                <li>データベースに対して複雑な操作をするときには、複数のSQL文で問い合わせしなければならないこともある。このようなときのために、データベースに対する一連の操作をプログラムとしてまとめてRDBMSに保存する便利な仕組み</li>
            </ul>
          </aside>
        </article>

        {/* テーブルの結合 */}
        <article>
          <H2TitleComponent h2Title="テーブルの結合"></H2TitleComponent>
          <p>
            複数のテーブルやビューを連結して、離れた場所にあるデータを一度に扱えるようにすることを『結合』といい5種類ある。
          </p>

          <aside>
            <H5TitleComponent h5Title="①交差結合"></H5TitleComponent>
            <ul>
                <li>複数のテーブル（またはビュー）にある全ての行を単純に結合する方法。</li>
                <li>交差結合するには<b>CROSS JOIN</b>を使う</li>
                <li>SELECT * FROM table_A <b>CROSS JOIN</b> table_B</li>
            </ul>
            <aside className={styles.tableAside}>
              <TableComponent
                tableTitle={"table_A"}
                theadData={["id", "price"]}
                tbodyData={[
                  [1, 100],
                  [2, 250],
                ]}
              ></TableComponent>
              <TableComponent
                tableTitle={"table_B"}
                theadData={["id", "name"]}
                tbodyData={[
                  [1, "鉛筆"],
                  [2, "消しゴム"],
                ]}
              ></TableComponent>
            </aside>
            <p>上記2つのテーブルをCROSS JOINすると、、、</p>
            <TableComponent
                tableTitle={"CROSS JOIN後のテーブル"}
                theadData={["id", "price","id","name"]}
                tbodyData={[
                  [1, 100,1,"鉛筆"],
                  [2, 250,1,"鉛筆"],
                  [1, 100,2,"消しゴム"],
                  [2, 250,2,"消しゴム"]
                ]}
              ></TableComponent>
          </aside>

          <aside>
            <H5TitleComponent h5Title="②内部結合"></H5TitleComponent>
            <ul>
                <li>交差結合の結果から指定した列の値が一致するデータのみを取り出す方法。</li>
                <li>結合したいテーブルどうしを<b>INNER JOIN</b>でつなぎ、<b>ON</b>以下でどの列を基準にデータを一致させるかを指定する。</li>
                <li>SELECT *(取り出す列名) FROM table_A <b>INNER JOIN</b> table_B <b>ON</b> id = no;<br></br>※この場合<b>idとnoが一致する行だけを取り出す。</b></li>
            </ul>
            <aside className={styles.tableAside}>
            <TableComponent tableTitle={"table_A"} theadData={["id", "name"]} tbodyData={[[1,"chibi"],[2,"ran"],[3,"alex"]]}></TableComponent>
            <TableComponent tableTitle={"table_B"} theadData={["no", "age"]} tbodyData={[[1,16],[2,7],[4,14]]}></TableComponent>
            </aside>
            <p><b>※今回はON id = noとしたのでidとnoが一致したデータのみ抽出している</b></p>
            <TableComponent tableTitle={"INNER JOINしたテーブル"} theadData={["id","name","no", "age"]} tbodyData={[[1,"chibi",1,16],[2,"ran",2,7]]}></TableComponent>
          </aside>

          <aside>
            <H5TitleComponent h5Title={"③左外部結合"}></H5TitleComponent>
            <ul>
                <li>左側のテーブルを基準に結合する</li>
                <li>右側のテーブルに一致する値がなくても左側のテーブルデータは取り出される</li>
                <li>SELECT * FROM table_A <b>LEFT JOIN</b> table_B <b>ON</b> id = no;</li>
            </ul>
            <aside className={styles.tableAside}>
            <TableComponent tableTitle={"table_A"} theadData={["id", "name"]} tbodyData={[[1,"chibi"],[2,"ran"],[3,"alex"]]}></TableComponent>
            <TableComponent tableTitle={"table_B"} theadData={["no", "age"]} tbodyData={[[1,16],[2,7],[4,14]]}></TableComponent>
            </aside>
            <p><b>※右側のテーブルに一致する値がない場合は、NULLがはいる。</b></p>
            <TableComponent tableTitle={"LEFT JOINしたテーブル"} theadData={["id","name","no", "age"]} tbodyData={[[1,"chibi",1,16],[2,"ran",2,7],[3,"alex","null","null"]]}></TableComponent>
          </aside>

          <aside>
            <H5TitleComponent h5Title={"④右外部結合"}></H5TitleComponent>
            <ul>
                <li>右側のテーブルを基準に結合する</li>
                <li>左側のテーブルに一致する値がなくても右側のテーブルデータは取り出される</li>
                <li>SELECT * FROM table_A <b>RIGHT JOIN</b> table_B <b>ON</b> id = no;</li>
            </ul>
            <aside className={styles.tableAside}>
            <TableComponent tableTitle={"table_A"} theadData={["id", "name"]} tbodyData={[[1,"chibi"],[2,"ran"],[3,"alex"]]}></TableComponent>
            <TableComponent tableTitle={"table_B"} theadData={["no", "age"]} tbodyData={[[1,16],[2,7],[4,14]]}></TableComponent>
            </aside>
            <p><b>※左側のテーブルに一致する値がない場合は、NULLがはいる。</b></p>
            <TableComponent tableTitle={"RIGHT JOINしたテーブル"} theadData={["id","name","no", "age"]} tbodyData={[[1,"chibi",1,16],[2,"ran",2,7],["null","null",4,14]]}></TableComponent>
          </aside>

          <aside>
            <H5TitleComponent h5Title={"⑤全外部結合"}></H5TitleComponent>
            <ul>
                <li>左外部結合と右外部結合を合わせた働きをする</li>
                <li>値が一致する、しないにもかかわらず全てのデータを取り出す</li>
                <li>SELECT * FROM table_A <b>FULL JOIN</b> table_B <b>ON</b> id = no;</li>
            </ul>
            <aside className={styles.tableAside}>
            <TableComponent tableTitle={"table_A"} theadData={["id", "name"]} tbodyData={[[1,"chibi"],[2,"ran"],[3,"alex"]]}></TableComponent>
            <TableComponent tableTitle={"table_B"} theadData={["no", "age"]} tbodyData={[[1,16],[2,7],[4,14]]}></TableComponent>
            </aside>
            <p><b>※一致する値がない場合は、NULLがはいる。</b></p>
            <TableComponent tableTitle={"FULL JOINしたテーブル"} theadData={["id","name","no", "age"]} tbodyData={[[1,"chibi",1,16],[2,"ran",2,7],["null","null",4,14],[3,"alex","null","null"]]}></TableComponent>
          </aside>

          <aside>
            <H5TitleComponent h5Title={"UNION"}></H5TitleComponent>
            <ul>
                <li>SELECT文をUNIONでつなぐと、重複するデータはまとめられて取り出される。</li>
                <li>SELECT sei , mei FROM table_A <b>UNION</b> SELECT myoji,namae FROM table_B</li>
            </ul>
            <aside className={styles.tableAside}>
            <TableComponent tableTitle={"table_A"} theadData={["sei", "mei"]} tbodyData={[["山田","太一"],["佐藤","大"],["安斉","はじめ"]]}></TableComponent>
            <TableComponent tableTitle={"table_B"} theadData={["myoji", "namae"]} tbodyData={[["梅沢","俊"],["佐藤","大"],["安斉","次郎"]]}></TableComponent>
            </aside>
            <p><b>※重複するデータ(佐藤 大)は1つにまとめられる。列名は左の結果に合わせられる。</b></p>
            <TableComponent tableTitle={"UNIONしたテーブル"} theadData={["sei","mei"]} tbodyData={[["安斉","はじめ"],["安斉","次郎"],["佐藤","大"],["山田","太一"],["梅沢","俊"]]}></TableComponent>
          </aside>

          <aside>
            <H5TitleComponent h5Title="UNION ALL"></H5TitleComponent>
            <ul>
            <li>重複するデータをまとめずに全てのデータを取り出す</li>
            <li>SELECT sei , mei FROM table_A <b>UNION ALL</b> SELECT myoji,namae FROM table_B</li>
            </ul>
            <p><b>※重複するデータ(佐藤 大)もそのまま取り出される。</b></p>
            <TableComponent tableTitle={"UNION ALLしたテーブル"} theadData={["sei","mei"]} tbodyData={[["山田","太一"],["佐藤","大"],["安斉","はじめ"],["梅沢","俊"],["佐藤","大"],["安斉","次郎"]]}></TableComponent>
          </aside>
        
          <aside>
            <H5TitleComponent h5Title={"INTERSECT"}></H5TitleComponent>
            <ul>
                <li>SELECT文で取り出したデータを比較して一致したデータのみを取り出す。</li>
                <li>SELECT sei , mei FROM table_A <b>INTERSECT</b> SELECT myoji,namae FROM table_B</li>
            </ul>
            <aside className={styles.tableAside}>
            <TableComponent tableTitle={"table_A"} theadData={["sei", "mei"]} tbodyData={[["山田","太一"],["佐藤","大"],["安斉","はじめ"]]}></TableComponent>
            <TableComponent tableTitle={"table_B"} theadData={["myoji", "namae"]} tbodyData={[["梅沢","俊"],["佐藤","大"],["安斉","次郎"]]}></TableComponent>
            </aside>
            <p><b>※共通するデータ(佐藤 大)のみ取り出される。</b></p>
            <TableComponent tableTitle={"INTERSECTしたテーブル"} theadData={["sei","mei"]} tbodyData={[["佐藤","大"]]}></TableComponent>
          </aside>
        </article>

        {/* トランザクション */}
        <article>
            <H2TitleComponent h2Title="トランザクション"></H2TitleComponent>
            <ul>
                <li>データベースに対して行う関連した操作を1つの処理としてまとめること。</li>
                <li>一連の処理が完了してから実際に処理結果を反映するかどうかを決定できるので事故や入力ミスなどからデータを守れる。</li>
            </ul>
            <p>例えばおじいちゃんから孫に1万円振り込みする場合。おじいちゃんの口座から1万円引き出し(UPDATE文)、孫の口座に振り込む前にコンピュータの電源が落ちたり、孫の口座が存在しないことに気づいた場合、引き出された1万円はおじいちゃんの口座にも孫の口座にも存在しなくなる。</p>
            <p>このようなことが起きないように<b>関連する一連の操作をひとまとめにしたのがトランザクション。</b></p>

            <aside>
                <H5TitleComponent h5Title="トランザクション利用するには"></H5TitleComponent>
                <p>トランザクションを利用するには、まずトランザクション宣言をする。</p>
                <aside className={styles.borderAside}>
                <p><b>BEGIN TRANSACTION; (宣言)</b></p>
                <aside>
                <p>SELECT・・・(ひとまとめにしたい処理)</p>
                <p>INSERT・・・(ひとまとめにしたい処理)</p>
                <p>INSERT・・・(ひとまとめにしたい処理)</p>
                </aside>
                </aside>
            </aside>
            
            <aside>
                <H5TitleComponent h5Title="トランザクションの終了"></H5TitleComponent>
                <p>トランザクションを終了するには<b>①処理を確定する、②処理を取り消す</b>の2種類方法がある。①の場合<b>コミット(COMMIT)</b>、②の場合<b>ロールバック(ROLLBACK)</b>を使う。</p>
                <ul>
                    <li><b>コミット</b>・・・トランザクションの中で行った操作が<b>成功した場合</b>は、コミットを実行する。コミットを実行するとトランザクションの処理結果が確定される。</li>
                    <li><b>ロールバック</b>・・・トランザクションの中で行った操作が<b>失敗した場合</b>や、操作をやり直したい場合はロールバックを実行します。ロールバックを実行すると、トランザクションの処理は取り消されデータは処理を実行する前の状態に戻ります。</li>
                </ul>
            </aside>

            <aside>
                <H5TitleComponent h5Title="データのロック"></H5TitleComponent>
                <p>上記おじいちゃんの例でおじいちゃんの口座から引き落としいてるのと同時に母がおじいちゃんの口座から引き出しした場合、ほぼ同時に行われた2つの処理によりおじいちゃんの口座はマイナスになるという奇妙な結果になりかねない。</p>
                <p>このようなことが起きないように<b>トランザクションの実行中は処理の対象になっているデータ(今回はおじいちゃんの口座)が保護（ロック）される。保護されている間は、他から操作を加えることができない。</b></p>
                <ul>
                    <li><b>①排他ロック</b>・・・誰かが操作中のデータに対して、他から参照したり変更したりできない仕組み</li>
                    <li><b>②共有ロック</b>・・・誰かが操作中のデータに対して、他からそのデータを参照することはできるが、変更はできない仕組み</li>
                </ul>
            </aside>
        </article>
      </section>
    </>
  );
}
export default Sql;
