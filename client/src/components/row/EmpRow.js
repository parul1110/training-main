import Button from "../buttons/Button";
import styles from "./EmpRow.module.scss";

export default function EmpRow({data, onEdit, onDelete}){

    const handleEdit = (e) =>{
        e.preventDefault();
        onEdit(e, data["_id"]);
    }

    const handleDelete = (e) =>{
        e.preventDefault();
        onDelete(e, (data["_id"]));
    }

    return (<>
                    <tr>
                    <td>{data["firstName"] + " " + data["lastName"]}</td>
                    <td>{data["email"]}</td>
                    <td>{data["phoneNo"]}</td>
                    <td>{data["domain"]}</td>
                    <td><Button className={styles.btn} onClick={handleEdit}>Edit</Button></td>
                    <td><Button className={styles.btn} onClick={handleDelete}>Delete</Button></td>
                </tr>
        </>);
}
