import { useDispatch, useSelector } from "react-redux";
import styles from "./DropDown.module.scss";
import Button from "../buttons/Button";
import { PAGE_ROUTES } from "../../utils/contants";
import { useNavigate } from "react-router-dom";
import { logout } from '../../services/storage/empSlice';
import AuthService from "../../services/api/authService";

export default function DropDown(){
    const service = new AuthService();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state=>state.app.userInfo);
    const nav = () =>{
        var promise = service.logout();
        promise.then((response)=>{
            dispatch(logout());
            localStorage.clear();
            navigate(PAGE_ROUTES.LOGIN);
        });
    }
    return (<div className={styles.dropdown}>
        {user.email}
        <Button className={styles.logout_btn} onClick = {nav}>Logout</Button>
    </div>);
}