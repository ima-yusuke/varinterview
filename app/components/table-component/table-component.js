import styles from "./table-component.module.scss";
function TableComponent({tableTitle,theadData,tbodyData}){
    return(
        <>
            <div id={styles.parentDiv}>
            <h4>{tableTitle}</h4>
            <table border="1">
                <thead>
                    <tr>
                       {theadData.map((value)=>{
                        return <th>{value}</th>
                       })}
                    </tr>
                </thead>
                <tbody>
                    {tbodyData.map((value)=>{
                        return <tr>
                            {value.map((val)=>{
                               return <td>{val}</td>
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