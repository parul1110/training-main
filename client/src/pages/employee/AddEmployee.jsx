import Form from '../../components/form/Form';
import { useEffect, useRef, useState } from 'react';
import Modal from '../../components/modal/Modal';
import { PAGE_ROUTES, RESOURCE } from "../../utils/contants";
import styles from './AddEmployee.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addEmployee, emptyForm, updateEmployee} from '../../services/storage/empSlice';
import ExampleService from '../../services/api/exampleService';

export default function AddEmployee(){
    const buttons = [
        {type: "submit", cssVal: "secondary-btn", text: "DISCARD", action: handleDiscard},
        {type: "submit", cssVal: "primary-btn", text: "SUBMIT", action: handleSubmit}
    ];
    const prefilledForm = useSelector(state=>state.app.formData);
    const isEdit = useRef(false);
    const service = new ExampleService();
    const [inputs, setInput] = useState([
    //let inputs = [
        {name: "First Name", type: "text", placeHolder: "First Name", caption: "firstName", value: ""},
        {name: "Last Name", type: "text", placeHolder: "Last Name", caption: "lastName", value: ""},
        {name: "Email", type: "email", placeHolder: "Enter Email...", caption: "email", value: ""},
        {name: "Phone no", type: "text", placeHolder: "Phone no", caption: "phoneNo", value: ""},
    ]);
    useEffect(()=>{
        if(prefilledForm && prefilledForm.length>0){
            isEdit.current = prefilledForm;
            // let a = inputs.map((i)=>{
            //     i.value= prefilledForm[0][i.name];
            //     return i;
            // })
            var promise = service.getEmp(prefilledForm);
            promise.then((Response)=>{
                let a = inputs.map((i)=>{
                        i.value= Response[i.caption];
                        return i;
                    })
                setInput(a);
            })
        } else {
            let a = inputs.map((i)=>{
                i.value= "";
                return i;
            })
            setInput(a);
        }
    }, [prefilledForm]);

    const [showSubmitModal, setSubmitModal] = useState(false);
    const [showDiscardModal, setDiscardModal] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        setSubmitModal(true);
    }

    function handleDiscard (e) {
        e.preventDefault();
        setDiscardModal(true);
    }

    function handleClose (e) {
        setSubmitModal(false);
        setDiscardModal(false);
    }

    function handleDiscardYes (e) {
        e.preventDefault();
        setDiscardModal(false);
        dispatch(emptyForm());
        document.getElementById("login").reset();

    }

    function handleSubmitYes(e){
        e.preventDefault();
        setSubmitModal(false);
        let a = {};
        inputs.map((i)=>{
            let ele = document.getElementById("login").elements[i.name].value;    
            if(ele===""){
                console.log("Complete the form");
                setSubmitModal(false);
                return;
            }
            return a[i.caption] =  ele;
        });
        let ele = document.getElementById("login").elements.Domain.value;   
        a["domain"]=ele;
        if(isEdit.current){
            dispatch(emptyForm());
            service.updateEmp(isEdit.current, JSON.stringify(a));
            //dispatch(updateEmployee(a));
        }else{
            //dispatch(addEmployee(a));
            service.addData(JSON.stringify(a));
        }
        isEdit.current = false;
        navigate(PAGE_ROUTES.LIST);
    }

    return(<div className={styles.container}>
        <h3>ADD EMPLOYEE</h3>
        <Form id="login" onSubmit={handleSubmit} formInputs = {inputs} formButtons={buttons} />
        {showDiscardModal && <Modal 
            dialogText={RESOURCE.SUBMIT_TEXT} 
            onNo={handleClose} 
            onYes={handleDiscardYes} />}
        {showSubmitModal && <Modal 
            dialogText={RESOURCE.SUBMIT_TEXT} 
            onNo={handleClose} 
            onYes={handleSubmitYes} />}
    </div>
);
}
