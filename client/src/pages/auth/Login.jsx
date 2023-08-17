import React , {useState} from 'react';
import styles from './Login.module.scss';
import Button from '../../components/buttons/Button';
import Input from '../../components/inputs/Input';

import ExampleService from '../../services/api/exampleService';
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '../../utils/contants';
import { useDispatch } from 'react-redux';
import { addUser } from '../../services/storage/empSlice';

const Login = () => {
  const service = new ExampleService();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigateToDestination = (state) => {
    navigate(PAGE_ROUTES.ADD, {state})
    dispatch(addUser(state));
}

  const login = () => {
    const body = {
      username, password
    }
    navigateToDestination(body)
  }

  return (
    <div className={styles.container}>
      <h3>WELCOME</h3>
      <Input
        label="Username"
        type="text"
        name="username"
        value = {username} 
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
      <Button className='btn' onClick = {login} >Login</Button>
    </div>
  );
}

export default Login;