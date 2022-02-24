import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Signup.css';
import validation from './validation';
export const Signup = () => {
  const navigate = useNavigate();


  //manage form values
  const [formValues, setFormvalues] = useState({ email: "", password: "", utype: "" });
  //manage errors
  const [formErrors, setFormErrors] = useState({})
  //flag for successuful submit
  const [isSubmit, setIsSubmit] = useState(false);
  //maanage field change
  const handleChange = (event) => {
    //   console.log(event.target);
    //destructuring
    const { name, value } = event.target;
    //spread syntax..the value typing is get appended

    setFormvalues({ ...formValues, [name]: value })
    console.log(formValues);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validation(formValues));
    setIsSubmit(true);
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert('validation successful')
      registerUser();
    }
  }, [formErrors])

  async function registerUser() {
    const utype = formValues.utype;
    const email = formValues.email;
    const password = formValues.password;

    //    const response = await fetch(`https://smith-blog.herokuapp.com/api/register`, {
    // const response = await fetch(`https:///api/register`, {
    const response = await fetch(`http://localhost:5000/api/register`, {
      method: 'post',
      body: JSON.stringify({ email, password, utype }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response, "response");
    if (response) {
      alert('Successfullly Registerd to ICTAK Trainer Application ');
      localStorage.setItem('email', email);
      navigate("/enroll", { replace: true });


    }
    else {
      alert('error... ');

    }

  }
  return (
    <div>
      {/*sign up*/}
      <div className="signup">
        <form onSubmit={handleSubmit}><br /><br />
          <label className='heading1' aria-hidden="true">Trainer Sign up</label><br /><br /><br />
          <label>User Type</label> &nbsp;&nbsp;
          <input type="text" name="utype" placeholder="trainer" required="" value={formValues.utype} onChange={handleChange}/>
          <br /><br />
          <p className='error'>{formErrors.username}</p><label>Email Id</label> &nbsp;&nbsp; &nbsp;&nbsp;
          <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
          <p className='error'>{formErrors.email}</p> <br />
          <label>Password</label> &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
          <p className='error'>{formErrors.password}</p> <br /><br />
          <button>Sign up</button>
        </form>
      </div>
      {/*sign up*/}
      {/* <div className="login">
              <form>
                  <label for="chk" aria-hidden="true">Login</label>
                  <input type="email" name="email" placeholder="Email" required=""/>
                  <input type="password" name="password" placeholder="Password" required=""/>
                  <button>Login</button>
              </form>
    </div>*/}
      <br /><br /><br />
    </div>
  )
}
