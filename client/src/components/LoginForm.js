import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form} from 'react-bootstrap';

function LoginForm ({ onLogIn}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })
        .then(res => res.json())
            .then(loggedInUser => {
                onLogIn(loggedInUser)
                history.push('/dashboard')
            })
        setUsername("")
        setPassword("")
    }

    return(
        <div>
            <h1>Log In</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
                <Form.Control
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange= {(e) => setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                type="text"
                id="password"
                autoComplete="off"
                value={password}
                onChange= {(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button type="submit">Log In</Button>
        </Form>
        <br />
        <div>
         Don't have an account yet? <Link exact to='/signup'>Sign up now!</Link>
            </div>
        </div>
    )
}

export default LoginForm;
