import H2TitleComponent from "../components/title-component/h2title-component";
import styles from "./nproblem.module.scss";

function nProblemPage() {
  return (
    <>
      <h1>N + 1問題とは?</h1>

      <section>
        {/* N+１問題とは */}
        <article>
          <H2TitleComponent h2Title="N + 1問題とは"></H2TitleComponent>
          <p>10件の商品を一覧表示するWebページがあるという前提で</p>
          <ol>
            <li>10件の一覧情報を取得(DBへのselectが1回実行される)</li>
            <li>各商品の詳細情報を1件ずつ取得(DBへのselectが10回実行される)</li>
            <li>1と2の情報を合わせて画面を表示</li>
          </ol>
          <p>という実装がされていたとする。</p>
          <p>
            このとき、「最初の手順で情報全部取ってきた方が効率的じゃない?」というのがN+1問題。端的に言うとSQLがたくさん発行されてしまい動作が遅くなる課題のことでSQLの量が最小限よりも1回多くなってしまっている状態のことを、「N+1問題が発生している」と表現する
          </p>
        </article>

        {/* 解決策 */}
        <article>
          <H2TitleComponent h2Title="解決策"></H2TitleComponent>
          <p>
            一般的には1の手順でテーブルをjoin(複数テーブルの結合を行いたいときに使用する命令)して、一括で情報を取得すると速度が向上する
          </p>
        </article>
      </section>
    </>
  );
}
export default nProblemPage;
