

import { useState } from "react";
import Button from "../buttons/Button";
import styles from "./EmpRow.module.scss";
import { RESOURCE } from "../../utils/contants";
import Modal from "../modal/Modal";

export default function EmpRow({data, onEdit, onDelete}){

    const [showSubmitModal, setSubmitModal] = useState(false);
    const [showDiscardModal, setDiscardModal] = useState(false);

    const handleEdit = (e) =>{
        e.preventDefault();
        setSubmitModal(true);
    }

    function handleClose (e) {
        setSubmitModal(false);
        setDiscardModal(false);
    }

    function handleDiscardYes (e) {
        e.preventDefault();
        setDiscardModal(false);
        onDelete((data["_id"]));

    }

    const handleDelete = (e) =>{
        e.preventDefault();
        setDiscardModal(true);
    }

    function handleSubmitYes(e){
        onEdit((data["_id"]));
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
        <div className={styles.container}>
                {showDiscardModal && <Modal
                    className={styles.modal} 
                    dialogText={RESOURCE.SUBMIT_TEXT} 
                    onNo={handleClose} 
                    onYes={handleDiscardYes} />}
                {showSubmitModal && <Modal 
                    className={styles.modal} 
                    dialogText={RESOURCE.SUBMIT_TEXT} 
                    onNo={handleClose} 
                    onYes={handleSubmitYes} />}
    </div></>);
}
