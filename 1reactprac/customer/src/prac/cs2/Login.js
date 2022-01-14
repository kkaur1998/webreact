import React from 'react';
class Login extends React.Component{
    render(){
        return(
            <div className='border container form p-0 w-50 align-items-center'>
                <h1 className='form-title p-0 form-title m-0'>Defect Tracker</h1>
                <div className='bold login p-0'>Login</div>
                <div className='border rounded-end form-body container shadow w-75 m-auto my-3 align-items-center ' >
                    <div className='row g-3 m-3'>
                        <label className='form-label my-2 col'>Username: </label>
                        <input className='form-control my-2 col d-flex w-50' placeholder="Username" type="text" id="username"/>   
                    </div>
                    <div className='row g-3 m-3'>
                        <label className='form-label my-2 col'>Password: </label>
                        <input className='form-control my-2 col d-flex w-50' id="password" placeholder='password' type="password" id="password"/>   
                    </div> 
                </div>                
            </div>
        )
            
    }
}
export default Login;