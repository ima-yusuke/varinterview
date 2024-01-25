import H2TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";
import styles from "./laravel.module.scss";
import Image from "next/image";
import LaravelPic1 from "../../public/laravelPic1.png";
import LaravelPic2 from "../../public/laravelPic2.png";
import LaravelPic3 from "../../public/laravelPic3.png";
import LaravelPic4 from "../../public/laravelPic4.png";
import LaravelPic5 from "../../public/laravelPic5.png";
import LaravelPic6 from "../../public/laravelPic6.png";
import LaravelPic7 from "../../public/laravelPic7.png";
import LaravelPic8 from "../../public/laravelPic8.png";
import LaravelPic9 from "../../public/laravelPic9.png";
import LaravelPic10 from "../../public/laravelPic10.png";
import LaravelPic11 from "../../public/laravelPic11.png";
import LaravelPic12 from "../../public/laravelPic12.png";
import LaravelPic13 from "../../public/laravelPic13.png";
import LaravelPic14 from "../../public/laravelPic14.png";
import LaravelPic15 from "../../public/laravelPic15.png";
import LaravelPic16 from "../../public/laravelPic16.png";
import LaravelPic17 from "../../public/laravelPic17.png";
import LaravelPic18 from "../../public/laravelPic18.png";
import LaravelPic19 from "../../public/laravelPic19.png";
import LaravelPic20 from "../../public/laravelPic20.png";
import LaravelPic21 from "../../public/laravelPic21.png";
import LaravelPic22 from "../../public/laravelPic22.png";
import LaravelPic23 from "../../public/laravelPic23.png";
import LaravelPic24 from "../../public/laravelPic24.png";
import LaravelPic25 from "../../public/laravelPic25.png";
import LaravelPic26 from "../../public/laravelPic26.png";
import LaravelPic27 from "../../public/laravelPic27.png";
import LaravelPic28 from "../../public/laravelPic28.png";
import LaravelPic29 from "../../public/laravelPic29.png";
import LaravelPic30 from "../../public/laravelPic30.png";
import LaravelPic31 from "../../public/laravelPic31.png";
import LaravelPic32 from "../../public/laravelPic32.png";
import LaravelPic33 from "../../public/laravelPic33.png";
import LaravelPic34 from "../../public/laravelPic34.png";
import LaravelPic35 from "../../public/laravelPic35.png";
import LaravelPic36 from "../../public/laravelPic36.png";
import LaravelPic37 from "../../public/laravelPic37.png";
import LaravelPic38 from "../../public/laravelPic38.png";
import LaravelPic39 from "../../public/laravelPic39.png";
import LaravelPic40 from "../../public/laravelPic40.png";
import LaravelPic41 from "../../public/laravelPic41.png";
import LaravelPic42 from "../../public/laravelPic42.png";
import LaravelPic43 from "../../public/laravelPic43.png";
import LaravelPic44 from "../../public/laravelPic44.png";
import LaravelPic45 from "../../public/laravelPic45.png";
import LaravelPic46 from "../../public/laravelPic46.png";
import LaravelPic47 from "../../public/laravelPic47.png";
import LaravelPic48 from "../../public/laravelPic48.png";
import LaravelPic49 from "../../public/laravelPic49.png";
import LaravelPic50 from "../../public/laravelPic50.png";
import LaravelPic51 from "../../public/laravelPic51.png";
import LaravelPic52 from "../../public/laravelPic52.png";
import LaravelPic53 from "../../public/laravelPic53.png";
import LaravelPic54 from "../../public/laravelPic54.png";
import LaravelPic55 from "../../public/laravelPic55.png";
import LaravelPic56 from "../../public/laravelPic56.png";
import LaravelPic57 from "../../public/laravelPic57.png";
import LaravelPic58 from "../../public/laravelPic58.png";
import LaravelPic59 from "../../public/laravelPic59.png";
import LaravelPic60 from "../../public/laravelPic60.png";
import LaravelPic61 from "../../public/laravelPic61.png";
import LaravelPic62 from "../../public/laravelPic62.png";
import LaravelPic63 from "../../public/laravelPic63.png";
import LaravelPic64 from "../../public/laravelPic64.png";
import LaravelPic65 from "../../public/laravelPic65.png";
import LaravelPic66 from "../../public/laravelPic66.png";
import LaravelPic67 from "../../public/laravelPic67.png";
import LaravelPic68 from "../../public/laravelPic68.png";
import LaravelPic69 from "../../public/laravelPic69.png";
import LaravelPic70 from "../../public/laravelPic70.png";
import LaravelPic71 from "../../public/laravelPic71.png";
import LaravelPic72 from "../../public/laravelPic72.jpeg";
function Laravel() {
  return (
    <>
      <h1>Laravel</h1>

      <section>
        {/* 用語集 */}
        <article>
          <H2TitleComponent h2Title="用語集"></H2TitleComponent>

          <aside>
            <H5TitleComponent h5Title="環境構築"></H5TitleComponent>
            <p>アプリの実行環境(Laravelが動く)を作ること。</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="環境変数"></H5TitleComponent>
            <p>
              開発環境と本番環境で変わる可能性がある情報。『.env』ファイルで一括管理されている。
            </p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="MAMPとは"></H5TitleComponent>
            <p>
              PHPとMySQLとApacheの開発環境(アプリ実行環境)を簡単に構築できるツール。
            </p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="Composerとは"></H5TitleComponent>

            <Image src={LaravelPic1} alt="laravelPic"></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="ディレクトリ構造"></H5TitleComponent>
            <Image src={LaravelPic2} alt="laravelPic"></Image>
            <ul>
              <li>appのHttpのMiddlewareにはミドルウェアファイルが入る。ミドルウェアは、<b>コントローラーが処理を行う前に実施したい処理がある場合に使用する。</b></li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="@include"></H5TitleComponent>
            <p>@includeを使うと<b>指定した箇所のコードを丸ごと挿入</b>できます。</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="スロット"></H5TitleComponent>
            <p><b>スロットにはapp.blade.phpをテンプレートして使用したページのコードが入ります。</b></p>
            <p>{`<x-app-layout>`}</p>
            <p>{`<x-slot name="header">ここは$headerに反映される箇所</x-slot>`}</p>
            <p>その他の部分で{`{{$slot}}`}に入る箇所</p>
            <p>{`</x-app-layout>`}</p>
            <br></br>
            <p>test.blade.phpファイルをコンポーネントフォルダに作成。これを呼び出すには下記※①参照。</p>
            <Image src={LaravelPic68} alt="laravelPic"></Image>
            <p>名前をつけて設定をした場合。</p>
            <Image src={LaravelPic69} alt="laravelPic"></Image>
            <p>※① test.blade.phpなのでx-testとしてある。このタグの中に書いたものは上記1枚目の画像のslotに入る。</p>
            <p>またここでは2枚目の画像で設定した名前つきのスロット(nameSlot)も呼び出している。</p>
            <Image src={LaravelPic70} alt="laravelPic"></Image>
            <p>表示結果</p>
            <Image src={LaravelPic71} alt="laravelPic"></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="スロットとコンポーネントの違い"></H5TitleComponent>
            <Image src={LaravelPic72} alt="laravelPic"></Image>
            <p>コンポーネントはReactなどと同じ考え方で部品のようなイメージで何度も使い回せる。そのコンポーネントの中で一部変えたいとこを$Slotで書く。上記画像の場合、headerコンポーネントがBの上に入り、{`<x-header>〇〇〇〇</x-header>`}の〇〇〇〇部分が左の$slotにはいる。</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="Vite"></H5TitleComponent>
            <ul>
              <li>コンパイルをおこなってくれるツール<br></br>※コンパイル・・・ソースコード（人間が書いたもの）をコンピューターが理解できるものに変換すること</li>
              <li>Viteを使うにはNode.jsが必要。</li>
            </ul>
          </aside>
        </article>

        {/* MVCとは */}
        <article>
          <H2TitleComponent h2Title="MVCとは"></H2TitleComponent>
          <p>Model,View,Controllerの頭文字。</p>
          <ul>
            <li>Model・・・データベースとやり取り</li>
            <li>View・・・見た目(ファイル名にblade.phpとつけるのはお約束)</li>
            <li>Controller・・・処理</li>
            <li>Routing・・・アクセスの振り分け</li>
            <li>Migration・・・DBテーブルの履歴管理</li>
          </ul>
          <Image src={LaravelPic6} alt="laravelPic"></Image>
          <p>ブラウザにページ表示の流れ</p>
          <ul>
            <li>
              URLを叩いてルーティングファイル<b>(routes/web.php)</b>
              にいく。{`"/"`}このパスを叩いた時にwelcomeブレードのところを表示される。
            </li>
          </ul>
          <Image src={LaravelPic32} alt="laravelPic"></Image>
          <p>
            <b>welcomeブレードはresourcesフォルダの中のviewsフォルダにある</b>
          </p>
          <Image src={LaravelPic33} alt="laravelPic"></Image>

          <aside>
            <H5TitleComponent h5Title="モデル"></H5TitleComponent>
            <ul>
              <li><b>DBとの連携係。</b></li>
              <li><b>モデルファイルはapp/Modelsの中に作成する。</b></li>
              <li>
                <b>
                  DBとのやり取りをSQLではなくPHPで書ける。このようにSQLでなく他の言語で書ける仕組みを『ORM
                  /
                  ORマッパー』という。Javaなど他の言語でもORM/ORマッパーはあるが、LaravelではEloquent(エロクアント)という。
                </b>
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="fillableプロパティとguardedプロパティ"></H5TitleComponent>
            <ul>
              <li><b>fillableプロパティ・・・fillableで設定した値以外は、一括保存・更新処理から除外する</b></li>
              <li><b>guardedプロパティ・・・guardedプロパティは一括で保存・更新しないカラムを指定する</b></li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="@csrf"></H5TitleComponent>
            <ul>
              <li><b>クロスサイトリクエストフォージェリ(cross-siterequest forgeries)攻撃</b>を防ぐために入っている</li>
              <li>この攻撃は頭文字をとって、<b>CSRF（シーサーフ）</b>と呼ばれる</li>
              <li>攻撃者はユーザーのふりをして、ユーザーがログインしていたサイトに悪質な投稿をしたり、不正な送金を行ったりする。ユーザーは見に覚えのないことで責められたり、金銭的な負担を背負ったりすることになる</li>
              <li>CSRF被害を防ぐには、<b>Webアプリによるワンタイムトークン発行が有効。Laravelではフォームに@csrfの5文字を入れるだけでワンタイムトークンの仕組みを実装できる。<br></br>※@csrfを入れないとエラーになって送信できない。</b></li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="モデルファイルの作成方法"></H5TitleComponent>
            <p>
              <b>
                php artisan make:model ファイル名(最初の文字は大文字で書く){" "}
                <br></br>※php artisan make:model
                ファイル名(最初の文字は大文字で書く)
                -mと{`"-m"`}をつけるとマイグレーションも同時に作成される。（モデルは単数形、マイグレーションファイルは複数形になる）
              </b>
            </p>
            <p>
              上記コマンドを実行するとappフォルダのModelsの中にファイルが作成される。またファイル名とclass名は同じになる。
            </p>
            <Image src={LaravelPic34} alt="laravelPic"></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="Eloquent ORMとは"></H5TitleComponent>
            <Image src={LaravelPic7} alt="laravelPic"></Image>
            <Image src={LaravelPic8} alt="laravelPic"></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="ルーターとは"></H5TitleComponent>
            <ul>
              <li>ユーザーのリクエストをどのコントローラーのどのメソッドで処理するかを割り振る役割</li>
              <li>ルート設定は<b>routes/web.php</b>に記述する。</li>
              <li><b>Route::HTTPメソッド({`"url"`},[コントローラ::class, {`"メソッド"`}]){`->`}name({`"ルート名"`})</b></li>
              <li><b>同じURLでもHTTPメソッドによって違う処理を割り振ることができる</b></li>
              <li><b>url・・・ドメイン以下のurlを入れる。urlにパラメータを含む場合、波括弧を使って記述する。register / {`{user}`}など。</b></li>
              <li><b>urlの後の[]にはこのurlをリクエストされた時に処理を行うコントローラ名とメソッド名を入れる。なおルート設定ファイルの上部にはコントローラファイルの場所を示すuse宣言をいれておく必要がある。</b></li>
              <li><b>ルート名・・・このルート設定の名前。必須ではないがあると便利。<br></br></b>Route::get({`"register"`},[RegisteredUserController::class,{`"create"`}]){`->`}<b>name({`"register"`}</b>)<br></br>ルート名はプロジェクト内で、このルート設定を呼び出すときに使われる名前。例えばRegisterボタンをクリックすると登録画面が表示されるリンクを作成したい場合次のようになる。<br></br><b>{`<a href="{{route('register')}}">Register</a>`}</b></li>
            </ul>
            <Image src={LaravelPic9} alt="laravelPic"></Image>
            <p>
              ※下記のshowListはBlogControllerクラスのメソッドの一つ。（名前は何でもOK）つまりこれはshowListメソッドを実行するということ。
            </p>
            <Image src={LaravelPic10} alt="laravelPic"></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="HTTPメソッド"></H5TitleComponent>
            <ul>
              <li><b>『get』・・・ページを表示</b></li>
              <li><b>『post』・・・データを保存</b></li>
              <li><b>『put / patch』・・・データの更新</b></li>
              <li><b>『delete』・・・データの削除</b></li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="コントローラーとは"></H5TitleComponent>
            <ul>
              <li><b>ルーターから受け取ったユーザーのリクエストを実際に処理していく。</b></li>
              <li><b>コントローラーのファイルはapp/Http/Controllersの中に作っていく。</b></li>
            </ul>
            <Image src={LaravelPic11} alt="laravelPic"></Image>
            <Image src={LaravelPic12} alt="laravelPic"></Image>
            <ul>
              <li>
                <b>
                  php artisan make:controller
                  TestController(コントローラー名でControllerとつけるのが一般的)
                </b>
              </li>
              <li>
                <b>app/Http/Controllers/</b>配下に生成される。
              </li>
            </ul>
            <Image src={LaravelPic41} alt="laravelPic"></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="ビュー"></H5TitleComponent>
            <ul>
              <li><b>ビューはBladeというテンプレートエンジンを使って作成する。<br></br>※テンプレートエンジンとは通常のhtmlコード以外に変数やプログラミングコードを入れることができると捉えておく</b></li>
              <li><b>ビューファイルの拡張子はblade.php</b></li>
              <li><b>コードを入れる部分には@を入れる</b></li>
              <li><b>@auth・・・認証済み（ログイン後）のユーザー向けのコードを挿入可</b></li>
              <li><b>@guest・・・認証されていない（ログインしていない）ユーザー向けのコードを挿入可</b></li>
              <li><b>ビューで変数を利用するには二重括弧で変数を囲う{`{{}}`}。</b><br></br>※二重括弧で囲うのはエスケープ処理を行うため。inputにalertなど書いても文字として扱いセキュリティ対策になるため。こういった攻撃を『クロスサイトスクリプティング(XSS)』という。</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="ブレードとは"></H5TitleComponent>
            <Image src={LaravelPic13} alt="laravelPic"></Image>
            <ul>
              <li>
                下記のように@yieldは@section~@endsectionまでに記載された内容の代わりになる。
                <b>
                  一度@sectionで記載したらComponentみたいに@yieldで使い回せるイメージ？
                </b>
              </li>
              <li>頭にx-とつくのはBladeコンポーネント</li>
              <li>クラスを使うパターン・・・app/View/Components/配下</li>
              <li>クラスを使わないパターン・・・resources/views/components/配下</li>
            </ul>
            <Image src={LaravelPic14} alt="laravelPic"></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="マイグレーション(Migration)"></H5TitleComponent>
            <Image src={LaravelPic3} alt="laravelPic"></Image>
            <Image src={LaravelPic4} alt="laravelPic"></Image>
            <Image src={LaravelPic5} alt="laravelPic"></Image>
            <ul>
              <li>DBテーブルの履歴管理(テーブルの設定をPHPで書ける)</li>
              <li>
                <b>
                  モデルは単数形、マイグレーションは複数形で書くとLaravel側で自動判定してくれる。
                </b>
              </li>
              <li>
                <b>
                  php artisan make:migration
                  create_モデルファイル名の複数系_table
                </b>
                でマイグレーションファイル作成
              </li>
            </ul>
            <p>
              php artisan make:migration
              create_モデルファイル名の複数系_tableを実行するとdatabaseフォルダのmigrationsフォルダにファイルが作成される。
            </p>
            <Image src={LaravelPic35} alt="laravelPic"></Image>
            <p>
              テーブルの列を追加するときは下記画像のstring({`"text"`})のようにし、
              <b>php artisan migrate</b>を実行するとデータベースに追加される。
            </p>
            <Image src={LaravelPic36} alt="laravelPic"></Image>
            <p>
              ※使用できるカラム一覧。参照ページは
              <a
                href="https://readouble.com/laravel/9.x/ja/migrations.html"
                target="blank"
              >
                こちら
              </a>
            </p>
            <Image src={LaravelPic37} alt="laravelPic"></Image>
            <p>
              <b>※例）text({`"fname"`})とするとfnameというカラムができる。</b>
            </p>
            <Image src={LaravelPic39} alt="laravelPic"></Image>
            <Image src={LaravelPic38} alt="laravelPic"></Image>
            <ul>
              <li>
                <b>※php artisan migrate:fresh テーブルを全て削除し再作成</b>
              </li>
              <li>
                <b>
                  ※nullable()とは通常はnullに対応しない型でも、それに対応できるようになります。
                </b>
                下記画像では{`"url"`}は空の可能性もあったのでnullable()を追加した。
              </li>
            </ul>
            <Image src={LaravelPic54} alt="laravelPic"></Image>

            <aside>
            <H5TitleComponent h5Title="後からテーブルの列を追加・削除"></H5TitleComponent>
            <ul>
              <li>
                追加:
                <b>
                  php artisan make:migration
                  add_追加したい列_to_テーブル名_table
                </b>
                <br></br>
                ⇒すると下記画像のようにmigrationsフォルダにファイルが作成される。
              </li>
              <li>
                <b>テーブルを新規作成したときにはdownメソッドは自動で入るが、新たに列を追加したりするときには自分でdownメソッドコードを入れないとだめ。</b>
              </li>
            </ul>
            <Image src={LaravelPic55} alt="laravelPic"></Image>
            <p>
              追加したい列を記載。※after({`"name"`})は{`"name"`}という列の後に{`"title"`}列を追加するという指示。
            </p>
            <Image src={LaravelPic56} alt="laravelPic"></Image>
            <p>しっかりnameの後にtitleが追加されている。</p>
            <Image src={LaravelPic57} alt="laravelPic"></Image>
            </aside>

            <aside>
              <H5TitleComponent h5Title="ロールバック"></H5TitleComponent>
              <ul>
                <li>間違えてマイグレートを実行したときに<b>batchごとに処理を取り消すことができる。</b>テーブルごとではなくbatchごとになるので注意。<br></br>※batchとはテーブル一番右のbatchカラムには<b>何回目のマイグレートコマンドによって処理が行われたか</b>が表示される。</li>
                <li><b>ロールバック後はdatabase/migrationsの中に作成したtestsテーブル用のマイグレーションファイルも削除する。もしファイルが残っていると、次回マイグレートを行ったときに、testテーブルが再び作成されてしまうため。</b></li>
              </ul>
            </aside>

            <H5TitleComponent h5Title="状態表示（今までの履歴表示）"></H5TitleComponent>
            <ul>
              <li>今までの履歴が確認できる</li>
              <li>
                <b>php artisan migrate:status</b>
              </li>
            </ul>
            <Image src={LaravelPic58} alt="laravelPic"></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="tinker"></H5TitleComponent>
            <ul>
              <li>
                <b>①php artisan tinker</b>
              </li>
              <li>②$test = new App\Models\Test;</li>
              <li>③${`$test->text`} = {`"aaa"`};</li>
              <li>④${`$test->save();`} </li>
              <li>⑤App\Models\Test::all(); //全件表示</li>
            </ul>
            <p>下記のターミナルでデータベースにデータを追加できる。</p>
            <Image src={LaravelPic40} alt="laravelPic"></Image>
          </aside>
        </article>

        {/* Laravelインストールの仕方 */}
        <article>
          <H2TitleComponent h2Title="Laravelインストールの仕方"></H2TitleComponent>
          <ul>
            <li>①MAMPのhtdocsにターミナルでいく</li>
            <li>
              ②そこで下記コマンドを入力する<b>(^のキーボードは¥マークの左)</b>
              <br></br>
              <b>
                composer create-project laravel/laravel:^9 task_test
                --prefer-dist
              </b>
              <br></br>
              ※『task_test』のところはフォルダ名になるので何でもOK
            </li>
          </ul>
          <Image src={LaravelPic15} alt="laravelPic"></Image>
          <p>
            さらにLaravelには簡易サーバーの機能もある。確認方法は下記画像参照。
            <br></br>
            <b>php artisan serve</b>
          </p>
          <Image src={LaravelPic16} alt="laravelPic"></Image>
          <p>
            そして<b>[http://127.0.0.1:8000]</b>
            をコピーしブラウザに貼り付けると下記になる。
          </p>
          <Image src={LaravelPic17} alt="laravelPic"></Image>
        </article>

        {/* Laravelの初期設定 */}
        <article>
          <H2TitleComponent h2Title="Laravelの初期設定"></H2TitleComponent>
          <ul>
            <li>
              タイムゾーン ⇒ <b>configフォルダのapp.php</b>
            </li>
            <li>
              言語設定 ⇒ <b>configフォルダのapp.php</b>
            </li>
            <li>デバッグバー</li>
            <li>データベース設定</li>
            <li>エラーメッセージの日本語化</li>
          </ul>

          <aside>
            <H5TitleComponent h5Title="タイムゾーン"></H5TitleComponent>
            <Image src={LaravelPic18} alt="laravelPic"></Image>
            <p>※UTCは国際基準時間なので{`"Asia/Tokyo"`}に変更。</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="言語設定"></H5TitleComponent>
            <Image src={LaravelPic19} alt="laravelPic"></Image>
            <p>
              ※en(English)からja(japanese)に変更することでエラーメッセージなどが日本語になる。
            </p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="デバッグバーのインストール"></H5TitleComponent>
            <Image src={LaravelPic20} alt="laravelPic"></Image>
            <p>
              <b>composer require barryvdh/laravel-debugbar:^3.7</b>
              をターミナルで実行。するとcomposer.jsonに追加される。
            </p>
            <Image src={LaravelPic21} alt="laravelPic"></Image>
            <p>ブラウザでこのように下に追加される。</p>
            <br></br>
            <H5TitleComponent h5Title="デバッグバーの表示・非表示切り替え"></H5TitleComponent>
            <p>
              デバッグバーは開発用のツールであって本番用で表示されるとまずい。
              <br></br>⇒<b>.env</b>の<b>APP_DEBUG</b>で切り替えれる。
            </p>
            <Image src={LaravelPic22} alt="laravelPic"></Image>
            <p>このようにtrueをfalseに変えると消える。</p>
            <Image src={LaravelPic23} alt="laravelPic"></Image>
            <p>
              <b>
                もしtrueとfalseを変更しても切り替わらない場合下記コマンドでキャッシュを消す必要がある。(ターミナルで下記2つ実行する)
              </b>
            </p>
            <ul>
              <li>php artisan cache:clear</li>
              <li>php artisan config:clear</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="データベース設定"></H5TitleComponent>
            <p>
              <b>phpMyAdminのMAMPで開き方</b>
            </p>
            <ul>
              <li>①MAMPスタート</li>
              <li>②MAMPのWebStartをクリック</li>
              <li>③ツールのphpMyAdminをクリック</li>
              <li>
                ④新規でデータベース作成<b>（tableは作成不要）</b>
              </li>
              <li>⑤特権の『ユーザーアカウントの追加』をクリック</li>
              <li>⑥VsCodeに戻り.envにデータベース情報を書き換える</li>
              <li>
                ⑦ターミナルで<b>php artisan migrate</b>を打ち込みtable作成。
                <br></br>
                <b>
                  ※エラーがでたら
                  <a
                    href="https://coinbaby8.com/access_denied.html"
                    target="blank"
                  >
                    この記事参照
                  </a>
                </b>
              </li>
            </ul>
            <Image src={LaravelPic24} alt="laravelPic"></Image>
            <Image src={LaravelPic25} alt="laravelPic"></Image>
            <Image src={LaravelPic26} alt="laravelPic"></Image>
            <p>
              ユーザーアカウントの追加。『ユーザー名(何でもOK)』と『パスワード（何でもOK）』を入力する。
            </p>
            <Image src={LaravelPic27} alt="laravelPic"></Image>
            <p>⑥データベース情報の書き換え(3箇所)</p>
            <Image src={LaravelPic28} alt="laravelPic"></Image>
            <p>
              ⑦初回エラーが出たので上記記載の参考記事を参考にした。そこで
              <b>
                DB_SOCKET=/Applications/MAMP/tmp/mysql/mysql.sock を.envに追加
              </b>
              したらエラーが解消された。
            </p>
            <Image src={LaravelPic30} alt="laravelPic"></Image>
            <Image src={LaravelPic29} alt="laravelPic"></Image>
            <p>phpMyAdminを開くとtabelが作成されている</p>
            <Image src={LaravelPic31} alt="laravelPic"></Image>
          </aside>
        </article>

        {/* Laravel Breeze */}
        <article>
          <H2TitleComponent h2Title="Laravel Breeze"></H2TitleComponent>
          <p>下記2つのコマンドを実行する。</p>
          <ul>
            <li>
              <b>composer require laravel/breeze:^1.13 --dev</b>
            </li>
            <li>
              <b>php artisan breeze:install</b>
            </li>
          </ul>
          <p>
            <b>※login(下記画像右上)やregisterが自動的に追加される。</b>
          </p>
          <Image src={LaravelPic52} alt="laravelPic"></Image>
          <Image src={LaravelPic53} alt="laravelPic"></Image>
        </article>

        {/* MVCの一連の流れ */}
        <article>
          <H2TitleComponent h2Title="MVCの一連の流れ"></H2TitleComponent>
          <p>
            ①
            <b>
              routesのweb.phpに『use』と『Route』を書く。url(今回だと{`"tests/test"`})にいくと配列の中が実行される。
            </b>
            <br></br>※[
            ]配列の中の書き方。第一引数は使用したいコントローラー名を書く。::classとすると『use』に記載の絶対パスになる。
            <br></br>
            ※第二引数には、第一引数のコントローラーの中の使用したいメソッド(今回は{`”index"`})を記載する。
          </p>
          <Image src={LaravelPic42} alt="laravelPic"></Image>
          <p>
            上記で指定した通りTestControllerにindexメソッドを作成する。({`"tests.test"`}はtestsフォルダの中のtestファイルという意味)
          </p>
          <Image src={LaravelPic43} alt="laravelPic"></Image>
          <p>
            viewsフォルダの中に上記で記載したtestsフォルダとtest.blade.phpファイルを作成する。
          </p>
          <Image src={LaravelPic44} alt="laravelPic"></Image>
          <p>
            urlプラスtests/testを開くとtest.blade.phpで記載した内容が表示される。
          </p>
          <Image src={LaravelPic45} alt="laravelPic"></Image>

          <aside>
            <H5TitleComponent h5Title="コントローラーからモデルにアクセスして、データベースのデータを取得しビューで表示"></H5TitleComponent>
            <ul>
              <li>
                ①routesに記載した使用するコントローラーにモデルをuseを使い読み込む
              </li>
              <li>
                ②読み込んだモデル(今回はTest)と::allで全件取得<br></br>
                ※取得できてるか確認するためにdd($values)で確認している(確認結果は下記画像参照)。
              </li>
              <li>
                ③取得した$valuesをviewに送るためview()関数の第二引数に渡している。
                <br></br>
                <b>※compactの第二引数に書くときは$マークを外し””で囲う。</b>
              </li>
              <li>
                ④view側でcontrollerから上記で送った$valuesを使用できるようになる
              </li>
            </ul>
            <Image src={LaravelPic47} alt="laravelPic"></Image>
            <p>
              ※②dd($values)で確認した結果。tinkerでDBに追加したfnameなどが取得出来ている。
            </p>
            <Image src={LaravelPic46} alt="laravelPic"></Image>
            <p>view側でコントローラーから取得したデータを使用し表示させた。</p>
            <Image src={LaravelPic48} alt="laravelPic"></Image>
            <Image src={LaravelPic49} alt="laravelPic"></Image>
            <H5TitleComponent h5Title="『where』を使い条件にあったデータのみ取得"></H5TitleComponent>
            <p>
              <b>
                ※get()を書かないとデータ取得出来ないので忘れないように注意！
              </b>
            </p>
            <Image src={LaravelPic50} alt="laravelPic"></Image>
            <p>
              {`"fname"が"yusuke"`}のデータのみ取得できた。(all()のときはarrayが4だが今回はちゃんとarrayが1になってる)
            </p>
            <Image src={LaravelPic51} alt="laravelPic"></Image>
          </aside>
        </article>

        {/* リソースコントローラーについて */}
        <article>
          <H2TitleComponent h2Title="リソースコントローラーについて"></H2TitleComponent>
          <ul>
            <li>
              <b>php artisan make:controller コントローラー名 --resource</b>
            </li>
            <li>上記コマンドでよく使うメソッドをまとめて生成できる</li>
            <li>リソースとは別名RESTfulと呼ばれることもある</li>
          </ul>
          <p>コマンドを実行すると7つのメソッドが自動的に生成されている。</p>
          <Image src={LaravelPic59} alt="laravelPic"></Image>
          <H5TitleComponent h5Title="このリソースに対応するルートの書き方"></H5TitleComponent>
          <p>※routesフォルダのweb.phpに書く</p>
          <ul>
            <li>
              <b>use App\Http\Controllers\コントローラー名;</b>
            </li>
            <li>
              <b>Route::resource({`"フォルダ名"`},コントローラー名::class);</b>
            </li>
          </ul>
          <Image src={LaravelPic60} alt="laravelPic"></Image>

          <H5TitleComponent h5Title="グループ化"></H5TitleComponent>
          <p>
            下記のように似たような内容があるときは一つにまとめたい。その時にグループ化する。
          </p>
          <Image src={LaravelPic61} alt="laravelPic"></Image>
          <p>下記がまとめた例え。</p>
          <ul>
            <li>
              prefix()は重複箇所をまとめれる(下記画像 ※①)<br></br>
              <b>※ここに記載するのはurl?</b>
            </li>
            <li>
              middleware({`"auth"`})は下記authで記載のようにログインチェック機能を追加してくれる
            </li>
            <li>
              controllerではContactFormController::classも重複してるのでここでまとめてる
            </li>
            <li>
              今回はnameにはviewsフォルダの中にあるcontactsフォルダを重複している設定なのでcontactsと記載してある
            </li>
            <li>そして最終groupの所に重複箇所を省いた内容を記載する</li>
          </ul>
          <Image src={LaravelPic66} alt="laravelPic"></Image>
          <p>※①</p>
          <Image src={LaravelPic67} alt="laravelPic"></Image>

          <H5TitleComponent h5Title="auth"></H5TitleComponent>
          <ul>
            <li>
              上記で<b>auth</b>
              を追記してあるのでログインしていないと表示できなくできる
            </li>
          </ul>
          <p>上記で作成したcontactsにアクセスしようとすると、、、</p>
          <Image src={LaravelPic62} alt="laravelPic"></Image>
          <p>ログインしていなので自動的にログインページに飛ばされる</p>
          <Image src={LaravelPic63} alt="laravelPic"></Image>
          <p>ログインしてから読み込みなおすと、、、</p>
          <Image src={LaravelPic64} alt="laravelPic"></Image>
          <p>しっかりとcontactsへいける</p>
          <Image src={LaravelPic65} alt="laravelPic"></Image>
        </article>
      </section>
    </>
  );
}
export default Laravel;
