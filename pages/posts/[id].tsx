import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { getAllPostIds, getPostData } from '../../lib/post'
import Head from 'next/head'
import homeStyles from '../../styles/Home.module.css'
import postStyles from '../../styles/Post.module.css'

const Post = ({postData} :{
    postData:{
        title: string
        date: string
        contentHtml: string
    }
}) => {
  return (
    <div className={postStyles.container}>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={homeStyles.headingXl}>{postData.title}</h1>
            <div>
                {postData.date}
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </article>
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();//paths안에 id가 들어있음

    //[{params: {id: 'test1'}, params: {id: 'test2'}}]
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps =async ({params}) => {
    const postData = await getPostData(params.id as string);
    return {
        props:{
            postData
        }
    }
}
 