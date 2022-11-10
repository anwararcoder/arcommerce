import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth } from './../../firebase.config.js';
import { storage } from './../../firebase.config.js';
import { db } from './../../firebase.config.js';
import { toast } from 'react-toastify';

const FormSignup = () => {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const storageRef = ref(storage, `images/${Date.now() + userName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => { toast.error(error.message) },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(user, {
                            displayName: userName,
                            photoURL: downloadURL,
                        })
                        await setDoc(doc(db, 'users', user.uid), {
                            uid: user.uid,
                            displayName: userName,
                            email,
                            photoURL: downloadURL,
                        })
                    })
                }
            )
            setLoading(false)
            toast.success("Account Added Successfully")
            navigate('/login')
        } catch (error) {
            setLoading(false)
            toast.error("Something went wrong")
        }
    }

    return (
        <div className='row'>
            <div className="col-md-6 offset-md-3">
                {
                    loading ? (<h2 className="no-products">Loading.....</h2>) : (<form className='row form-checkout form-login' onSubmit={signup}>
                        <div className='col-md-12'>
                            <div className='item'>
                                <input value={userName} onChange={event => setUserName(event.target.value)} type="text" name="username" placeholder="Enter Your UserName" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='item'>
                                <input value={email} onChange={event => setEmail(event.target.value)} type="email" name="email" placeholder="Enter Your Email" />
                            </div>
                        </div>

                        <div className='col-md-12'>
                            <div className='item'>
                                <input value={password} onChange={event => setPassword(event.target.value)} type="password" name="password" placeholder="Enter Your password" required />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='item'>
                                <input type="file" onChange={event => setFile(event.target.files[0])} name="file" required />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='item'>
                                <button type='submit' className="btn btn-3">Signup</button>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='item'>
                                <p>Already have an account? <Link to='/login'>Login an account</Link></p>
                            </div>
                        </div>
                    </form>)
                }
            </div>
        </div>
    )
}

export default FormSignup