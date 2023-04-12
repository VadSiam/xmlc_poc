import React, { useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useAppDispatch } from '../../app/store';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../app/slices/userSlice';
import { Container, Form } from '../Login/styles';

const Registration: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCompanyAdmin, setIsCompanyAdmin] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(name, email, password, isCompanyAdmin, navigate));
  };

  return (
    <Container>
      <h2>Registration</h2>
      <Form onSubmit={handleSubmit}>
        <TextField
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <TextField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={isCompanyAdmin}
              onChange={(e) => setIsCompanyAdmin(e.target.checked)}
              name="isAdmin"
              color="primary"
            />
          }
          label="Company admin"
        />
        <Button
          variant="contained"
          type="submit"
        >Register</Button>
      </Form>
      <br />
      <Typography variant="h6" component="h2">
        or just <Link to="/login">Login</Link>
      </Typography>
    </Container>
  );
};

export default Registration;
