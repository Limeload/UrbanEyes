import { useState } from 'react'
import { Button, Form} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import register from "../images/register.jpeg";


function SignUpForm({ onLogIn }) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    let history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        let signupInput = {
            username: username,
            email: email,
            password: password,
            location: location,
        }
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(signupInput)
        })
            .then(res => {
                if(res.ok) {
                    res.json()
                    .then(newUser => onLogIn(newUser))
                    history.push('/dashboard')
                }
            })
        setUsername("")
        setEmail("")
        setPassword("")
        setLocation("")
    }

    return (
        <div className="login-form">
            <div className='form'>
            <Link className='link' exact to='/'><h1>Urbaneyes</h1></Link>
            <br />
        <h1 className='text-1'>Create an Account</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label> Create Username</Form.Label>
                <Form.Control
                required
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange= {(e) => setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
                <Form.Control
                required
                type="email"
                placeholder="example@gmail.com"
                id="email"
                autoComplete="off"
                value={email}
                onChange= {(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Create Password</Form.Label>
                <Form.Control
                required
                type="text"
                id="password"
                autoComplete="off"
                value={password}
                onChange= {(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Location</Form.Label>
                <Form.Control
                required
                type="text"
                name="location"
                value={location}
                onChange={e => setLocation(e.target.value)}/>
        </Form.Group>
        <Button type="submit">Create Account</Button>
        </Form>
        <br />
        <div>
       Already have an account? <Link exact to='/login'>Login instead</Link>
            </div>
            </div>
            <div className='image'>
                <img src={register} alt={register} />
            </div>
        </div>
    )
}

export default SignUpForm;
