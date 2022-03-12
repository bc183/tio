import Axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import dayjs from 'dayjs';
import { } from 'react'
import relativeTime from 'dayjs/plugin/relativeTime';
import { Fragment, useEffect, useState } from 'react'
import { Post, Sub } from '../types'
import { GetServerSideProps } from 'next';
import PostCard from '../components/PostCard';
import useSwr, { useSWRInfinite } from 'swr';
import Image from 'next/image';
import { useAuthState } from '../context/auth';


dayjs.extend(relativeTime);



export default function Home() {

  //const { data: posts } = useSwr<Post[]>('/posts');
  const { data: topSubs } = useSwr<Sub[]>('/misc/top-subs');

  const [dummy, setDummy] = useState(1);

  const [observedPost, setObservedPost] = useState('');

  const { data, error, mutate, size: page, setSize: setPage, isValidating, revalidate } = useSWRInfinite<Post[]>(
    index => `/posts?page=${index}`
    )

  const posts: Post[] = data? [].concat(...data): [];
  const isLoadingInitialData = !data && !error;
  const title: string = "TIO: Talk It Out";

  const description: string = "Talk It Out is a platorm where people gather together as a communtiy to talk about the stuffs they like.";
  useEffect(() => {
    if (!posts || posts.length === 0)
    {
      return;
    }
    const id = posts[posts.length-1].identifier;
    if (id !== observedPost) {
      setObservedPost(id);
      observeElement(document.getElementById(id))
    }

  }, [posts]);
  

  const observeElement = (element: HTMLElement) => {
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true) {
        console.log("hii");
        setPage(page+1)
        observer.unobserve(element);
      }
    }, { threshold: 1 });
    observer.observe(element);
  }

  const setVote = (value: number, post: Post) => {
    let index: number = 0;
    posts.forEach((postTemp, indexTemp) => {
      if (postTemp.identifier === post.identifier) {
        index = indexTemp;
        console.log(post.identifier);
      }
    });
    let postEdit = posts[index];
    postEdit.userVote = value;
    postEdit.voteScore = postEdit.voteScore === 0 || postEdit.voteScore === 1 || postEdit.voteScore === -1? value: postEdit.voteScore+=value;
    posts.splice(index, 1);
    posts.splice(index, 0, postEdit);
    console.log(posts);
  }

  const { authenticated } = useAuthState()
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}>
        </meta>
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <div className="container flex pt-4">
        <div className="w-full md:w-160">
          { isLoadingInitialData && <p className="text-lg text-center">Loading...</p> }
          {posts?.map(post => (
            <PostCard post={post} key={post.identifier} setVote={setVote} setDummy={setDummy}/>              
          ))}
          { isValidating && posts.length > 0 && <p className="text-lg text-center">Loading more...</p> }
        </div>
        <div className="hidden px-4 ml-6 md:block md:p-0 w-80">
          <div className="bg-white rounded">
            <div className="p-4 border-b-2">
              <p className="text-lg font-semibold text-center">
                Top Communities
              </p>
            </div>
            <div>
              {topSubs?.map((sub)=> {
                return (
                  <div key={sub.name} className="flex items-center px-4 py-2 text-xs border-b">
                      <Link href={`/r/${sub.name}`}>
                        <a>
                          <Image 
                            className="rounded-full cursor-pointer"
                            src={sub.imageUrl}
                            alt="sub"
                            width={6*16/4}
                            height={6*16/4}
                          />
                        </a>
                      </Link>
                    <Link href={`/r/${sub.name}`}>
                        <a className="ml-2 font-bold hover:cursor-pointer">
                          /r/{sub.name}
                        </a>
                      </Link>
                      <p className="ml-auto font-medium">{sub.postCount}</p>
                  </div>
                )
              })}
            </div>
            {authenticated && (
              <div className="p-4 border-t-2">
                <Link href="/subs/create">
                  <a className="w-full px-2 py-1 blue button">  
                    Create Community
                  </a>
                </Link>
              </div>
            )}
            
          </div> 
        </div>
      </div>
    </Fragment>
  )
}
// server side rendering
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const res = await Axios.get('/posts')

//     return { props: {posts: res.data} }
//   } catch (error) {
//     return {props: {error: 'Something went wrong'}}
//   }
// }

