import React from 'react';
import './Blog.css';
import { FaAngleDoubleRight } from "react-icons/fa";

const Blog = () => {
    return (
        <div className='ml-10 my-20'>
            <ul>
                <li className='my-5'>
                    <h1 className='text-3xl font-bold mb-5'>1.What is cors?</h1>
                    <p className='flex'><FaAngleDoubleRight className='mr-5'></FaAngleDoubleRight>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                </li>
                <li className='my-5'>
                    <h1 className='text-3xl font-bold mb-5'>2.Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p className='flex'><FaAngleDoubleRight className='mr-5'></FaAngleDoubleRight>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </p>
                </li>
                <li className='my-5'>
                    <h1 className='text-3xl font-bold mb-5'>3.How does the private route work?</h1>
                    <p className='flex'><FaAngleDoubleRight className='mr-5'></FaAngleDoubleRight>
                        The private route component is used to protect selected pages in a React app from unauthenticated users.
                    </p>
                </li>
                <li className='my-5'>
                    <h1 className='text-3xl font-bold mb-5'>4.What is Node? How does Node work?</h1>
                    <p className='flex'><FaAngleDoubleRight className='mr-5'></FaAngleDoubleRight>
                        It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Blog;