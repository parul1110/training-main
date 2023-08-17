import FormInput from '../formInput/FormInput';
import Button from '../buttons/Button.jsx';
import styles from './Form.module.scss'
import { useState } from 'react';

export default function Form({formInputs, formButtons, onSubmit, id, disable}){
    const inputs = formInputs;
    const [formInp, setForm] = useState({domain: "Testing"});
    const inputList = inputs.map((input)=>{
        return <FormInput props={input} key={input.name} disable={disable} onChange = {handleChange}/>
    });

    const buttonList = formButtons.map((input)=>{
        return <div className={"form-group " + styles.button} ><Button type={input.type} className={input.cssVal} text={input.text} key={input.text} onClick={input.action} disable = {disable}>{input.text}</Button></div>;
    });

    function handleChange(e){
        setForm({...formInp, [e.target.name]: e.target.value});
        console.log(formInp);
    }

    function handleSubmit(e){
        e.preventDefault();
        onSubmit(formInp);
    }

    return(<>
        <form className={`${styles.form}`} id={id} onSubmit={handleSubmit}>
        {inputList}
        <br />
        <div className={"form-group " + `${styles.select_option}`}>
        <select id="Domain" name="domain" placeholder="DOMAIN" onChange={handleChange}>
             <option className={`${styles.option}`} name = "Testing" value = "Testing" key = "Testing">Testing</option>
             <option className={`${styles.option}`} name = "Development" value = "Development" key = "Development">Development</option>
             <option className={`${styles.option}`} name = "Operations" value = "Operations" key = "Operations">Operations</option>
             <option className={`${styles.option}`} name = "Accounts" value = "Accounts" key = "Accounts">Accounts</option>
        </select>
        </div>

        <br />
        <br />
        
        {buttonList}
        <br />
        </form>
    </>);
}
