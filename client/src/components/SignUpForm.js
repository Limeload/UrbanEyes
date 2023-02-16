import { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
                    history.push('/')
                }
            })
        setUsername("")
        setEmail("")
        setPassword("")
        setLocation("")
    }

    return (
        <div>
            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="name">Username</label>
                    <div className='col-sm-8'>
                        <input
                            className='form-control'
                            required
                            type="text"
                            name="name"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="email">Email</label>
                    <div className='col-sm-8'>
                        <input
                            className='form-control'
                            required
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="password">Password</label>
                    <div className='col-sm-8'>
                        <input
                            className='form-control'
                            required
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='form-group row mx-5 my-2'>
                    <label className='col-sm-2 col-form-label' htmlFor="location">Location</label>
                    <div className='col-sm-8'>
                        <input
                            className='form-control'
                            required
                            type="text"
                            name="location"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </div>
                </div>

                <button className='btn btn-secondary' type="submit">Create Account</button>
            </form>
        </div>
    )
}

export default SignUpForm;
