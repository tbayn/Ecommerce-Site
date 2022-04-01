import React from 'react'

const register = () => {
  return (
    <main >
    <h2 id = "register">Register</h2>
    <form className='loginFormContainer'>
      <label for = "firstName" className='loginInput'>First Name</label>
      <input type = "text" id = "firstName" name = "firstName" className='loginInput'> 

      </input>

      <label for ="email" className='loginInput'>Email</label>
      <input type ="text" id ="email" name = "email" className='loginInput'>
      </input>

      <label for ="password" className='loginInput' > Password</label>
      <input type = "text" id = "password"  className='loginInput'>         
      </input>
      
      <input type = "submit" id = "submit" className='loginInput'></input>
    </form>
  </main>
  )
}

export default register