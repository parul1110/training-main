
import { useState, useEffect, useRef } from "react";
import Button from "../../components/buttons/Button";
import { PAGE_ROUTES, RESOURCE } from "../../utils/contants";
import styles from "./EmployeeList.module.scss";
import { useNavigate } from "react-router-dom";
import DropDown from "../../components/dropDown/DropDown";
import { useDispatch, useSelector } from "react-redux";
import EmpRow from "../../components/row/EmpRow";
import { emptyForm, setForm } from "../../services/storage/empSlice";
import ExampleService from "../../services/api/exampleService";
import Modal from "../../components/modal/Modal";

export default function EmployeeList(){
    const service = new ExampleService();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showDropDown, setDropDown] = useState(false);
    const [showSubmitModal, setSubmitModal] = useState(false);
    const [showDiscardModal, setDiscardModal] = useState(false);

    const [empList, setEmp] = useState();
    const idRef = useRef();
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

    const onEdit = (e, id) =>{
        setSubmitModal(true);
        idRef.current = id;
    }

    const onDelete = (e, id) =>{
        //dispatch(removeEmp(id));
        setDiscardModal(true);
        idRef.current = id;
    }

    function handleClose (e) {
        setSubmitModal(false);
        setDiscardModal(false);
    }

    function handleDiscardYes (e) {
        e.preventDefault();
        setDiscardModal(false);
        service.delData(idRef.current);
        getEmployees();

    }

    function handleSubmitYes(e){  
        dispatch(setForm(idRef.current));
        navigate(PAGE_ROUTES.ADD);
    }
    
    const dropDown = () => {
        let show = showDropDown;
        setDropDown(!show);
    }
    const nav = () =>{
        dispatch(emptyForm());
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
    </div>

    </div>);
}
