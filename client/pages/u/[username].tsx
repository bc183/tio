import Axios from "axios";
import dayjs from "dayjs";
import  Head  from "next/head";
import Link from "next/link";
import { useRouter } from "next/router"
import { ChangeEvent, createRef, Fragment } from "react";
import useSWR from "swr";
import PostCard from "../../components/PostCard";
import { useAuthState } from "../../context/auth";
import { Comment, Post, User } from "../../types";
import Image from 'next/image';
import classNames from "classnames";


export default function user() {
    const router = useRouter();
    const { user } = useAuthState();
    const username = router.query.username;
    const { data, error, revalidate } = useSWR<any>(username ? `/users/${username}`: null);
    if (error) {
        router.push('/');
    }
    // if (data) {
    //     console.log(data);
    // }
    const loggedInUser: boolean = user?.username === username; 
    const fileInputRef = createRef<HTMLInputElement>();
    const openFileInput = (type: string) => {
        if(!loggedInUser) {
          return;
        }
        fileInputRef.current.name = type;
        fileInputRef.current.click();
      }

      const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          await Axios.post<User>(`/users/${user?.username}/profile`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
              }
          });
          revalidate();
        } catch (error) {
          console.log(error);
        }
      }
    return (
        <Fragment>
            <Head>
                <title>{data?.user.username}</title>
            </Head>
            {data && (
                <div className="container flex pt-5">
                <input type="file" hidden={true} ref={fileInputRef} onChange={uploadImage}/>
                    <div className="w-160">
                        {data.submissions.map((submission: any) => {
                            if (submission.type === 'Post') {
                                const post: Post = submission;
                                return <PostCard key={submission.identifier} post={post} revalidate={revalidate}/>
                            } else {
                                const comment: Comment = submission;
                                return (
                                    <div key={comment.identifier} className="flex my-4 bg-white rounded">
                                        <div className="flex-shrink-0 w-10 py-4 text-center bg-gray-200 rounded-l">
                                            <i className="text-gray-500 fas fa-comment-alt fa-xs"></i>
                                        </div>
                                        <div className="w-full p-2">
                                            <p className="mb-2 text-xs text-gray-500">
                                                {comment.username}
                                                <span> commented on </span>
                                                <Link
                                                    href={comment.post.url}
                                                >
                                                    <a href="" className="font-semibold cursor-pointer hover:underline">
                                                        {comment.post.title}
                                                    </a>
                                                </Link>
                                                <span className="mx-1">.</span>
                                                <Link
                                                    href={`/r/${comment.post.subName}`}
                                                >
                                                    <a href="" className="text-black cursor-pointer hover:underline">
                                                        /r/{comment.post.subName}
                                                    </a>
                                                </Link>
                                            </p>
                                            <hr/>
                                            <p>{comment.body}</p>
                                        </div>
                                    </div>
                                );
                            }
                        } )}
                    </div>
                    <div className="ml-6 w-80">
                        <div className="bg-white rounded">
                            <div className="p-3 bg-blue-500 rounded-t">
                                <img 
                                src={data.user.imageUrl} 
                                alt="user-profile"
                                className={classNames("w-16 h-16 mx-auto border-2 border-white rounded-full", {
                                    'cursor-pointer': loggedInUser
                                  })}
                                onClick={() => openFileInput('image')}
                                />
                            </div>
                            <div className="p-3 text-center">
                            <h1 className="mb-3 text-xl">
                                {data.user.username}
                            </h1>
                            <hr/>
                            <p className="mt-3">Joined {dayjs(data.user.createdAt).format('MMM YYYY')}</p>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}
