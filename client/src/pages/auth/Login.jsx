import React , {useState} from 'react';
import styles from './Login.module.scss';
import Button from '../../components/buttons/Button';
import Input from '../../components/inputs/Input';

import AuthService from '../../services/api/authService';
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '../../utils/contants';
import { useDispatch } from 'react-redux';
import { addUser } from '../../services/storage/empSlice';

const Login = () => {
  const service = new AuthService();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, showError] = useState(false);

  const navigateToDestination = (state) => {
    var promise = service.login(state);
    promise.then((Response)=>{
        if(Response && Response.status===401){
          showError(true);
        }else{
          localStorage.setItem('token', Response.accessToken);
          navigate(PAGE_ROUTES.ADD, {state})
          dispatch(addUser(state));
        }
    });

}

  const login = () => {
    const body = {
      email, password
    }
    navigateToDestination(body)
  }

  return (
    <div className={styles.container}>
      <h3>WELCOME</h3>
      <Input
        label="Username"
        type="text"
        name="email"
        value = {email} 
        onChange={(e)=>setUsername(e.target.value)} 
        required
        placeholder = "USER ID"
        errorMessage = ""
        className='input'
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value = {password} 
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder = "PASSWORD"
        required
        className='input'
      />
      {error && <div className="error">Login Failed!</div>}
      <Button className='btn' onClick = {login} >Login</Button>
    </div>
  );
}

export default Login;