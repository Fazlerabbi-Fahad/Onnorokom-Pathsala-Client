import React from 'react';
import { Form, Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))

    }
    return (
        <div className='w-full'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card flex-shrink-0 lg:w-full shadow-2xl bg-base-100">
                        <Form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn btn-active btn-ghost">Login</button>
                                </div>
                                <div>
                                    <p>New to Onnorokom Pathshala? <Link className='btn btn-ghost' to='/register'>Sign up</Link></p>
                                </div>
                                <div className="form-control mt-1">
                                    <button className="btn btn-active btn-ghost">
                                        <FaGoogle className='mr-2' />
                                        Login with Google</button>
                                </div>
                                <div className="form-control mt-1">
                                    <button className="btn btn-active btn-ghost">
                                        <FaGithub className='mr-2'></FaGithub>
                                        Login with GitHub</button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;