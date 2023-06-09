import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { useAppDispatch } from '../../app/store';
import { login } from '../../app/slices/userSlice';
import { Container, Form } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <Container >
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <Button
          type="submit"
          variant="contained"
        >Login</Button>
      </Form>
      <br />
      <Typography variant="h6" component="h2">
        or just <Link to="/register">Register</Link>
      </Typography>
    </Container>
  );
};

export default Login;
