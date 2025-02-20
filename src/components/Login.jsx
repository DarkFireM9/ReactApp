import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Los campos no deben estar vacíos");
      return;
    }
    if (login({ username, password })) {
      alert("Login exitoso");
      setUsername("");
      setPassword("");
      navigate("/items");
    } else {
      alert("Login fallido");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box
        margin="auto"
        flexDirection="column"
        display="flex"
        width={400}
        marginTop={"20px"}
      >
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          margin="normal"
          type="password"
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
