import H2TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";
import Image from "next/image";
import styles from "./git.module.scss";
import GitPic1 from "../../public/gitPic1.png";
import GitPic2 from "../../public/gitPic2.png";
import GitPic3 from "../../public/gitPic3.png";
import GitPic4 from "../../public/gitPic4.png";
import GitPic5 from "../../public/gitPic5.png";
import GitPic6 from "../../public/gitPic6.png";
import GitPic7 from "../../public/gitPic7.png";
import GitPic8 from "../../public/gitPic8.png";
import GitPic9 from "../../public/gitPic9.png";
import GitPic10 from "../../public/gitPic10.png";
import GitPic11 from "../../public/gitPic11.png";
import GitPic12 from "../../public/gitPic12.png";
import GitPic13 from "../../public/gitPic13.png";
import GitPic14 from "../../public/gitPic14.png";
import GitPic15 from "../../public/gitPic15.png";
import GitPic16 from "../../public/gitPic16.png";
import GitPic17 from "../../public/gitPic17.png";
import GitPic18 from "../../public/gitPic18.png";
import GitPic19 from "../../public/gitPic19.png";
import GitPic20 from "../../public/gitPic20.png";
import GitPic21 from "../../public/gitPic21.png";
import GitPic22 from "../../public/gitPic22.png";
import GitPic23 from "../../public/gitPic23.png";
import GitPic24 from "../../public/gitPic24.png";
import GitPic25 from "../../public/gitPic25.png";
import GitPic26 from "../../public/gitPic26.png";
import GitPic27 from "../../public/gitPic27.png";
import GitPic28 from "../../public/gitPic28.png";
import GitPic29 from "../../public/gitPic29.png";
import GitPic30 from "../../public/gitPic30.png";
import GitPic31 from "../../public/gitPic31.png";
import GitPic32 from "../../public/gitPic32.png";
import GitPic33 from "../../public/gitPic33.png";
import GitPic34 from "../../public/gitPic34.png";
import GitPic35 from "../../public/gitPic35.png";

