import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  const navigate = useNavigate();


  const handSubmit = async (e) => {
    e.preventDefault();
    const bodyData = new FormData(e.target);
    if (bodyData.get('password') === bodyData.get('cpassword')) {
      const ajax = await fetch('http://localhost:5000/api/auth/createuser', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: bodyData.get('name'),
          email: bodyData.get('email'),
          password: bodyData.get('password'),
        })
      })

      const response = await ajax.json();
      if (response.success === true) {
        localStorage.setItem('token', response.authtoken);
        navigate('/');
        props.alert("Account successfully created", 'success');
      } else {
        props.alert(response.msg, 'danger');
      }
    } else {
      props.alert("password and confirm password did not match.", 'danger');
      
    }

  }
  return (
    <div className='container my-5 w-50'>
      <h3 className='text-center my-3'>Signup iNotebook</h3>
      <form onSubmit={handSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup;