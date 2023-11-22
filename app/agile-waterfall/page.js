import styles from "./agile-waterfall.module.scss";
import Image from "next/image";
import agileWaterfallPic from "../../public/agile-waterfallPic.webp";
import agileWaterfallPic2 from "../../public/agile-waterfallPic2.png";
import agilePic from "../../public/agilePic.webp";
import waterfallPic from "../../public/waterfallPic.webp";

function AgileWaterfall() {
  return (
    <div className={styles.div}>
      <div>
        <h1>アジャイル開発・ウォーターフォール開発</h1>
        <Image alt="agileWaterfall" src={agileWaterfallPic}></Image>

        {/* アジャイル開発とは */}
        <section>
          <h2>【アジャイル開発とは】</h2>
          <Image src={agilePic} alt="agilePic"></Image>
          <ul>
            <li>
              アジャイルを直訳すると「素早い」「活発な」となり、その言葉通り実装とテストを短期間・小さな単位で繰り返し、スピーディーに開発する方法
            </li>
            <li>
              チームを組み、要件定義・設計・開発・テスト・リリースといった開発工程を一つひとつの小さな機能単位で繰り返し行う
            </li>
            <li><b>全ての工程は同じチーム内で実行され、工程ごとに別のチームへ引き継ぐことはない</b></li>
          </ul>
        </section>

        {/* アジャイル開発のメリット・デメリット */}
        <section>
          <h2>【アジャイル開発のメリット・デメリット】</h2>

          <h4>【メリット】</h4>
          <ul>
            <li>
              小さな単位で計画、設計、実装、テストを繰り返して開発を進めるため、段階的に機能をリリースすることができる
            </li>
            <li>
              計画段階で綿密な仕様を決めずに、開発途中でユーザーとコミュニケーションを取りながらフィードバックを行うことができるため、顧客ニーズを反映したシステム開発ができる
            </li>
            <li>
              不具合が発生した場合も、1つのイテレーション内の見直しだけで済む<br></br>
              <b>※イテレーション：一連の工程を短期間で繰り返す開発サイクルのこと (設計、開発、テスト、改善のサイクル)</b>
            </li>
          </ul>

          <h4>【デメリット】</h4>
          <ul>
            <li>最初の方針を定期的に確認しないと、開発の方向性がブレやすい</li>
          </ul>
        </section>

        <br></br>
        <hr></hr>
        <br></br>

        {/* ウォーターフォール開発とは */}
        <section>
          <h2>【ウォーターフォール開発とは】</h2>
          <Image alt="waterfallPic" src={waterfallPic}></Image>
          <ul>
            <li>
              プロジェクト開発の最初に全体の設計を決め、それに沿って開発する流れを指します。滝の水が上から下へ流れ落ちるように、一つ一つの工程を完了させながら進める開発手法のため、品質担保やスケジュール管理がしやすい一方で、急な仕様・要望変更に対応しにくいという特徴もあり
            </li>
            <li>
              大きな特徴として前工程が完了しないと次の工程に進めないことがある
            </li>
            <li><b>それぞれの工程は、決められた技術者が担当し、前の工程でドキュメントを作成し、次の工程へ引き継ぐ</b></li>
          </ul>
        </section>

        {/* ウォーターフォール開発のメリット・デメリット */}
        <section>
          <h2>【ウォーターフォール開発のメリット・デメリット】</h2>

          <h4>【メリット】</h4>
          <ul>
            <li>何を作るかが明確</li>
            <li>
              やるべき事項をあらかじめ決定しているため完成品の品質を確保できる
            </li>
            <li>
              プロジェクト開始時に必要なエンジニアの数や作業量が把握できるため、予算の見積もりやスケジュール管理が容易になる
            </li>
          </ul>

          <h4>【デメリット】</h4>
          <ul>
            <li>
              途中で仕様の見直しをすると大きなコストの増加と納期の遅延が起こる
            </li>
            <li>品質を重視した開発手法となるため開発期間は長期化しやすい</li>
          </ul>
        </section>

        <Image alt="agilewaterfall2" src={agileWaterfallPic2}></Image>
      </div>
    </div>
  );
}
export default AgileWaterfall;
