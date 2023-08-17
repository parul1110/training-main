import { useState, useEffect } from "react";
import Button from "../../components/buttons/Button";
import { PAGE_ROUTES } from "../../utils/contants";
import styles from "./EmployeeList.module.scss";
import { useNavigate } from "react-router-dom";
import DropDown from "../../components/dropDown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import EmpRow from "../../components/row/EmpRow";
import { setForm } from "../../services/storage/empSlice";
import ExampleService from "../../services/api/exampleService";

export default function EmployeeList(){
    const service = new ExampleService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //const list = useSelector(state=>state.app.listEmp);
    const [showDropDown, setDropDown] = useState(false);
    const [empList, setEmp] = useState();

    useEffect(()=>{
        getEmployees();
    }, []);

    function getEmployees() {
        var promise = service.getData();
        promise.then((response)=>{
        var emp = response.map((l)=>{
            return <EmpRow data={l} key={l["_id"]} onEdit={onEdit} onDelete={onDelete} />;
        });
        setEmp(emp);
    });
    }

    const onEdit = (id) =>{
        dispatch(setForm(id));
        navigate(PAGE_ROUTES.ADD, {id});
    }
    const onDelete = (id) =>{
        //dispatch(removeEmp(id));
        service.delData(id);
                getEmployees();

    }

    const dropDown = () => {
        let show = showDropDown;
        setDropDown(!show);
    }
    const nav = () =>{
        navigate(PAGE_ROUTES.ADD);
    }

    return (<div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.header_text}>LIST OF EMPLOYEES</div>
        <Button className={styles.btn} onClick = {dropDown} >|||</Button>
        {showDropDown && <DropDown />}
        </div>
        <div className={styles.add_header}>
        <Button className={styles.add_btn} onClick={nav} >ADD</Button>
        </div>
        <div className={styles.table}>
        {
            empList && empList.length > 0 && <table><tbody>
                <tr>
                    
                    <td>Name</td>
                    <td>Email ID</td>
                    <td>Phone No</td>
                    <td>Domain</td>
                    <td colSpan={2}>Actions</td>
                </tr>
                {empList}
                </tbody></table>
        }
        </div>
    </div>);
}