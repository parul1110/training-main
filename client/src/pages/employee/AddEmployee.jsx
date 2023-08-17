import Form from '../../components/form/Form';
import { useEffect, useRef, useState } from 'react';
import Modal from '../../components/modal/Modal';
import { PAGE_ROUTES, RESOURCE } from "../../utils/contants";
import styles from './AddEmployee.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addEmployee, emptyForm, updateEmployee} from '../../services/storage/empSlice';
import ExampleService from '../../services/api/exampleService';

const initialInputs = [
    {caption: "First Name", type: "text", placeHolder: "First Name", name: "firstName", value: ""},
    {caption: "Last Name", type: "text", placeHolder: "Last Name", name: "lastName", value: ""},
    {caption: "Email", type: "email", placeHolder: "Enter Email...", name: "email", value: ""},
    {caption: "Phone no", type: "text", placeHolder: "Phone no", name: "phoneNo", value: ""},
];

export default function AddEmployee(){
    const service = new ExampleService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buttons = [
        {type: "submit", cssVal: "secondary-btn", text: "DISCARD", action: handleDiscard},
        {type: "submit", cssVal: "primary-btn", text: "SUBMIT"}
    ];
    const isEdit = useRef(false);
    const formData = useRef();
    const [inputs, setInput] = useState(initialInputs);
    const [showSubmitModal, setSubmitModal] = useState(false);
    const [showDiscardModal, setDiscardModal] = useState(false);

    const prefilledForm = useSelector(state=>state.app.formData);

    useEffect(()=>{
        if(prefilledForm && prefilledForm.length>0){
            isEdit.current = prefilledForm;
            // let a = inputs.map((i)=>{
            //     i.value= prefilledForm[0][i.name];
            //     return i;
            // })
            var promise = service.getEmp(prefilledForm);
            promise.then((Response)=>{
                formData.current = Response;
                let a = inputs.map((i)=>{
                        i.value= Response[i.name];
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

    function handleSubmit(form){
        if(formData.current){
            Object.keys(form).map((keys, index)=>{
                formData.current[keys] = form[keys];
            });
            delete formData.current["__v"];
            delete formData.current["_id"];

        }else{
            formData.current = form;
        }
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
        if(isEdit.current){
            dispatch(emptyForm());
            service.updateEmp(isEdit.current, JSON.stringify(formData.current));
            //dispatch(updateEmployee(a));
        }else{
            //dispatch(addEmployee(a));
            service.addData(JSON.stringify(formData.current));
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
