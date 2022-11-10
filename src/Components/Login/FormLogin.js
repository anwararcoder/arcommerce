import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.config';

const FormLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const login = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setLoading(false);
            toast.success("Account Login Successfully")
            navigate('/dashboard')

        } catch (error) {
            setLoading(false);
            
            toast.error("Something went wrong")
        }
    }

    return (
        <div className='row'>
            <div className="col-md-6 offset-md-3">
                {
                    loading ? (<h2 className="no-products">Loading.....</h2>) : (<form className='row form-checkout form-login' onSubmit={login}>
                        <div className='col-md-12'>
                            <div className='item'>
                                <input value={email} onChange={event => setEmail(event.target.value)} type="email" name="email" placeholder="Enter Your Email" required />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='item'>
                                <input value={password} onChange={event => setPassword(event.target.value)} type="password" name="password" placeholder="Enter Your password" required />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='item'>
                                <button type='submit' className="btn btn-3">Login</button>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='item'>
                                <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
                            </div>
                        </div>
                    </form>)
                }

            </div>
        </div>

    )
}

export default FormLogin