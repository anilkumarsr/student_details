import React from 'react'

const Loginform = () => {

    function handleSubmit(e){
        let firstname = e.target.fname.value 
        let lastname = e.target.lname.value 
        let username = e.target.user_name.value 
        let password = e.target.pass.value 
        console.log(firstname,lastname,username,password);

        e.preventDefault()
    }
  return (
    <>
  
    <form className='reg-form' onSubmit={handleSubmit}>
    <h1>Register form</h1> <br />
        <div>
            <input type="text" placeholder='firstname' name='fname' />
        </div>
        <div>
            <input name='lname' type="text"  placeholder='lastname'/>
        </div>
        <div>
            <input name='user_name' type="text" placeholder='username' />
        </div>
        <div>
            <input name='pass' type="password" placeholder='password' />
        </div>
        <div>
            <button  className='reg-btn' type="submit">Register</button>
        </div>
    </form>

    </>
  )
}

export default Loginform