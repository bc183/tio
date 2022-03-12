import '../styles/tailwind.css'
import '../styles/icons.css'
import { AppProps } from 'next/app'
import Axios from 'axios';
import { SWRConfig } from 'swr';
import NavBar from '../components/NavBar';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/auth';


Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api';
Axios.defaults.withCredentials = true;

const fetcher = async (url:string) => {
  try {
    const res = await Axios.get(url);
    return res.data
  } catch (error) {
    throw error.response.data
  }
}

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const authRoutes = ['/login', '/register']
  const authRoute = authRoutes.includes(pathname);
  return (
    <SWRConfig
      value={{
        fetcher
      }}
    >
      <AuthProvider>
      {!authRoute && <NavBar />}
      <div className={authRoute? '' : 'pt-12'}>
        <Component {...pageProps}/>
      </div>
    </AuthProvider>
    </SWRConfig>
    
  )
}

export default App;
