import Axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, createRef, FormEvent, Fragment, useState } from "react";
import useSWR from "swr";
import SideBar from "../../../components/SideBar";
import { Post, Sub } from "../../../types";

export default function submit() {

    const router = useRouter();
    const fileInputRef = createRef<HTMLInputElement>();
    const { sub: subName } = router.query;
    const { data: sub, error } = useSWR<Sub>(subName ? `/subs/${subName}`: null);
    if (error) {
        router.push('/');
    }
    const [title, setTitle] = useState("");
    const [toggle, setToggle] = useState(false);
    const [body, setBody] = useState("");
    const [image, setImage] = useState(null);
    const [isCode, setIsCode] = useState(false);
    const [language, setLanguage] = useState("Languages");

    const openFileInput = (type: string) => {
        fileInputRef.current.name = type;
        fileInputRef.current.click();
    }

    const changeImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];
        setImage(file);
    }

    const uploadImageAndSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', image);
        formData.append('title', title);
        formData.append('body', body);
        formData.append('sub', sub.name);
        formData.append('isCode', isCode.toString());
        formData.append('language', language);
        console.log(isCode.toString());
        
    
        try {
          const {data: post}  = await Axios.post<Post>('/posts', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
              }
          });
          router.push(`/r/${sub.name}/${post.identifier}/${post.slug}`);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <div className="container flex pt-5">
            <Head>
                <title>Submit to TIO</title>
            </Head>
            <div className="w-160">
                <input type="file" hidden={true} ref={fileInputRef} onChange={changeImage}/>
                <div className="p-4 bg-white rounded">
                    <h1 className="mb-3 text-lg">
                        Submit a post to /r/{subName}
                    </h1>
                    <form onSubmit={uploadImageAndSubmit}>
                        <div className="relative mb-2">
                            <input type="text" className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
                                placeholder="Title"
                                maxLength={300}
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <div className="absolute mb-2 text-sm text-gray-500 select-none" style={{
                                top: 11,
                                right: 10
                            }}>
                                {title.trim().length} / 300
                            </div>
                        </div>
                        <div>
                            <span onClick={() => openFileInput('file')} className="mb-2 fa fa-plus hover:bg-gray-200"></span>
                            <span className="m-2">Add Photo</span>
                        </div>
                        {image && <p  className="text-sm">Image uploaded!</p>}
                        {sub?.isCodingCommunity === 'true' && <Fragment>
                            <div className="m-2 text-sm">
                            <span>Want to add a Code snippet? Select the Language and Paste the code in the text.</span>
                        </div>
                        <div className="relative inline-block my-1 text-left">
                            <div>
                                <button  onClick={() => setToggle(!toggle)} type="button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none" id="options-menu" aria-haspopup="true" aria-expanded="true">
                                {language}
                                <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                                </button>
                            </div>
                            <div className={`${toggle? 'show': 'hidden'} absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}>
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {
                                    setLanguage("c");
                                    setToggle(false);
                                    }}> C </p>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {setLanguage("cpp"); setToggle(false);}}> C++ </p>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {setLanguage("python"); setToggle(false);}}> Python </p>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {setLanguage("java"); setToggle(false);}}> Java </p>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {setLanguage("javascript"); setToggle(false);}}> Javascript </p>
                                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => {setLanguage("ruby"); setToggle(false);}}> Ruby </p>
                                </div>
                            </div>
                        </div>
                            
                            </Fragment>}
                        <textarea className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
                            value={body}
                            placeholder="Text (optional)"
                            rows={4}
                            onChange={e => setBody(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end">
                            <button className="px-3 py-1 blue button" type="submit"
                                disabled={title.trim().length === 0}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {sub && <SideBar sub={sub}/>}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    try {
        const cookie = req.headers.cookie;
        if(!cookie) {
            throw new Error('Missing cookie');
        }
        await Axios.get('/auth/me', { headers: { cookie } })
        return { props: {message: 'Message'} }
    } catch (error) {
        return {
            redirect: {
                destination: '/login',
                statusCode: 307
            }
        }
    }
} 
