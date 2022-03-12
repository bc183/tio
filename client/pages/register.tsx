import { FormEvent, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Axios from 'axios';
import InputGroup from '../components/InputGroup';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useAuthState } from '../context/auth';

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const router = useRouter()
    const { authenticated } = useAuthState();

    if(authenticated) {
        router.push('/');
    }

    const submitForm = async (event: FormEvent) => {
        event.preventDefault();

        try {
            await Axios.post('/auth/register', {
                email,
                password,
                username
            })
            router.push('/login');
        } catch (error) {
            console.log(error);
            setErrors(error.response.data);
        }

        
    }
    return (
        <div className="flex bg-white">
            <Head>
                <title>Register</title>
                <link rel="icon" href='/favicon.ico'/>
            </Head>
            <div className="h-screen bg-center bg-cover w-36" style={{ backgroundImage: "url('/images/waterfall.jpg')" }}>
            </div>
            <div className="flex flex-col justify-center pl-6">
                <div className="w-70">
                    <h1 className="text-lg font-medium mb2">Sign up</h1>
                    <p className="mb-10 text-xs">
                        By continuing, you agree to our terms and conditions.
                    </p>
                    <form onSubmit={submitForm}>
                        <div className="mb-6">
                            <input type="checkbox" className="mr-1 cursor-pointer" id="agreement" checked={checkbox} 
                            onChange={e=> setCheckbox(e.target.checked)}/>
                            <label htmlFor="agreement" className="text-xs cursor-pointer">
                                Keep me logged in.
                            </label>
                        </div> 
                        <InputGroup className="mb-2" value={email} setValue={setEmail} 
                            placeholder="Email" error={errors.email}
                            type="email"
                            />
                        <InputGroup className="mb-2" value={username} setValue={setUsername} 
                            placeholder="Username" error={errors.username}
                            type="text"
                            />
                        <InputGroup className="mb-4" value={password} setValue={setPassword} 
                            placeholder="Password" error={errors.password}
                            type="password"
                            />
                        <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border-blue-500 rounded">
                            Sign up
                        </button>
                    </form>
                    <small>
                        Already have an account? 
                        <Link href="/login">
                            <a className="ml-1 text-blue-500">Log In</a>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    )
}