function Git() {
  return (
    <>
      <h1>GitとGitHubについて</h1>

      <section className={styles.section}>
        {/* Gitとは */}
        <article>
          <H2TitleComponent h2Title="Gitとは"></H2TitleComponent>
          <ul>
            <li>バージョン管理システム</li>
            <li>
              いつ・誰が・どのように変更したかといった変更履歴と共にファイルを保存できる
            </li>
            <li>ワークツリー : 手元のパソコンの作業環境</li>
            <li>
              ステージ(インデックス) : コミットする前のファイルの事前置き場
            </li>
            <li>リポジトリ : 変更履歴を記録する場所</li>
          </ul>
          <Image src={GitPic1} alt="gitpic"></Image>

          <aside>
            <H5TitleComponent h5Title="リポジトリ"></H5TitleComponent>
            <Image src={GitPic3} alt="gitpic"></Image>
            <ul>
              <li>
                リモートリポジトリ :
                専用のサーバに配置して複数人で共有するためのリポジトリ
              </li>
              <li>
                ローカルリポジトリ :
                ユーザ一人ひとりが利用するために、自分の手元のマシン上に配置するリポジトリ
              </li>
            </ul>
          </aside>
        </article>

        {/* GitHubとは */}
        <article>
          <H2TitleComponent h2Title="GitHubとは"></H2TitleComponent>
          <ul>
            <li>(Gitで管理しているソースコード)コードの共有</li>
            <li>
              コードレビュー(コードを変更したらプルリクでメンバーに確認してもらえる
              )
            </li>
          </ul>
        </article>

        {/* GitHubへの公開鍵認証(SSH接続)について */}
        <article>
          <H2TitleComponent h2Title="GitHubへの公開鍵認証(SSH接続)について"></H2TitleComponent>
          <p>
            公開鍵認証とは、リモートのコンピューターとローカルのコンピューターを安全に接続する方法。
            <b>『秘密鍵』と『公開鍵』</b>
            を用いて、接続を行いう。イメージとしては、公開鍵が南京錠のようなもので、秘密鍵がその南京錠のカギのようなもの。
          </p>
          <p>
            今回の例では、公開鍵をGitHubのアカウントに渡す。そうすると、GitHub側では公開鍵(南京錠)を用いて接続をロックし、その南京錠の鍵である秘密鍵を持つ人だけの接続を許可するようになる。
          </p>
          <Image src={GitPic26} alt="gitpic" className={styles.bigPic}></Image>
          <p>
            左のGitHubのサーバー上に公開鍵がある場合、その公開鍵を開ける秘密鍵をもっているのは上の笑顔の人だけであるため、笑顔の人はログインできるが、下の明らかに悪人顔の人はログインできない。このようにして、セキュリティを高めている。
          </p>

          <aside>
            <H5TitleComponent h5Title="SSHとは"></H5TitleComponent>
            <p>
              Secure Shell(セキュアシェル)の略称で、リモートコンピュータと通信するためのプロトコル。
              認証部分を含めネットワーク上の通信がすべて暗号化されるため、安全に通信することができる。
            </p>
          <Image src={GitPic34} alt="gitpic" className={styles.squarePic}></Image>
          <p>通信する内容を暗号化して送るのがSSH。</p>
          <Image src={GitPic35} alt="gitpic" className={styles.highPic}></Image>
          <p>※telnetは『他のコンピュータを遠隔操作するための仕組み』で、やり取りする情報は、暗号化しないで、そのまま送る。(パスワードのような大事な情報もそのままなので途中で盗み見られたら大変)。SSHが普及する以前は、telnetが接続方法として使われいたがデータは暗号化されないため、比較的簡単に情報を盗み見できてしまいセキュリティに問題があるとして、SSHを使用する企業が増えている。</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="GitHubへの公開鍵認証のやり方"></H5TitleComponent>
            <p>
              ①『cd ~/.ssh』でフォルダ移動。~/.ssh
              はホーム直下のsshファイルの保存場所を表している。別の場所で秘密鍵を生成すると、「こんな安全じゃない場所の秘密鍵なんて使いたくない」というエラーが発生する場合がある。
            </p>
            <Image
              src={GitPic27}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
            <p>
              ②『ssh-keygen -t
              rsa』で鍵を生成。※質問が3つほどあるがそのまま全てenterでOK。
            </p>
            <Image
              src={GitPic28}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
            <p>
              ③『cat
              /Users/yusuke/.ssh/id_rsa.pub』で公開鍵の中身を取得し、コピーする。
            </p>
            <Image
              src={GitPic29}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
            <p>
              ④
              <a href="https://github.com/settings/ssh" target="blank">
                ここ
              </a>
              からgithubへ行き『New SSH key』をクリック。
            </p>
            <Image
              src={GitPic30}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
            <p>
              ⑤『Title』に公開鍵の名前(なんでもOK)、『key type』はAuthentication
              Key、『key』に③でコピーしたものを貼り付ける。
            </p>
            <Image
              src={GitPic31}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
            <p>⑥完了</p>
            <Image
              src={GitPic32}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
            <p>
              ⑦『ssh -T
              git@github.com』で接続が上手くいっているのか確認。下記のように表示されればOK。
            </p>
            <Image
              src={GitPic33}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
          </aside>
        </article>

        {/* ブランチについて */}
        <article>
          <H2TitleComponent h2Title="ブランチについて"></H2TitleComponent>
          <p>ブランチにはリポジトリと同じようにいくつか種類がある。</p>
          <Image src={GitPic15} alt="gitpic" className={styles.bigPic}></Image>
          <aside>
            <H5TitleComponent h5Title="ローカルブランチとは"></H5TitleComponent>
            <p>
              一般的にローカルリポジトリで作成したブランチをローカルブランチと呼ぶことが多い。
            </p>
          </aside>
          <aside>
            <H5TitleComponent h5Title="リモートブランチとは"></H5TitleComponent>
            <p>リモートリポジトリに対するブランチのことを指す場合が多い。</p>
          </aside>
          <aside>
            <H5TitleComponent h5Title="リモート追跡ブランチとは"></H5TitleComponent>
            <Image
              src={GitPic16}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>

            <p>
              リモートレポジトリの各ブランチと直接連動しているブランチは他にあり、そのブランチのことを「リモート追跡ブランチ」と呼ぶ。
              <b>
                (Gitではローカルレポジトリのブランチとリモートレポジトリの同じ名前のブランチが直接連携しているわけではない。)
              </b>
            </p>
            <p>
              リモートブランチの状態を確認するには必ずネットワークにつながっている必要があるが、ローカルで使う時にはリモートブランチの状態が取得できなくて、ネットワークがないところで作業するには不便。そのため
              <b>
                リモートブランチの状態を保持して参照するためのブランチが、ローカルにリモート追跡ブランチとして存在する
              </b>
            </p>
            <p>
              ただし、リモート追跡ブランチはローカルにあるブランチなので、一定のタイミングでリモートブランチの内容を取得する必要があります。それが
              <b>『fetch』</b> コマンド。fetch
              を実行することで、リモートブランチのその時の最新の内容がリモート追跡ブランチへと反映される。逆に
              fetch
              をしない限りリモート追跡ブランチの内容は古いままで、追跡とは名ばかりの存在になってしまう。
            </p>
            <p>リモート追跡ブランチは「git branch -a」で参照できる。</p>
            <Image
              src={GitPic13}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
          </aside>
        </article>

        {/* 各種コマンド */}
        <article>
          <H2TitleComponent h2Title="各種コマンド"></H2TitleComponent>

          <aside>
            <H5TitleComponent h5Title="コミット"></H5TitleComponent>
            <p>
              ファイルやディレクトリの追加・変更を、リポジトリに記録するにはコミットという操作を行う。コミットを実行すると、リポジトリの内では、前回コミットした時の状態から現在の状態までの差分を記録したコミット(またはリビジョン)と呼ばれるものが作成される。
            </p>
            <p>
              このコミットは、次の図のように時系列順につながった状態でリポジトリに格納される。このコミットを最新の物から辿ることで、過去の変更履歴やその内容を知ることができるようになっている。
            </p>
            <Image
              src={GitPic4}
              alt="gitpic"
              className={styles.smallPic}
            ></Image>
            <p>コミットメッセージの書き方</p>
            <ul>
              <li>
                <b>
                  Prefixをつける(Prefixとは何かしらのテキストの先頭につける文字のこと)
                </b>
              </li>
              <li>feat: 新しい機能</li>
              <li>fix: バグの修正</li>
              <li>docs: ドキュメントのみの変更</li>
              <li>style: 空白、フォーマット、セミコロン追加など</li>
              <li>refactor: 仕様に影響がないコード改善(リファクタ)</li>
              <li>perf: パフォーマンス向上関連</li>
              <li>test: テスト関連</li>
              <li>chore: ビルド、補助ツール、ライブラリ関連</li>
            </ul>
            <Image
              src={GitPic5}
              alt="gitpic"
              className={styles.smallestPic}
            ></Image>
            <p>
              このprefixに合わせてコミットを分けることで、大きすぎず小さすぎない、適切な大きさになり、どのカテゴリのものを修正したのかが見てわかりやすい。
            </p>
            <p>
              <b>
                変更した理由や目的を書くことでコードレビューが圧倒的にしやすくなる。
              </b>
            </p>
            <p>
              <b>
                『chore: hogeを追加』ではなく、『chore:
                ネットワーク通信するため、hogeを追加』と書いた方がよりわかりやすい。
              </b>
            </p>
            <p>
              個人開発やOSSとして公開するものは
              英語で書き、日本人が多いチームでの開発では日本語で書いてOK!
            </p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="pull・fetch・cloneの違い"></H5TitleComponent>
            <p>
              clone(クローン),fetch(フェッチ),
              pull(プル)で大きく異なるのは、リモートレポジトリからとってきたデータをどのように保存するか。
            </p>
            <Image src={GitPic2} alt="gitpic"></Image>
            <ul>
              <li>
                pull :
                fetch(フェッチ)とmerge(マージ)を組み合わせたコマンド。リモートレポジトリのコミット履歴を取得して、マージする。
              </li>
              <li>
                fetch :
                リモートレポジトリのコミット履歴をすべて取得してくる。ただしマージはしない。
              </li>
              <li>
                clone :
                リモートレポジトリの内容を丸ごとコピーして、新しいディレクトリを作成する
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="cloneとは"></H5TitleComponent>
            <p>
              Github上の指定したリモートレポジトリをローカルに丸ごとコピーするコマンド。
            </p>
            <p>
              第1引数でリモートレポジトリのURLを指定し、必要に応じて第2引数でコピー先のディレクトリを指定する。
            </p>
            <Image
              src={GitPic6}
              alt="gitpic"
              className={styles.smallPic}
            ></Image>
            <p>
              下記では第二引数に名前を何も渡していないので現在のディレクトリbbbに元々リモートリポジトリにある名前であるothlloという名前でクローンできた。
            </p>
            <Image src={GitPic9} alt="gitpic" className={styles.bigPic}></Image>
            <hr></hr>
            <br></br>
            <p>
              ディレクトリ名を指定して、リモートレポジトリを丸ごとコピーすることも可能。
            </p>
            <Image
              src={GitPic7}
              alt="gitpic"
              className={styles.mediumPic}
            ></Image>
            <p>
              下記ではtestという名前を第二引数に渡しているので現在のディレクトリaaaの中にtestという名前でクローンできた。
            </p>
            <Image src={GitPic8} alt="gitpic" className={styles.bigPic}></Image>
            <hr></hr>
            <br></br>
            <Image
              src={GitPic12}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
            <p>
              下記では第二引数にパスを渡していないので現在のdd(cccの中)の中にothelloができた。
            </p>
            <Image
              src={GitPic10}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
            <p>
              こちらも上記画像同様にdd(cccの中)にいるが第二引数にパスを渡しており、../testということで現在の一つ上の階層にtestという名前でクローンするように指定してある。結果ddの中ではなくcccの中にtestができた。
            </p>
            <Image
              src={GitPic11}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="fetchとは"></H5TitleComponent>
            <p>
              リモートレポジトリのコミット履歴をとってきて、ローカルレポジトリにコピーするコマンド。
              <b>(マージはしない)</b>
            </p>
            <p>
              他のプロジェクトメンバーが作業進めたかな?メインのブランチ(mainやmasterなど)でアップデートがあったかな?といったことを調べたいときに使う。強制的にマージまで実行してしまうgit
              pullと違って、自分でマージのタイミングを選べるのもgit
              fetchのポイント。
            </p>

            <p>【引数なしのgit fetch】</p>
            <ul>
              <li>
                実行したブランチに上流ブランチが設定してある場合は、上流ブランチの最新のコミット履歴を取得してくる
              </li>
              <li>
                上流ブランチが設定されておらず、リモートレポジトリ名に「origin」が登録されている場合は、「origin」というリモートレポジトリのすべてのブランチの最新のコミットをまるごと取得してくる。
              </li>
            </ul>
            <p>【git fetchで上流ブランチを設定する方法】</p>
            <ul>
              <li>
                git fetchで上流ブランチを設定するには、通常のgit fetch{" "}
                {`<リモートレポジトリ名>`} {`<リモートのブランチ名>`}
                に「--set-upstream」オプションを付けて実行する。(upstreamは上流という意味)
              </li>
              <li>
                git fetch --set-upstream{" "}
                {`<リモートレポジトリ名> <リモートのブランチ名>`}
              </li>
            </ul>
            <p>【リモートレポジトリ名を指定したgit fetch】</p>
            <ul>
              <li>
                リモートレポジトリが複数登録してある場合など、対象のリモートレポジトリを指定してgit
                fetchすることもできる。その場合は第2引数でリモートレポジトリ名を指定する。
              </li>
              <li>git fetch {`<リモートレポジトリ名>`}</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="pullとは"></H5TitleComponent>
            <p>
              git cloneやgit
              fetchはローカルレポジトリのどのブランチでコマンドを実行するかは関係ないが、git
              pullはgit fetchしてgit mergeまで行うので
              <b>どこのブランチで実行するかが大きく関係してくる。</b>
            </p>
            <p>
              git
              pullを実行する前に、自分がどのブランチにいるかを確認し、マージしたいブランチにいるかを確認しておくことが重要。
            </p>
            <p>
              git cloneやgit
              fetchのようにただ情報をとってくるだけではなく、マージまで行うので、コンフリクトが発生することがある。
            </p>
            <ul>
              <li>
                git pull {`<リモートレポジトリ名> <リモートのブランチ名>`}
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="プルリクエストとは"></H5TitleComponent>
            <p>GitHubで利用出来るプルリクエストの機能としては大きく3つある。</p>
            <ul>
                <li>①他の開発者への変更通知</li>
                <li>②変更箇所の比較表示</li>
                <li>③コメント機能</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="mergeとは"></H5TitleComponent>
            <p>
              git mergeは元のブランチと<b>トピックブランチ(分岐したブランチ)</b>
              を統合した新しいコミットを作成する。
              <b>(git merge後に生成されるコミットは1つのみ)</b>
            </p>
            <Image
              src={GitPic17}
              alt="gitpic"
              className={styles.mediumPic}
            ></Image>
            <p>
              iss53ブランチのコミットをmasterブランチにマージすると以下のようになる。
            </p>
            <Image
              src={GitPic18}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
            <p>
              例えば、testブランチでaaブランチの内容を取り込みたい場合は次のようにする。
            </p>
            <Image
              src={GitPic19}
              alt="gitpic"
              className={styles.mediumPic}
            ></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="conflict対処法"></H5TitleComponent>
            <ul>
              <li>①コンフリクトが発生しているファイルの内容を修正する</li>
              <li>
                ②git add {`<ファイル名>`}で対象の①ファイルをステージングする
              </li>
              <li>
                ③git commit {`<ファイル名>`}
                で対象のファイルをコミットするとmerge出来ている
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="git rebaseとは"></H5TitleComponent>
            <ul>
              <li>
                コミット履歴を移動したり修正、削除したりするコマンド(マージ前にコミット履歴をきれいにする目的で使用するのが一般的)
              </li>
            </ul>
            <p>下記のようにC3,C4,C10が枝分かれしておりrebaseしようとする。</p>
            <Image
              src={GitPic20}
              alt="gitpic"
              className={styles.mediumPic}
            ></Image>
            <p>
              するとseverブランチに取り込まれる<b>(ここがmergeと異なる)</b>。
            </p>
            <Image
              src={GitPic21}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="リモートレポジトリURLの変更・上書き方法"></H5TitleComponent>
            <ul>
              <li>登録したURLのみを変更するには、set-urlを使う</li>
              <li>git remote set-url {`<リモートレポジトリ名> <新しいURL>`}</li>
            </ul>
            <Image
              src={GitPic22}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="リモートレポジトリの名前を変更・上書きする方法(originを変える)"></H5TitleComponent>
            <ul>
              <li>
                リモートレポジトリの名前、いわゆるorigin、を変更・上書きするには、remote
                renameを使う
              </li>
              <li>
                git remote rename{" "}
                {`<変更前のレポジトリ名> <変更後のレポジトリ名>`}
              </li>
            </ul>
            <Image
              src={GitPic23}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="リモートレポジトリを削除する方法"></H5TitleComponent>
            <ul>
              <li>登録したリモートレポジトリを削除するには、rmを使う</li>
              <li>git remote rm {`<リモートレポジトリ名>`}</li>
            </ul>
            <Image
              src={GitPic24}
              alt="gitpic"
              className={styles.mediumPic}
            ></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="リモートレポジトリを複数登録する方法"></H5TitleComponent>
            <ul>
              <li>
                リモートレポジトリを複数登録できる。これをすると、ブランチの内容をそれぞれのリモートレポジトリに送ることもできる
              </li>
              <li>git remote add {`<リモートレポジトリ名> <URL>`}</li>
            </ul>
            <Image
              src={GitPic25}
              alt="gitpic"
              className={styles.bigPic}
            ></Image>
          </aside>
        </article>

        {/* 参考記事 */}
        <article>
          <H2TitleComponent h2Title="参考記事"></H2TitleComponent>
          <a
            href="https://prograshi.com/general/git/difference-of-git-clone-fetch-pull/"
            target="blank"
          >
            こちら
          </a>
        </article>
      </section>
    </>
  );
}
export default Git;
