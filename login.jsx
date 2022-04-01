import React from 'react'

const Login = () => {
  return (
    <main>
    <h2 id ="login">Login</h2>
    <form className='loginFormContainer'>

      <label for ="email" className='loginInput'>Email</label>
      <input type ="text" id ="email" name = "email" className='loginInput'>
      </input>

      <label for ="password" className='loginInput'> Password</label>
      <input type = "text" id = "password" className='loginInput'>         
      </input>
      
      <input type = "submit" id = "submit" className='loginSubmit'></input>
    </form>
  </main>
  )
}

export default Login