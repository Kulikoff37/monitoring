import React, { useState } from 'react';
import {
  Box, 
  Form,
  Button 
} from 'react-bulma-components';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../app/store/userSlice';
import { useDispatch } from 'react-redux';
import './LoginPage.scss';

const LoginPage = () => {
  const [login, setLoging] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser({ userName: login, isAuth: true }));
    history('/notifications');
  }

  return (
    <div className="mon-login-page">
      <Box style={{ width: 400, margin: 'auto' }}>
        <form>
          <Form.Field>
            <Form.Label>Логин</Form.Label>
            <Form.Control>
              <Form.Input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLoging(e.target.value)}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field>
            <Form.Label>Пароль</Form.Label>
            <Form.Control>
              <Form.Input 
                type="password" 
                placeholder="*************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Control>
          </Form.Field>
          <Button.Group align="right">
            <Button
              onClick={onSubmit}
              color="primary">
                Войти
            </Button>
          </Button.Group>
        </form>
      </Box>
    </div>
  )
}

export default LoginPage;
