import Axios from 'axios';
import classNames from 'classnames';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link'
import router, { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import { useAuthState } from '../context/auth';
import submit from '../pages/r/[sub]/submit';
import { Post } from '../types'
import ActionButton from './ActionButton';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface PostCardProps {
    post: Post,
    revalidate?: Function 
    setVote?: Function
    setDummy?: Function
}

dayjs.extend(relativeTime);



export default function PostCard({ post, revalidate, setVote, setDummy }: PostCardProps) {

  const { authenticated } = useAuthState();

  const router = useRouter();

  const isInSubpage = router.pathname === '/r/[sub]';

 // console.log(post);
  

  const vote = async (value: number) => {
    // If not logged in go to login
    if (!authenticated) router.push('/login')

    console.log("hi vote");
    

    // If vote is the same reset vote
    if (value === post.userVote) value = 0

    try {
      const res = await Axios.post('/misc/vote', {
        identifier: post.identifier,
        slug: post.slug,
        value: value,
      });

      if (revalidate) {
        revalidate();
      }

      setVote(value, post);
      //console.log(dummy);
      
      setDummy({});
  

      //console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }
    return (
        <div key={post.identifier} id={post.identifier} className="flex mb-4 bg-white rounded">
              <div className="w-10 py-3 text-center bg-gray-200 rounded-l">
                <div onClick={() => vote(1)} className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500">
                    <i className={classNames("icon-arrow-up", {
                      "text-red-500": post.userVote === 1
                    })}></i>
                </div>
                <p>
                    {post.voteScore}
                </p>
                <div onClick={() => vote(-1)} className="w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-600">
                    <i className={classNames("icon-arrow-down", {
                      "text-blue-600": post.userVote === -1
                    })}></i>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="flex items-center ">
                  {!isInSubpage && (<Fragment>
                  <Link href={`/r/${post.subName}`}>
                      <img src={post.sub.imageUrl || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} 
                        className="w-6 h-6 mr-1 rounded-full cursor-pointer"
                          />
                  </Link>
                  <Link href={`/r/${post.subName}`}>
                    <a className="text-xs font-bold cursor-pointer hover:underline">
                          /r/{post.subName}
                        </a>
                  </Link>
                  </Fragment>)}
                
                  <p className="text-xs text-gray-600">
                    . Posted by 
                    <Link href={`/u/${post.username}`}>
                      <a className="mx-1 hover:underline">
                        /u/{post.username}
                      </a>
                    </Link>
                    <Link href={post.url}>
                      <a className="mx-1 hover:underline">
                        {dayjs(post.createdAt).fromNow()}
                      </a>
                    </Link>
                  </p>
                </div>
                <Link href={post.url}>
                <a className="my-1 text-lg font-medium">
                  {post.title}
                </a>
              </Link>
              {post.imageUrl !== null && <img src={post.imageUrl}/>}
              {(post.body && post.language ) ? <SyntaxHighlighter className="my-1 text-sm" language={post.language}>
                        {post.body}
                  </SyntaxHighlighter>: <p className="my-1 text-sm">
                    {post.body}
                  </p>}
                <div className="flex">
                  <Link href={post.url}>
                    <a>
                      <ActionButton>
                        <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                        <span className="font-bold">
                          {post.commentCount} Comments
                        </span>
                      </ActionButton>
                    </a>
                  </Link>
                  <ActionButton>
                        <i className="mr-1 fas fa-share fa-xs"></i>
                        <span className="font-bold">
                          Share
                        </span>
                      </ActionButton>
                      <ActionButton>
                        <i className="mr-1 fas fa-bookmark fa-xs"></i>
                        <span className="font-bold">
                          Save
                        </span>
                      </ActionButton>
                </div>
              </div>
            </div>
    )
}
