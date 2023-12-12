import styles from "./promise.module.scss";
import Image from "next/image";
import bathPic from "../../public/bath.jpg";
import PromisePic1 from "../../public/promisePic1.png";
import PromisePic2 from "../../public/promisePic2.png";
import PromisePic3 from "../../public/promisePic3.png";
import PromisePic4 from "../../public/promisePic4.png";
import PromisePic5 from "../../public/promisePic5.png";
import TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";
function PromisePage() {
  return (
    <>
      <h1>同期処理と非同期処理の違いは？</h1>

      <section>
        {/* 同期処理 */}
        <article>
          <TitleComponent h2Title="同期処理"></TitleComponent>
          <ul>
            <li>
              タスクを実行する際に一つずつ順番にタスクが実行される
              (プログラムに記載したとおりの順番)
            </li>
            <li>一つのタスクが完了するまで次のタスクは実行されない</li>
            <li>
              タスクの完了を待つ必要があり、パフォーマンスが低下する可能性があり
            </li>
          </ul>
        </article>

        {/* 非同期処理 */}
        <article>
          <TitleComponent h2Title="非同期処理"></TitleComponent>
          <ul>
            <li>非同期処理には『Promise』と『async await』の2つがある。</li>
            <li>
              あるタスクを実行している最中に、その処理を止めることなく別のタスクを実行できる
            </li>
            <li>
              実装するためには、例えばJavaScriptの場合、Callback(コールバック)、Promise、Async/Awaitなどが必要になる
            </li>
          </ul>

          <aside>
            <H5TitleComponent h5Title="Promise"></H5TitleComponent>
            <ul>
              <li>pending : 初期状態</li>
              <li>fulfilled : 処理が成功して完了した状態</li>
              <li>rejected : 処理が失敗して完了した状態</li>
            </ul>
            <Image src={PromisePic1} alt="promisePic" className={styles.pic}></Image>
            <p>Promiseはresolveとrejectの2つを返す。成功した時はresolveで失敗した時はreject。</p>
            <Image src={PromisePic2} alt="promisePic2" className={styles.pic}></Image>
            <p>resolveになれば(成功すれば)、thenの方にいきpromiseNameにnameが入る。<br></br>rejectになれば(失敗すれば)、catchの方にいきerrにreject()のかっこの中に書いたのが入る。</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="async / await"></H5TitleComponent>
            <ul>
              <li>記述がシンプルで直感的で分かりやすい</li>
              <li>非同期処理を伴う関数定義にasyncをつける</li>
              <li>非同期処理を伴う関数実行時にawaitをつける</li>
              <li>awaitはasync付き関数内でしか使えない</li>
            </ul>
            <Image src={PromisePic3} alt="promisePic2" className={styles.pic}></Image>
            <p>async / await を使わないとデータをgetしている間にconsole.logが実行されpendingが表示される。</p>
            <Image src={PromisePic4} alt="promisePic2" className={styles.pic}></Image>
            <p>async / await を使うとデータをget完了してから次に進むのでconsole.logにデータが表示される。</p>
            <Image src={PromisePic5} alt="promisePic2" className={styles.pic}></Image>
            <ul>
              <li>try : 成功したらここにくる</li>
              <li>catch : エラーになればここにくる</li>
              <li>finally : 成功してもエラーでもどちらの場合でもここもくる</li>
            </ul>
          </aside>
        </article>

        {/* 例えを用いて説明 */}
        <article className={styles.example}>
          <TitleComponent h2Title="イメージしやすいような例え"></TitleComponent>
          <p>お風呂を沸かすのと夕ご飯を作る場合</p>
          <aside>
            <H5TitleComponent h5Title="同期処理の場合"></H5TitleComponent>
            <p>
              まずお風呂を沸かす
              <span>（お湯を貯めるのに時間がかかるが待たないとダメ）</span>
            </p>
            <p>
              お風呂を沸かすのが<span>完了したら</span>
              ようやく夕ご飯を作り始めれる
            </p>
          </aside>
          <aside>
            <H5TitleComponent h5Title="非同期処理の場合"></H5TitleComponent>
            <p>
              まずお風呂を沸かす
              <span>(ここで沸くまで待たなくてOK)</span>
            </p>
            <p>
              お風呂を沸かしながら<span>同時に</span>夕ご飯を作り始めれる
            </p>
          </aside>
        </article>
      </section>

      <Image src={bathPic} alt="bathPicture" id={styles.picture} />
    </>
  );
}
export default PromisePage;
