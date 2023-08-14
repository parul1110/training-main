import FormInput from '../formInput/FormInput';
import Button from '../buttons/Button.jsx';
import styles from './Form.module.scss'

export default function Form({formInputs, formButtons, onSubmit, id, disable}){
    const inputs = formInputs;
    const inputList = inputs.map((input)=>{
        return <FormInput props={input} key={input.name}  disable={disable}/>
    });

    const buttonList = formButtons.map((input)=>{
        return <div className={"form-group " + styles.button} ><Button type={input.type} className={input.cssVal} text={input.text} key={input.text} onClick={input.action} disable = {disable}>{input.text}</Button></div>;
    });

    return(<>
        <form className={`${styles.form}`} id={id} onSubmit={onSubmit}>
        {inputList}
        <br />
        <div className={"form-group " + `${styles.select_option}`}>
        <select id="Domain" name="Domain" placeholder="DOMAIN">
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
