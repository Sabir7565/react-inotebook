import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    let navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const bodyData = new FormData(e.target);
        const ajax = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: bodyData.get('email'), password: bodyData.get('password')})
        })
        const response = await ajax.json();
        if(response.success === true){
            localStorage.setItem('token', response.authtoken);
            props.alert('Logged in successfully', 'success');
            navigate('/');
            
        }else{
            props.alert(response.msg, 'danger');
        }
    }
    
    return (
        <div className='container my-5 w-50'>
            <h3 className='text-center my-5'>Login iNotebook</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login;