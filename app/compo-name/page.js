import styles from "./compo-name.module.scss";
function CompoName(){
    return(
        <>
                <h1>コンポーネント命名法則</h1>
                <ul>
                    <li>汎用的に使用できそうなコンポーネントであればDefaultButtonやPrimaryButtonのような汎用的な名前で作成 (特定のページでしか使用できない名前にしない)</li>
                    <li>複数の単語で構成された名前を付ける際には、ケバブケース(kebab-case)での記法とパスカル(PascalCase)での記法が主に利用される</li>
                </ul>
        </>
    )
}
export default CompoName