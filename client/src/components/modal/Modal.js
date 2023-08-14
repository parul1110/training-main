import Button from "../buttons/Button";
import styles from './Modal.module.scss';
import { RESOURCE } from "../../utils/contants";

export default function Modal({dialogText, onNo, onYes}){

return (
    <div className={styles.modal_dialog}>   
     <div className={styles.modal_content}>
        {dialogText}
        </div>
        <div className={styles.modal_footer}>
          <Button className={styles.button} text="No" onClick ={onNo} >{RESOURCE.CANCEL}</Button>
          <Button className={styles.button} text="Yes" onClick ={onYes} >{RESOURCE.CONFIRM} </Button>
        </div>
    </div>
);
}
