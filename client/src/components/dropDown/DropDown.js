import { useSelector } from "react-redux";
import styles from "./DropDown.module.scss";
import Button from "../buttons/Button";
import { PAGE_ROUTES } from "../../utils/contants";
import { useNavigate } from "react-router-dom";

export default function DropDown(){
    const navigate = useNavigate();
    const user = useSelector(state=>state.app.userInfo);
    const nav = () =>{
        navigate(PAGE_ROUTES.LOGIN);
    }
    return (<div className={styles.dropdown}>
        {user.username}
        <Button className={styles.logout_btn} onClick = {nav}>Logout</Button>
    </div>);
}