import React from 'react';

const Loginform = () => {
    function handleSubmit(e) {
        let username = e.target.user_name.value;
        let password = e.target.pass.value;
        console.log(username, password);

        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <form className='reg-form' onSubmit={handleSubmit}>
                        <h1 className="text-center">Log In</h1>
                        <div className="mb-3">
                            <input name='user_name' type="text" className="form-control" placeholder='Username' />
                        </div>
                        <div className="mb-3">
                            <input name='pass' type="password" className="form-control" placeholder='Password' />
                        </div>
                        <div className="text-center">
                            <button className='btn btn-primary' type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Loginform;
