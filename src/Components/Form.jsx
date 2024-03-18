import React, { useState } from 'react'

const Form = () => {
    let [state,setState] = useState({name:"" ,age:"" ,email:"" ,phone:""})

    let [newstate,setNewState]=useState({})


    function handleChange(e){
        setState((preval) => {
            
            if(e.target.name === "name"){
                return {...preval,name:e.target.value}
               // return {name:e.target.value ,age:preval.age,email:preval.email,phone:preval.phone}
            }
            else if(e.target.name ==="age "){
                return {...preval,age:e.target.value} //spread operator
              //  return {name:preval.name ,age:e.target.value ,email:preval.email,phone:preval.phone}
            }
            else if(e.target.name === "email"){
                return {name:preval.name ,age:preval.age ,email:e.target.value,phone:preval.phone}
            }
            else if (e.target.name ==="phone"){
                return {name:preval.name ,age:preval.age ,email:preval.email,phone:e.target.value}
            }
        })
        
    }
    function handleSubmit(e){
        setNewState(state)
        e.preventDefault()
    }
  return (
    <>
    <form className='reg-form' onSubmit={handleSubmit}>
        <div>
            <input onChange={handleChange} type="text" placeholder='name' name='name' />
        </div>
        <div>
        <input onChange={handleChange} type="text" placeholder='age' name='age' />
        </div>
        <div>
        <input onChange={handleChange} type="text" placeholder='email' name='email' />
        </div>
        <div>
        <input onChange={handleChange} type="text" placeholder='phone' name='phone' />
        </div>
        <div>
            <button className='reg-btn' type="submit">Register</button>
        </div>


    </form>
    <h1> Name : {newstate.name } </h1>
    <h1> Age : {newstate.age}</h1>
    <h1> Email : {newstate.email}</h1>
    <h1> Phone : {newstate.phone}</h1>

    </>
  )
}

export default Form