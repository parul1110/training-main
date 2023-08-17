import styles from './FormInput.module.scss';

export default function FormInput({props, disable, onChange}){
const { type, name, value, placeHolder, className, id } = props;

return(<>
        <div className={"form-group " + styles.container}>
            <input type={type} 
                className={className ? "form-control " + className : "form-control"} 
                id={id} 
                name={name}
                disabled = {disable}
                placeholder={placeHolder} 
                onChange = {onChange}
                defaultValue = {value} />
        </div>
    </>);
}