import styles from "./promise.module.scss";
import Image from "next/image";
import bathPic from "../../public/bath.jpg";
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
            <li>
              あるタスクを実行している最中に、その処理を止めることなく別のタスクを実行できる
            </li>
            <li>
              実装するためには、例えばJavaScriptの場合、Callback(コールバック)、Promise、Async/Awaitなどが必要になる
            </li>
          </ul>
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

      <Image src={bathPic} alt="bathPicture" className={styles.img} />
    </>
  );
}
export default PromisePage;
