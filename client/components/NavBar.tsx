import Axios from "axios";
import Image from "next/image";
import Link from "next/link"
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useAuthDispatch, useAuthState } from "../context/auth";
import { Sub } from "../types";

const NavBar: React.FC = () => {
    const { authenticated, loading } = useAuthState();
    const [timer, setTimer] = useState(null)
    const [name, setName] = useState("");
    const [ subs, setSubs ] = useState<Sub[]>([])
    const dispatch = useAuthDispatch();
    const router = useRouter();
    const logout = () => {
      Axios.get('/auth/logout').then(() => {
        dispatch({ type: 'LOGOUT' });
        window.location.reload();
      }).catch(err => {
        console.log(err);
      })
    }

    useEffect(() => {
      if (name.trim() === '') {
        setSubs([]);
        return;
      }
      searchSubs()
    }, [name])

    const searchSubs = async () => {
      clearTimeout(timer);
      setTimer(setTimeout(async () => {
        try {
          const { data } = await Axios.get(`/subs/search/${name}`);
          setSubs(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }, 250));
    }

    const goToSub = (subName: string) => {
      router.push(`/r/${subName}`);
      setName('');
    }

    return (
        <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between h-12 px-5 bg-white">
        <div className="flex items-center">
          <span className="text-2xl font-semibold">
            <Link href="/">
              <a>
                TIO
              </a>
            </Link>
          </span>
        </div>
        <div className="max-w-full px-4 w-160">
        <div className="relative flex items-center mx-auto bg-gray-100 border rounded hover:border-blue-500 hover:bg-white">
            <i className="pl-4 pr-3 text-gray-500 fas fa-search"></i>
            <input type="text" placeholder="Search" value={name} onChange={e => setName(e.target.value)} className="py-1 pr-3 bg-transparent rounded focus:outline-none"/ >
            <div className="absolute left-0 right-0 bg-white" style={{ top: '100%' }}>
              {subs?.map(sub => (
                <div key={sub.name} onClick={() => goToSub(sub.name)} className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-200">
                    <Image className="rounded-full" src={sub.imageUrl}
                      alt="Sub"
                      height={( 8 * 16 )/4}
                      width={( 8 * 16 )/4}
                    />
                    <div className="ml-4 text-sm">
                      <p className="font-medium">
                        {sub.name}
                      </p>
                      <p className="text-gray-600">
                        {sub.title}
                      </p>
                    </div>
                </div>
              ))}
            </div>  
          </div>
        </div>
        
        <div className="flex">
          {!loading && (authenticated?
          (
            <button onClick={logout} className="hidden w-20 py-1 mr-4 leading-5 sm:block lg:w-32 hollow blue button">
              Logout
            </button>
          ):
          (
            <Fragment>
              <Link href="/login">
              <a className="hidden w-20 py-1 mr-4 leading-5 sm:block lg:w-32 hollow blue button">
                log in
              </a>
            </Link>
            <Link href="/register">
              <a className="hidden w-20 py-1 leading-5 sm:block lg:w-32 blue button">
                register
              </a>
            </Link>
          </Fragment>
          ))}
          
        </div>
      </div>
    )
}

export default NavBar;