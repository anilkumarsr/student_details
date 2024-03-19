import React from 'react';

const Loginform = () => {
    function handleSubmit(e) {
        let firstname = e.target.fname.value;
        let lastname = e.target.lname.value;
        let username = e.target.user_name.value;
        let password = e.target.pass.value;
        console.log(firstname, lastname, username, password);

        e.preventDefault();
    }

    return (
        <>
            <form className='reg-form' onSubmit={handleSubmit}>
                <h1>Register form</h1>
                <br />
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='First Name' name='fname' />
                </div>
                <div className="mb-3">
                    <input name='lname' type="text" className="form-control" placeholder='Last Name' />
                </div>
                <div className="mb-3">
                    <input name='user_name' type="text" className="form-control" placeholder='Username' />
                </div>
                <div className="mb-3">
                    <input name='pass' type="password" className="form-control" placeholder='Password' />
                </div>
                <div>
                    <button className='btn btn-primary' type="submit">Register</button>
                </div>
            </form>
        </>
    );
};

export default Loginform;
