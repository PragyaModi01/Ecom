import React,{useState} from 'react'
import './Login.css';

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
  
    const collectData =async (e) => {
      e.preventDefault();
      console.log({name, email, phone, password});
      let result = await fetch('http://localhost:8080/register', {
        method:'post',
        body:JSON.stringify({name, email, phone, password}),
        headers:{
          'Content-Type':'application/json'
        },
      })
      result = await result.json()
      console.log(result)
    }
  return (
    <div>
      <div className='container'>
        <form className="myForm">
            <label className='field'>Fullname</label>
            <input type='text' name='username' id='username' className="myInput" value={name} onChange={(e) => setName(e.target.value)}></input>
            <label className='field'>Email</label>
            <input type='email' name='email' id='email' className="myInput" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label className='field'>Phone</label>
            <input type='number' name='phone' id='phone' className="myInput" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            <label className='field'>Password</label>
            <input type='password' autoComplete='off' name='Password' id='Password' className="myInput" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button  className='btn' onClick={collectData}>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Login
