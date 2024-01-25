import H5TitleComponent from "../components/title-component/h5title-component";
import H2TitleComponent from "../components/title-component/h2title-component";
import Image from "next/image";
import Laravel2Pic1 from "../../public/laravel2Pic1.png";

function Laravel2() {
  return (
    <>
      <h1>Laravel & Docker</h1>

      <section>
        {/* プロジェクトの始め方 */}
        <article>
          <H2TitleComponent h2Title="プロジェクトの始め方"></H2TitleComponent>

          <aside>
            <H5TitleComponent h5Title="①curl -s https://laravel.build/プロジェクト名 | bash"></H5TitleComponent>
          </aside>
          <aside>
            <H5TitleComponent h5Title="②composer install"></H5TitleComponent>
            <p>※①で作成したプロジェクトにディレクトリ移動してから実行する(cd プロジェクト名)</p>
          </aside>

          <aside>
          <H5TitleComponent h5Title="③phpMyadminの追加"></H5TitleComponent>
          <p>下記コードを<b>docker-compose.yml</b>ファイルに追記。</p>
          <p>
          phpmyadmin:
        image:  phpmyadmin/phpmyadmin
        links:
            - mysql:mysql
        ports:
            - 8080:80
        environment:
            MYSQL_USERNAME: {"${DB_USERNAME}"}
            MYSQL_ROOT_PASSWORD: {"${DB_PASSWORD}"}
            PMA_HOST: mysql
        networks:
            - sail
          </p>
          <hr></hr>
          <br></br>
          <p>※Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:3306 -{">"} 0.0.0.0:0: listen tcp 0.0.0.0:3306: bind: address already in useと出た場合<a href="https://qiita.com/shun198/items/ab6eca4bbe4d065abb8f">こちらの記事</a>をご参照くださいませ。</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="④./vendor/bin/sail composer require laravel/breeze"></H5TitleComponent>
           <p>laravel/breezeパッケージを追加</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="⑤./vendor/bin/sail artisan breeze:install"></H5TitleComponent>
           <p>breezeをインストール</p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="⑥./vendor/bin/sail artisan migrate"></H5TitleComponent>
           <p>マイグレーションファイルの内容をデータベースに反映。ユーザー認証に必要な4つのテーブルが自動的に作成される。</p>
          </aside>

          <aside>
          <H5TitleComponent h5Title="⑦http://localhost/を確認"></H5TitleComponent>
          <p>下記画像のように表示されたらOK</p>
          <p>※phpMyAdminを開くのはhttp://localhost:8080/</p>
          <Image src={Laravel2Pic1} alt="laravelPic"></Image>
          </aside>
        </article>

        {/* 用語集 */}
        <article>
            <H2TitleComponent h2Title="用語集"></H2TitleComponent>
            
            <aside>
                <H5TitleComponent h5Title="ルートモデルバインディング"></H5TitleComponent>
                <p><a href="https://ensei1375.com/laravel-route-modelbinding/" target="blank">こちら</a>の記事を参照</p>
            </aside>

            <aside>
                <H5TitleComponent h5Title="依存注入"></H5TitleComponent>
                <p>あるクラスが依存している別のオブジェクトを外部から渡すこと</p>
            </aside>

            <aside>
                <H5TitleComponent h5Title="old関数"></H5TitleComponent>
                <p>old({`"name属性の値","デフォルトの値"`})</p>
                <p>デフォルトではデータベースに保存されている値を表示する。バリデーションエラーのときはエラー前の内容を表示する。</p>
            </aside>
        </article>
      </section>
    </>
  );
}
export default Laravel2;
