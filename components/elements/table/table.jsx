import { Frame } from '@/components/layout/layout';
import Style from './Table.module.css';

const Table = (props) => {

    return (

        <>

            
            <td id={props.style} className={Style.cellItem} onClick={props.onClick}><p>{props.cell}</p></td>

        </>

    )

}

export default Table;