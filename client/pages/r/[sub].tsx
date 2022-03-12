import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ChangeEvent, createRef, Fragment, useEffect, useState } from 'react'
import useSWR from 'swr'
import PostCard from '../../components/PostCard'
import SideBar from '../../components/SideBar';
import { Sub } from '../../types';
import Image from 'next/image';
import { useAuthState } from '../../context/auth'
import classNames from 'classnames';
import Axios from 'axios'
import dayjs from 'dayjs'
import Link from 'next/link'

export default function SubPage() {
  const [ownSub, setOwnSub] = useState(null);
  const router = useRouter();
  const { authenticated, user } = useAuthState();

  const fileInputRef = createRef<HTMLInputElement>();

  const subName = router.query.sub;

  const { data: sub, error, revalidate } = useSWR<Sub>(subName ? `/subs/${subName}` : null)

  //console.log(sub);

  useEffect(() => {
    if(!sub) {
      return;
    }
    setOwnSub(authenticated && user.username === sub.username)
  }, [sub]);

  const openFileInput = (type: string) => {
    if(!ownSub) {
      return;
    }
    fileInputRef.current.name = type;
    fileInputRef.current.click();
  }

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', fileInputRef.current.name);

    try {
      await Axios.post<Sub>(`/subs/${sub.name}/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
          }
      });
      revalidate();
    } catch (error) {
      console.log(error);
    }
  }

  if (error) router.push('/')

  let postsMarkup
  if (!sub) {
    postsMarkup = <p className="text-lg text-center">Loading..</p>
  } else if (sub.posts.length === 0) {
    postsMarkup = <p className="text-lg text-center">No posts submitted yet</p>
  } else {
    postsMarkup = sub.posts.map((post) => (
      <PostCard key={post.identifier} post={post} revalidate={revalidate} />
    ))
  }



  return (
    <div>
      <Head>  
        <title>{sub?.title}</title>
      </Head>
        {sub && (<Fragment>
          <input type="file" hidden={true} ref={fileInputRef} onChange={uploadImage}/>
          <div>
            <div className={classNames("bg-blue-500", {
              'cursor-pointer': ownSub
            })}
            onClick={() => openFileInput('banner')}
            >
              {sub.bannerUrl? (
                <div className="h-56 bg-blue-500" style={{
                  backgroundImage: `url(${sub.bannerUrl})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>

                </div>
              ): (
                <div className="h-20 bg-blue-500"></div>
              )}
            </div>
            <div className="h-20 bg-white">
              <div className="container relative flex">
                <div className="absolute" style={{top:-15}}>
                  <Image 
                    src={sub.imageUrl}
                    alt="sub image"
                    className={classNames("rounded-full", {
                      'cursor-pointer': ownSub
                    })}
                    width={70}
                    height={70}
                    onClick={() => openFileInput('image')}
                    >
                  </Image>
                </div>
                <div className="pt-1 pl-24">
                  <div className="flex items-center">
                    <h1 className="mb-1 text-3xl font-bold">
                      {sub.title}
                    </h1>
                  </div>
                  <p className="text-sm font-bold text-gray-500">
                    /r/{sub.name} . {sub.subOfCommunity? `Sub community of ${sub.subOfCommunity}`: ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container flex pt-5">
            <div className="w-160">{postsMarkup}</div>
            <div className="flex flex-col">
                <SideBar sub={sub} />
                {sub.subOfCommunity===null && 
                  <div className="w-40 m-6 md:w-80">
                      <div className="bg-white rounded">
                          <div className="p-3 bg-blue-500 rounded-t">
                              <p className="font-semibold text-white">
                                Sub Communities
                              </p>
                          </div>
                          <div className="p-3">
                              {sub.subCommunities.length === 0? 'No sub Communities':
                                sub.subCommunities.map(subCommunity => 
                                  //console.log(subCommunity)
                                  (
                                  <Link key={subCommunity.name} href={`/r/${subCommunity.name}`}>
                                    <p className="mb-3 text-md hover:bg-gray-300 hover:cursor-pointer">
                                      {subCommunity.name}
                                    </p>
                                  </Link>
                                  )
                                )
                              }
                              {(authenticated && ownSub) && (
                                  <Link href={`/r/${sub.name}/subCommunity`}>
                                      <a className="w-full py-1 text-sm blue button">
                                          Create Sub community
                                      </a>
                                  </Link>
                              )}
                          </div>
                      </div>
                  </div>

                }
            </div>
            
            
          </div>
        </Fragment>)}
    </div>  
  )
}