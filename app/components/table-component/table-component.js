import styles from "./table-component.module.scss";
function TableComponent({tableTitle,theadData,tbodyData}){
    return(
        <>
            <div id={styles.parentDiv}>
            <h4>{tableTitle}</h4>
            <table border="1">
                <thead>
                    <tr>
                       {theadData.map((value,key)=>{
                        return <th key={key}>{value}</th>
                       })}
                    </tr>
                </thead>
                <tbody>
                    {tbodyData.map((value,key)=>{
                        return <tr key={key}>
                            {value.map((val,key)=>{
                               return <td key={key}>{val}</td>
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
        </>
    )
}
export default TableComponent