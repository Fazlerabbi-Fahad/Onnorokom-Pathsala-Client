import React from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, signInWithGoogle, signInGitHub, setLoading } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form.photourl.value;

        const profile = {
            displayName: name,
            photoURL: photoUrl
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                if (user.email) {
                    updateUserProfile(profile)
                        .then(result => {
                            const user = result.user;
                            if (user?.email) {
                                navigate(from, { replace: true })
                                setLoading(false)
                            }
                        })
                        .catch(error => console.error(error))
                }

            })
            .catch(error => console.error(error.message))

    }

    const handleGoogleSubmit = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                if (user?.email) {
                    navigate(from, { replace: true })
                    setLoading(false)
                }
            })
            .then(error => console.error(error))
    }

    const handleGitHubSubmit = () => {
        signInGitHub()
            .then(result => {
                const user = result.user;
                if (user?.email) {
                    navigate(from, { replace: true })
                    setLoading(false)
                }
            })
            .then(error => console.error(error))
    }
    return (
        <div className='w-full'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card flex-shrink-0 lg:w-full shadow-2xl bg-base-100">
                        <Form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photourl' placeholder="photo-url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign up</button>
                                </div>
                                <p>Already have an account?<Link className='btn btn-ghost' to='/login'>Login</Link></p>

                                <div className="form-control mt-1">
                                    <button onClick={handleGoogleSubmit} className="btn btn-active btn-ghost">
                                        <FaGoogle className='mr-2' />
                                        Signup with Google</button>
                                </div>
                                <div className="form-control mt-1">
                                    <button onClick={handleGitHubSubmit} className="btn btn-active btn-ghost">
                                        <FaGithub className='mr-2'></FaGithub>
                                        Signup with GitHub</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;