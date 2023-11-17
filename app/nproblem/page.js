import styles from "./nproblem.module.scss";

function nProblemPage() {
  return (
    <div className={styles.div}>
      <div>
      <h1>N + 1問題とは?</h1>

      {/* N+１問題とは */}
      <section>
        <h2>[N + 1問題とは]</h2>
        <p>10件の商品を一覧表示するWebページがあるという前提で</p>
        <ol>
          <li>10件の一覧情報を取得(DBへのselectが1回実行される)</li>
          <li>
          各商品の詳細情報を1件ずつ取得(DBへのselectが10回実行される)
          </li>
          <li>1と2の情報を合わせて画面を表示</li>
        </ol>
        <p>という実装がされていたとする。</p>
        <p>このとき、「最初の手順で情報全部取ってきた方が効率的じゃない?」というのがN+1問題。端的に言うとSQLがたくさん発行されてしまい動作が遅くなる課題のことでSQLの量が最小限よりも1回多くなってしまっている状態のことを、「N+1問題が発生している」と表現する</p>
      </section>

      <section>
        <h2>[解決策]</h2>
        <p>一般的には1の手順でテーブルをjoin(複数テーブルの結合を行いたいときに使用する命令)して、一括で情報を取得すると速度が向上する</p>
      </section>
      </div>
    </div>
  );
}
export default nProblemPage;